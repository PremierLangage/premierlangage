# -*- coding: utf-8 -*-

import os
import shutil
import subprocess
import unittest

from gitcmd import gitcmd


gitcmd.GIT_LANG = 'en_US.UTF-8'

FILE_DIR = os.path.dirname(os.path.realpath(__file__))
HOST_DIR = os.path.join(FILE_DIR, "host")
LOCAL_DIRS = os.path.join(FILE_DIR, "local/")



def command(cmd):
    p = subprocess.Popen(
        cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        shell=True
    )
    out, err = p.communicate()
    if p.returncode:
        raise RuntimeError(
            "Return code : " + str(p.returncode) + " - " + err.decode() + out.decode())
    return p.returncode, out.decode().strip(), err.decode()



class TestGitcmd(unittest.TestCase):
    
    def setUp(self):
        if os.path.isdir(HOST_DIR):
            shutil.rmtree(HOST_DIR)
        if os.path.isdir(LOCAL_DIRS):
            shutil.rmtree(LOCAL_DIRS)
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(local, 'file.txt')
        os.makedirs(LOCAL_DIRS)
        
        cwd = os.getcwd()
        command('git init --bare ' + HOST_DIR)
        command('git init ' + local)
        os.chdir(local)
        command('git config user.email "you@example.com"')
        command('git config user.name "Your Name"')
        command('git remote add origin ' + HOST_DIR)
        command('touch ' + test_file)
        command('git add ' + test_file)
        command('git commit ' + test_file + ' -m "test"')
        command('git push --set-upstream origin master')
        os.chdir(cwd)
    
    
    def tearDown(self):
        shutil.rmtree(HOST_DIR)
        shutil.rmtree(LOCAL_DIRS)
    
    
    def test0000_in_repository(self):
        test_file = os.path.join(LOCAL_DIRS, 'local/file.txt')
        
        self.assertTrue(gitcmd.in_repository(test_file))
        self.assertTrue(gitcmd.in_repository(test_file, False))
    
    
    def test0001_not_in_repository(self):
        test_file = os.path.join(LOCAL_DIRS, '/tmp')
        
        self.assertFalse(gitcmd.in_repository(test_file))
        self.assertFalse(gitcmd.in_repository(test_file, False))
    
    
    def test0002_in_repository_ignored(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(LOCAL_DIRS, 'local/file2.txt')
        open(test_file, 'w+').close()
        with open(os.path.join(local, '.gitignore'), 'w+') as f:
            print("file2.txt", file=f)
        
        self.assertTrue(gitcmd.in_repository(test_file))
        self.assertFalse(gitcmd.in_repository(test_file, False))
    
    
    def test0100_clone(self):
        self.assertEqual(0, gitcmd.clone(LOCAL_DIRS, HOST_DIR)[0])
        self.assertTrue(os.path.isdir(os.path.join(LOCAL_DIRS, 'host')))
    
    
    def test0101_clone_to(self):
        self.assertEqual(0, gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='test')[0])
        self.assertTrue(os.path.isdir(os.path.join(LOCAL_DIRS, 'test')))
    
    
    def test0102_clone_exception(self):
        with self.assertRaises(ValueError):
            gitcmd.clone(os.path.join(LOCAL_DIRS, 'local/file2.txt'), HOST_DIR, to='test',
                         username="user")
    
    
    def test0102_clone_need_credentials(self):
        pass  # TODO - Testing access denied by a private repository when not providing credentials
    
    
    def test0103_clone_credentials(self):
        pass  # TODO - Testing access to a private repository when providing credentials
    
    
    def test0200_add(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(local, 'test')
        
        open(test_file, 'w+').close()
        ret, out, err = gitcmd.add(test_file)
        self.assertEqual(ret, 0)
        self.assertEqual(out, "")
        test_file = os.path.join(local, 'test')
        
        open(test_file, 'w+').close()
        ret, out, err = gitcmd.add(local)
        self.assertEqual(ret, 0)
        self.assertEqual(out, "")
    
    
    def test0201_add_exception(self):
        with self.assertRaises(gitcmd.NotInRepositoryError):
            gitcmd.add('/tmp')
    
    
    def test0300_commit(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(local, 'test')
        test_file2 = os.path.join(local, 'test2')
        
        open(test_file, 'w+').close()
        gitcmd.add(test_file)
        ret, out, err = gitcmd.commit(test_file, 'test')
        self.assertEqual(ret, 0)
        self.assertTrue(
            "test\n 1 file changed, 0 insertions(+), 0 deletions(-)\n create mode 100644 test"
            in out
        )
        
        open(test_file2, 'w+').close()
        gitcmd.add(test_file2)
        ret, out, err = gitcmd.commit(local, 'test')
        self.assertEqual(ret, 0)
        self.assertTrue(
            "test\n 1 file changed, 0 insertions(+), 0 deletions(-)\n create mode 100644 test2"
            in out
        )
        
    def test0302_commit_name(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(local, 'test')
        open(test_file, 'w+').close()
        gitcmd.add(test_file)
        gitcmd.commit(test_file, 'test', name="Its Me", mail="test@test.com")
        cwd = os.getcwd();
        os.chdir(local)
        _, out, _ = command("git log")
        os.chdir(cwd)
        self.assertIn("Its Me <test@test.com>", out)


    def test0302_commit_name_nomail(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(local, 'test')
        open(test_file, 'w+').close()
        with self.assertRaises(ValueError):
            gitcmd.commit(test_file, 'test', name="Its Me")

    def test0302_commit_mail_noname(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(local, 'test')
        open(test_file, 'w+').close()
        with self.assertRaises(ValueError):
            gitcmd.commit(test_file, 'test', mail="test@test.com")
    
    def test0301_commit_exception(self):
        with self.assertRaises(gitcmd.NotInRepositoryError):
            gitcmd.commit('/tmp', 'log')
    
    
    def test0400_status_clean(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        ret, out, err = gitcmd.status(local)
        
        self.assertEqual(ret, 0)
        self.assertTrue('nothing to commit' in out)
    
    
    def test0401_status_to_add(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(local, 'test')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        open(test_file, 'w+').close()
        ret, out, err = gitcmd.status(local)
        
        self.assertEqual(ret, 0)
        self.assertTrue('Untracked files:' in out)
    
    
    def test0402_status_to_commit(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(local, 'test')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        open(test_file, 'w+').close()
        gitcmd.add(test_file)
        ret, out, err = gitcmd.status(local)
        
        self.assertEqual(ret, 0)
        self.assertTrue('Changes to be committed:' in out)
    
    
    def test0403_status_committed(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(local, 'test')
        test_file2 = os.path.join(local, 'test2')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        open(test_file, 'w+').close()
        gitcmd.add(test_file)
        gitcmd.commit(test_file, 'test')
        ret, out, err = gitcmd.status(local)
        self.assertEqual(ret, 0)
        self.assertIn("Your branch is ahead of 'origin/master' by 1 commit.", out)
        
        open(test_file2, 'w+').close()
        gitcmd.add(test_file2)
        gitcmd.commit(test_file2, 'test')
        ret, out, err = gitcmd.status(test_file2)
        self.assertEqual(ret, 0)
        self.assertIn("Your branch is ahead of 'origin/master' by 2 commits.", out)
    
    
    def test0404_status_exception(self):
        with self.assertRaises(gitcmd.NotInRepositoryError):
            gitcmd.status('/tmp')
    
    
    def test0500_push(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(local, 'test')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        open(test_file, 'w+').close()
        gitcmd.add(test_file)
        gitcmd.commit(test_file, 'test')
        ret, out, err = gitcmd.push(local, HOST_DIR)
        
        self.assertEqual(ret, 0)
        self.assertIn("master -> master", err)
    
    
    def test0501_push_no_url(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(local, 'test')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        open(test_file, 'w+').close()
        gitcmd.add(test_file)
        gitcmd.commit(test_file, 'test')
        ret, out, err = gitcmd.push(local)
        
        self.assertEqual(ret, 0)
        self.assertIn("master -> master", err)
    
    
    def test0502_push_need_credentials(self):
        pass  # TODO - Testing access denied by a private repository when not providing credentials
    
    
    def test0503_push_credentials(self):
        pass  # TODO - Testing access to a private repository when providing credentials
    
    
    def test0504_push_exception(self):
        with self.assertRaises(gitcmd.NotInRepositoryError):
            gitcmd.push('/tmp', 'url')
        
        local = os.path.join(LOCAL_DIRS, 'local')
        with self.assertRaises(ValueError):
            gitcmd.push(os.path.join(local, 'test'), 'url', "username")
    
    
    def test0600_branch(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(local, 'test')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        open(test_file, 'w+').close()
        gitcmd.add(test_file)
        gitcmd.commit(test_file, 'test')
        gitcmd.push(local, HOST_DIR)
        
        ret, out, err = gitcmd.branch(local)
        self.assertEqual(ret, 0)
        self.assertEqual(out, "* master")
        
        ret, out, err = gitcmd.branch(test_file)
        self.assertEqual(ret, 0)
        self.assertEqual(out, "* master")
    
    
    def test0601_branch_exception(self):
        with self.assertRaises(gitcmd.NotInRepositoryError):
            gitcmd.branch('/tmp')
    
    
    def test0700_checkout(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        with open(os.path.join(local, 'file.txt'), 'w+') as f:
            print("test", file=f)
        ret, out, err = gitcmd.status(local)
        self.assertEqual(ret, 0)
        self.assertIn("Changes not staged for commit", out)
        ret, out, err = gitcmd.checkout(os.path.join(local, 'file.txt'))
        self.assertEqual(ret, 0)
        ret, out, err = gitcmd.status(local)
        self.assertIn("working tree clean", out)
    
    
    def test0701_checkout_new_branch(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        ret, out, err = gitcmd.checkout(local, 'test_branch', True)
        self.assertEqual(ret, 0)
        self.assertIn("Switched to a new branch 'test_branch'", err)
        ret, out, err = gitcmd.branch(local)
        self.assertEqual("  master\n* test_branch", out)
    
    
    def test0702_checkout_branch(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        gitcmd.checkout(local, 'test_branch', True)
        gitcmd.branch(local)
        gitcmd.checkout(local, 'master')
        ret, out, err = gitcmd.branch(local)
        self.assertEqual(ret, 0)
        self.assertEqual("* master\n  test_branch", out)
    
    
    def test0703_checkout_nonexistent_branch(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        ret, out, err = gitcmd.checkout(local, 'test_branch')
        self.assertEqual(ret, 1)
        self.assertIn("pathspec 'test_branch' did not match any file(s) known to git", err)
    
    
    def test0704_checkout_exception(self):
        with self.assertRaises(gitcmd.NotInRepositoryError):
            gitcmd.checkout('/tmp')
    
    
    def test0800_current_branch(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(LOCAL_DIRS, 'local/file.txt')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        ret, out, err = gitcmd.current_branch(local)
        self.assertEqual(ret, 0)
        self.assertEqual(out, "master")
        gitcmd.checkout(local, branch="test_branch", new=True)
        ret, out, err = gitcmd.current_branch(local)
        self.assertEqual(ret, 0)
        self.assertEqual(out, "test_branch")
        ret, out, err = gitcmd.current_branch(test_file)
        self.assertEqual(ret, 0)
        self.assertEqual(out, "test_branch")
    
    
    def test0801_current_branch_exception(self):
        with self.assertRaises(gitcmd.NotInRepositoryError):
            gitcmd.current_branch('/tmp')
    
    
    def test0900_reset(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(local, 'file.txt')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        with open(test_file, 'w+') as f:
            print("test", file=f)
        gitcmd.add(test_file)
        ret, out, err = gitcmd.status(local)
        self.assertEqual(ret, 0)
        self.assertIn("Changes to be committed", out)
        ret, out, err = gitcmd.reset(local)
        self.assertEqual(ret, 0)
        self.assertEqual("Unstaged changes after reset:\nM\tfile.txt", out)
        ret, out, err = gitcmd.status(local)
        self.assertEqual(ret, 0)
        self.assertIn("Changes not staged for commit:", out)
        
        with open(test_file, 'w+') as f:
            print("test", file=f)
        gitcmd.add(test_file)
        ret, out, err = gitcmd.status(local)
        self.assertEqual(ret, 0)
        self.assertIn("Changes to be committed", out)
        ret, out, err = gitcmd.reset(test_file)
        self.assertEqual(ret, 0)
        self.assertEqual("Unstaged changes after reset:\nM\tfile.txt", out)
        ret, out, err = gitcmd.status(local)
        self.assertEqual(ret, 0)
        self.assertIn("Changes not staged for commit:", out)
    
    
    def test0902_reset_value_error(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        with self.assertRaises(ValueError):
            gitcmd.reset(local, mode="error")
    
    
    def test0903_reset_exception(self):
        with self.assertRaises(gitcmd.NotInRepositoryError):
            gitcmd.reset('/tmp')
    
    
    def test1000_pull(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        local2 = os.path.join(LOCAL_DIRS, 'local2')
        test_file = os.path.join(local, 'testfile')
        test_file2 = os.path.join(local, 'testfile')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local2')
        open(test_file, 'w+').close()
        gitcmd.add(test_file)
        gitcmd.commit(test_file, 'test')
        gitcmd.push(local, HOST_DIR)
        ret, out, err = gitcmd.pull(local2, HOST_DIR)
        self.assertEqual(ret, 0)
        self.assertIn("Fast-forward\n testfile", out)
        self.assertTrue(os.path.isfile(test_file2))
    
    
    def test1001_pull_no_url(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        local2 = os.path.join(LOCAL_DIRS, 'local2')
        test_file = os.path.join(local, 'testfile')
        test_file2 = os.path.join(local, 'testfile')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local2')
        open(test_file, 'w+').close()
        gitcmd.add(test_file)
        gitcmd.commit(test_file, 'test')
        gitcmd.push(local, HOST_DIR)
        ret, out, err = gitcmd.pull(local2)
        self.assertEqual(ret, 0)
        self.assertIn("Fast-forward\n testfile", out)
        self.assertTrue(os.path.isfile(test_file2))
    
    
    def test1002_pull_useless(self):
        local2 = os.path.join(LOCAL_DIRS, 'local2')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local2')
        ret, out, err = gitcmd.pull(local2, HOST_DIR)
        self.assertEqual(ret, 0)
        self.assertEqual("Already up to date.", out.replace('-', ' '))
    
    
    def test1003_pull_need_credentials(self):
        pass  # TODO - Testing access denied by a private repository when not providing credentials
    
    
    def test1004_pull_credentials(self):
        pass  # TODO - Testing access to a private repository when providing credentials
    
    
    def test1005_pull_exception(self):
        with self.assertRaises(gitcmd.NotInRepositoryError):
            gitcmd.pull('/tmp', 'url')
        
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(local, 'testfile')
        test_file2 = os.path.join(local, 'testfile')
        
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local2')
        open(test_file, 'w+').close()
        gitcmd.add(test_file)
        gitcmd.commit(test_file, 'test')
        gitcmd.push(local, HOST_DIR)
        with self.assertRaises(ValueError):
            gitcmd.pull(test_file2, HOST_DIR, "username")
    
    
    def test1100_remote_url(self):
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        test_file = os.path.join(LOCAL_DIRS, 'local/file.txt')
        
        ret, out, err = gitcmd.remote_url(os.path.join(LOCAL_DIRS, 'local'))
        self.assertEqual(ret, 0)
        self.assertEqual(out, HOST_DIR)
        
        ret, out, err = gitcmd.remote_url(test_file)
        self.assertEqual(ret, 0)
        self.assertEqual(out, HOST_DIR)
    
    
    def test1101_remote_url_exception(self):
        with self.assertRaises(gitcmd.NotInRepositoryError):
            gitcmd.remote_url('/tmp')
    
    
    def test1200_make_public_url(self):
        public1 = "http://www.google.com"
        public2 = "https://github.com/qcoumes/gitcmd"
        secret = "https://login:password@github.com/qcoumes/gitcmd"
        
        self.assertEqual(public1, gitcmd.make_public_url(public1))
        self.assertEqual(public2, gitcmd.make_public_url(public2))
        
        psecret = gitcmd.make_public_url(secret)
        self.assertEqual(public2, psecret)
        self.assertTrue('login' not in psecret and 'password' not in psecret)
    
    
    def test1300_set_url(self):
        gitcmd.clone(LOCAL_DIRS, HOST_DIR, to='local')
        url = 'https://github.com/qcoumes/gitcmd'
        test_file = os.path.join(LOCAL_DIRS, 'local/file.txt')
        
        ret, out, err = gitcmd.remote_url(os.path.join(LOCAL_DIRS, 'local'))
        self.assertEqual(ret, 0)
        self.assertEqual(out, HOST_DIR)
        
        ret, out, err = gitcmd.set_url(os.path.join(LOCAL_DIRS, 'local'), url)
        self.assertEqual(ret, 0)
        
        ret, out, err = gitcmd.set_url(test_file, url)
        self.assertEqual(ret, 0)
        
        ret, out, err = gitcmd.remote_url(os.path.join(LOCAL_DIRS, 'local'))
        self.assertEqual(ret, 0)
        self.assertEqual(out, url)
    
    
    def test1301_set_url_exception(self):
        with self.assertRaises(gitcmd.NotInRepositoryError):
            gitcmd.set_url('/tmp', 'url')
    
    
    def test1400_top_level(self):
        ret, out, err = gitcmd.top_level(LOCAL_DIRS)
        self.assertEqual(ret, 0)
        self.assertEqual(out, os.path.dirname(FILE_DIR))
        
        test_file = os.path.join(LOCAL_DIRS, 'local/file.txt')
        ret, out, err = gitcmd.top_level(test_file)
        self.assertEqual(ret, 0)
        self.assertEqual(out, os.path.dirname(test_file))
    
    
    def test1401_top_level_exception(self):
        with self.assertRaises(gitcmd.NotInRepositoryError):
            gitcmd.top_level('/tmp')
    
    
    def test1500_show_last_revision(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(local, 'test')
        
        open(test_file, 'w+').close()
        gitcmd.add(test_file)
        gitcmd.commit(test_file, 'test')
        with open(test_file, 'w+') as f:
            print("Test string", file=f)
        
        ret, out, err = gitcmd.show_last_revision(test_file)
        self.assertEqual(ret, 0)
        self.assertIn('test', out)


    def test1501_show_last_revision(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        test_file = os.path.join(local, 'test')
    
        with open(test_file, 'w+') as f:
            print("A string", file=f)
        gitcmd.add(test_file)
        gitcmd.commit(test_file, 'test')
        with open(test_file, 'w+') as f:
            print("Testing changing string", file=f)
    
        ret, out, err = gitcmd.show_last_revision(test_file)
        self.assertEqual(ret, 0)
        self.assertIn('A string', out)
    
    def test1502_show_last_revision_exception(self):
        local = os.path.join(LOCAL_DIRS, 'local')
        with self.assertRaises(ValueError):
            gitcmd.show_last_revision(local)
        with self.assertRaises(gitcmd.NotInRepositoryError):
            gitcmd.show_last_revision("/")
