/**
 * Utility functions for program sanbboxing
 */
 
#include <sys/prctl.h>
#include <linux/seccomp.h>
#include <stdio.h>
#include <stdlib.h> 
#include <unistd.h>
#include <stddef.h>
#include <errno.h>
#include <linux/unistd.h>
#include <sys/mman.h>
#include <linux/filter.h>
#include <linux/audit.h>

#define syscall_nr (offsetof(struct seccomp_data, nr))
#define arch_nr (offsetof(struct seccomp_data, arch))

#if defined(__i386__)
# define REG_SYSCALL	REG_EAX
# define ARCH_NR	AUDIT_ARCH_I386
#elif defined(__x86_64__)
# define REG_SYSCALL	REG_RAX
# define ARCH_NR	AUDIT_ARCH_X86_64
#else
# warning "Platform does not support seccomp filter yet"
# define REG_SYSCALL	0
# define ARCH_NR	0
#endif
 
#define VALIDATE_ARCHITECTURE \
     BPF_STMT(BPF_LD+BPF_W+BPF_ABS, arch_nr), \
     BPF_JUMP(BPF_JMP+BPF_JEQ+BPF_K, ARCH_NR, 1, 0), \
     BPF_STMT(BPF_RET+BPF_K, SECCOMP_RET_KILL)
 
#define EXAMINE_SYSCALL \
     BPF_STMT(BPF_LD+BPF_W+BPF_ABS, syscall_nr)
 
#define ALLOW_SYSCALL(name) \
     BPF_JUMP(BPF_JMP+BPF_JEQ+BPF_K, __NR_##name, 0, 1), \
     BPF_STMT(BPF_RET+BPF_K, SECCOMP_RET_ALLOW)
 
#define KILL_PROCESS \
     BPF_STMT(BPF_RET+BPF_K, SECCOMP_RET_KILL)

 
int startSandbox()
{
	// Make the filter with the authorized syscalls
	struct sock_filter filter[] = {
		VALIDATE_ARCHITECTURE,
		EXAMINE_SYSCALL,
		ALLOW_SYSCALL(rt_sigreturn),
#ifdef __NR_sigreturn
		ALLOW_SYSCALL(sigreturn),
#endif
		ALLOW_SYSCALL(rt_sigaction),
		ALLOW_SYSCALL(exit_group),
		ALLOW_SYSCALL(exit),
		ALLOW_SYSCALL(close),
		ALLOW_SYSCALL(read),
		ALLOW_SYSCALL(write),
		ALLOW_SYSCALL(lseek),
		ALLOW_SYSCALL(brk),
		ALLOW_SYSCALL(mmap),
		ALLOW_SYSCALL(munmap),
		ALLOW_SYSCALL(clock_gettime),
		KILL_PROCESS,
	};
	struct sock_fprog filterProg = {
		.len = (unsigned short)(sizeof(filter) / sizeof(filter[0])),
		.filter = filter
	};
	// install the filter
	if (-1 == prctl(PR_SET_NO_NEW_PRIVS, 1, 0, 0, 0, 0)) return errno;
	if (-1 == prctl(PR_SET_SECCOMP, SECCOMP_MODE_FILTER, &filterProg)) return errno;
	return 0;
}
 
