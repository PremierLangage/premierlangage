import os

from django.contrib.auth.models import User
from django.test import TransactionTestCase
from django.urls import reverse

TEST_DATA_ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "data")

class ViewsTestCase(TransactionTestCase):

    def setUp(self) -> None:
        super().setUp()

    def test_upload_file(self):
        response = self.client.get(reverse('activity:load_csv'))
        self.assertEquals(response.status_code, 200)
        self.assertContains(response, "</form>")

    def test_create_group_from_csv_file(self):
        list_mail = list()
        with open(os.path.join(TEST_DATA_ROOT, "list_email.txt")) as f:
            csv_file = f.read()
            list_mail = csv_file.split("\n")

        for email in list_mail:
            User.objects.create(email=email, username=email.split("@")[0])

        with open(os.path.join(TEST_DATA_ROOT, "eleve_data.csv")) as f:
            response = self.client.post(reverse('activity:list_csv'), {'file': f})

        self.assertContains(response, str(len(list_mail)))
        self.assertContains(response, "Ces élément n'ont pas pu être modifiés, non présent dans la base de données :")