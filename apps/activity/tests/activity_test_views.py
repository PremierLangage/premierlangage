import os

from django.contrib.auth.models import User, Group
from django.test import TransactionTestCase
from django.urls import reverse

TEST_DATA_ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")

class ViewsTestCase(TransactionTestCase):

    def setUp(self) -> None:
        super().setUp()

    def test_upload_file(self):
        response = self.client.get('http://127.0.0.1:8000/activity/load_csv/10/')
        self.assertEquals(response.status_code, 200)
        self.assertContains(response, '<form  action="list/" method="post" enctype="multipart/form-data">', count=1)


    def test_create_group_from_csv_file(self):
        with open(os.path.join(TEST_DATA_ROOT, "list_email.txt")) as f:
            csv_file = f.read()
            list_mail = csv_file.split("\n")

        for email in list_mail:
            User.objects.create(email=email, username=email.split("@")[0])

        #Test with a csv file contain bad email
        with open(os.path.join(TEST_DATA_ROOT, "eleve_data_with_faults.csv")) as f:
            response = self.client.post('http://127.0.0.1:8000/activity/load_csv/10/list/', {'file': f})

        self.assertContains(response, str(len(list_mail)))
        self.assertContains(response, "Le fichier a été correctement chargé", count=1)
        self.assertContains(response, "Ces élément n'ont pas pu être modifiés, non présent dans la base de données :", count=1)

        #Test with a good csv file
        with open(os.path.join(TEST_DATA_ROOT, "eleve_data.csv")) as f:
            response = self.client.post('http://127.0.0.1:8000/activity/load_csv/10/list/', {'file': f})

        self.assertContains(response, str(len(list_mail)))
        self.assertContains(response, "Le fichier a été correctement chargé", count=1)
        self.assertContains(response, "Ces élément n'ont pas pu être modifiés, non présent dans la base de données :", count=0)

        #Test with a csv file contain empty field
        with open(os.path.join(TEST_DATA_ROOT, "eleve_data_incomplet_file.csv")) as f:
            response = self.client.post('http://127.0.0.1:8000/activity/load_csv/10/list/', {'file': f})

        self.assertContains(response, "Le fichier n'a pas pu être chargé correctement, certains champs sont incomplets", count=1)

    def test_change_group(self):
        with open(os.path.join(TEST_DATA_ROOT, "list_email.txt")) as f:
            csv_file = f.read()
            list_mail = csv_file.split("\n")

        for email in list_mail:
            User.objects.create(email=email, username=email.split("@")[0])

        with open(os.path.join(TEST_DATA_ROOT, "eleve_data.csv")) as f:
            self.client.post('http://127.0.0.1:8000/activity/load_csv/10/list/', {'file': f})

        user1 = User.objects.get(email=list_mail[0])
        user2 = User.objects.get(email=list_mail[1])

        self.assertEquals(user1.groups.count(), 3)
        self.assertEquals(user1.groups.first(), Group.objects.get(name="10_AmphiA"))
        self.assertEquals(user2.groups.count(), 3)
        self.assertEquals(user2.groups.first(), Group.objects.get(name="10_AmphiB"))

        with open(os.path.join(TEST_DATA_ROOT, "eleve_data_change_group.csv")) as f:
            self.client.post('http://127.0.0.1:8000/activity/load_csv/10/list/', {'file': f})

        user1 = User.objects.get(email=list_mail[0])
        user2 = User.objects.get(email=list_mail[1])

        self.assertEquals(user1.groups.count(), 3)
        self.assertEquals(user1.groups.first(), Group.objects.get(name="10_AmphiB"))
        self.assertEquals(user2.groups.count(), 3)
        self.assertEquals(user2.groups.first(), Group.objects.get(name="10_AmphiB"))


