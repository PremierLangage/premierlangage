#! /usr/bin/env python3
"""
Preset configuration for the sandbox parameters
"""

from steval import sandbox

SANDBOX = {
	"unlimited": Sandbox(enabled=False),
	"50M-10s": Sandbox(enabled=False, memory_limit=50000000, cpu_limit=10000),
	"seccomp-50M-10s": Sandbox(enabled=True, memory_limit=50000000, cpu_limit=10000)
}

DEFAULT_SANDBOX = "seccomp-50M-10s"
