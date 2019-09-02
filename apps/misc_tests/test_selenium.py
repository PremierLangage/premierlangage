import os
import shutil
from time import sleep

from django.contrib.auth.models import User
from django.urls import reverse
from selenium.webdriver.common.action_chains import ActionChains

from filebrowser.models import Directory
from misc_tests.utils import BaseSeleniumTestCase, FAKE_FB_ROOT, HOME_DIR, LIB_DIR, WAIT_TIME
from user_profile.enums import Role



class SeleniumTestCase(BaseSeleniumTestCase):
    
    @classmethod
    def tearDownClass(cls):
        cls.b.quit()
        shutil.rmtree(FAKE_FB_ROOT)
        super().tearDownClass()
    
    
    def setUp(self):
        super().setUp()
        self.u = User.objects.create_superuser("login", password="secret", email="test@test.test")
        self.teacher = User.objects.create_user(username='teacher', password='12345')
        self.teacher.profile.role = Role.INSTRUCTOR
        self.teacher.save()
        self.student = User.objects.create_user(username='student', password='12345')
        self.student.profile.role = Role.LEARNER
        self.student.save()
        self.dir = Directory.objects.create(name='Yggdrasil', owner=self.u).root
        self.lib = Directory.objects.create(name='lib', owner=self.u).root
        shutil.rmtree(os.path.join(self.dir))
        shutil.copytree(HOME_DIR, self.dir)
        shutil.rmtree(os.path.join(self.lib))
        shutil.copytree(LIB_DIR, self.lib)
    
    
    def test_filebrowser_preview(self):
        self.visit(reverse("editor:index"))
        self.connect("login", "secret")
        self.get_e_by_text("lib").click()
        self.get_e_by_text("demo").click()
        self.get_e_by_text("static_add.pl").click()
        
        self.b.find_element_by_css_selector('div[class="tab-item ng-star-inserted"]').click()
        self.b.switch_to.frame(self.b.find_element_by_tag_name("iframe"))
        sleep(WAIT_TIME)
        self.answer_pl("1")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.answer_pl("2")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.answer_pl("7")
        self.assertTrue(self.get_e_by_text("Bonne réponse") is not None)
        self.answer_pl("3")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.answer_pl("4")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.answer_pl("7")
        self.assertTrue(self.get_e_by_text("Bonne réponse") is not None)
        self.answer_pl("5")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.b.switch_to.default_content()
    
    
    def test_filebrowser_pl(self):
        self.visit(reverse("editor:index"))
        self.connect("login", "secret")
        self.get_e_by_text("lib").click()
        self.get_e_by_text("demo").click()
        e = self.get_e_by_text("static_add.pl")
        ActionChains(self.b).move_to_element(e).perform()
        
        sleep(WAIT_TIME)
        self.b.find_element_by_id("node-option-test-lib/demo/static_add.pl").click()
        window_before = self.b.window_handles[0]
        window_after = self.b.window_handles[1]
        self.b.switch_to.window(window_after)
        
        self.answer_pl("1")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.answer_pl("2")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.answer_pl("7")
        self.assertTrue(self.get_e_by_text("Bonne réponse") is not None)
        self.answer_pl("3")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.answer_pl("4")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.answer_pl("7")
        self.assertTrue(self.get_e_by_text("Bonne réponse") is not None)
        self.answer_pl("5")
        self.assertTrue(self.get_e_by_text("Mauvaise réponse") is not None)
        self.b.close()
        self.b.switch_to.window(window_before)
    
    
    def test_filebrowser_activity(self):
        self.visit(reverse("editor:index"))
        self.connect("login", "secret")
        self.get_e_by_text("lib").click()
        self.get_e_by_text("demo").click()
        self.get_e_by_text("static_add.pl").click()
        self.get_e_by_text("NOTIFICATIONS").click()
        e = self.get_e_by_text("random_all.pltp")
        ActionChains(self.b).move_to_element(e).perform()
        
        sleep(WAIT_TIME)
        self.b.find_element_by_id("node-option-load-pl-lib/demo/random_all.pltp").click()
        self.get_e_by_text(" OPEN                    ").click()
        
        sleep(WAIT_TIME)
        
        window_before = self.b.window_handles[0]
        window_after = self.b.window_handles[1]
        self.b.switch_to.window(window_after)
        
        self.get_e_by_text("Commencer").click()
        self.answer_pl("7")
        self.assertTrue(self.get_e_by_text("Bonne réponse") is not None)
        self.get_e_by_text("Suivant").click()
        
        self.assertTrue(self.b.find_element_by_css_selector(
            'a[class="btn btn-secondary btn-type state-succeded btn-lg"]') is not None)
        self.assertTrue(self.b.find_element_by_css_selector(
            'a[class="btn btn-secondary btn-type state-started btn-lg active"]') is not None)
        self.assertTrue(self.b.find_element_by_css_selector(
            'a[class="btn btn-secondary btn-type state-unstarted btn-lg"]') is not None)
        
        self.get_e_by_text("Addition Aléatoire (using eval_func)").click()
        sleep(WAIT_TIME)
        self.answer_pl("-1")
        sleep(WAIT_TIME)
        self.get_e_by_text("Random add").click()
        self.assertTrue(self.b.find_element_by_css_selector(
            'a[class="btn btn-secondary btn-type state-failed btn-lg"]') is not None)
        self.b.close()
        self.b.switch_to.window(window_before)
    
    
    def test_filebrowser_markdown_mathjax(self):
        self.visit(reverse("editor:index"))
        self.connect("login", "secret")
        self.get_e_by_text("home").click()
        self.get_e_by_text("cbank").click()
        self.get_e_by_text("recursion").click()
        
        e = self.get_e_by_text("ackermann.pl")
        ActionChains(self.b).move_to_element(e).perform()
        
        sleep(WAIT_TIME)
        e = self.b.find_element_by_id("node-option-test-Yggdrasil/cbank/recursion/ackermann.pl")
        self.b.execute_script("arguments[0].click();", e)
        sleep(WAIT_TIME)
        
        window_before = self.b.window_handles[0]
        window_after = self.b.window_handles[1]
        self.b.switch_to.window(window_after)
        
        self.assertTrue(
            self.b.find_element_by_css_selector("span[class='MathJax_Preview']") is not None)
        self.b.close()
        self.b.switch_to.window(window_before)
    
    
    def test_filebrowser_theme(self):
        self.visit(reverse("editor:index"))
        self.connect("login", "secret")
        e = self.b.find_element_by_id("nav-action-theme")
        self.assertTrue(self.b.find_element_by_css_selector(".light-theme"))
        self.assertFalse(self.b.find_elements_by_css_selector(".dark-theme"))
        e.click()
        self.assertFalse(self.b.find_elements_by_css_selector(".light-theme"))
        self.assertTrue(self.b.find_element_by_css_selector(".dark-theme"))
    
    
    def test_components_doc(self):
        self.visit(reverse("editor:index"))
        self.connect("login", "secret")
        self.b.find_element_by_id("nav-action-components").click()
        
        sleep(WAIT_TIME)
        
        window_before = self.b.window_handles[0]
        window_after = self.b.window_handles[1]
        self.b.switch_to.window(window_after)
        
        self.assertTrue(self.get_e_by_text("Introduction to components") is not None)
        
        self.b.close()
        self.b.switch_to.window(window_before)
    
    
    def test_teacher_editor_url(self):
        self.visit("")
        self.connect("teacher", "12345")
        self.assertTrue(self.b.find_elements_by_id("header-editor"))
    
    
    def test_student_editor_url(self):
        self.visit("")
        self.connect("student", "12345")
        
        self.assertListEqual([], self.b.find_elements_by_id("header-editor"))
