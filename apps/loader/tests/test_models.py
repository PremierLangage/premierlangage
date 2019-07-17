from django.test import TestCase

from loader.models import Index, PL, PLTP



class ModelsTestCase(TestCase):
    
    def test_index(self):
        pltp = PLTP.objects.create()
        pl1 = PL.objects.create()
        pl2 = PL.objects.create()
        pl3 = PL.objects.create()
        pl4 = PL.objects.create()
        Index.objects.create(pltp=pltp, pl=pl1)
        Index.objects.create(pltp=pltp, pl=pl2)
        Index.objects.create(pltp=pltp, pl=pl4)
        Index.objects.create(pltp=pltp, pl=pl3)
        
        self.assertNotEqual(pltp.indexed_pl(), [pl1, pl2, pl3, pl4])
        self.assertEqual(pltp.indexed_pl(), [pl1, pl2, pl4, pl3])
    
    
    def test_index_move_start(self):
        pltp = PLTP.objects.create()
        pl0 = PL.objects.create()
        pl1 = PL.objects.create()
        pl2 = PL.objects.create()
        pl3 = PL.objects.create()
        i0 = Index.objects.create(pltp=pltp, pl=pl0)
        i1 = Index.objects.create(pltp=pltp, pl=pl1)
        i2 = Index.objects.create(pltp=pltp, pl=pl2)
        i3 = Index.objects.create(pltp=pltp, pl=pl3)
        
        self.assertEqual(pltp.indexed_pl(), [pl0, pl1, pl2, pl3])
        i0.move_start()
        self.assertEqual(pltp.indexed_pl(), [pl0, pl1, pl2, pl3])
        i2.move_start()
        self.assertEqual(pltp.indexed_pl(), [pl2, pl0, pl1, pl3])
        i3.move_start()
        self.assertEqual(pltp.indexed_pl(), [pl3, pl2, pl0, pl1])
    
    
    def test_index_move_end(self):
        pltp = PLTP.objects.create()
        pl0 = PL.objects.create()
        pl1 = PL.objects.create()
        pl2 = PL.objects.create()
        pl3 = PL.objects.create()
        i0 = Index.objects.create(pltp=pltp, pl=pl0)
        i1 = Index.objects.create(pltp=pltp, pl=pl1)
        i2 = Index.objects.create(pltp=pltp, pl=pl2)
        i3 = Index.objects.create(pltp=pltp, pl=pl3)
        
        self.assertEqual(pltp.indexed_pl(), [pl0, pl1, pl2, pl3])
        i3.move_end()
        self.assertEqual(pltp.indexed_pl(), [pl0, pl1, pl2, pl3])
        i1.move_end()
        self.assertEqual(pltp.indexed_pl(), [pl0, pl2, pl3, pl1])
        i0.move_end()
        self.assertEqual(pltp.indexed_pl(), [pl2, pl3, pl1, pl0])
    
    
    def test_delete(self):
        pltp = PLTP.objects.create()
        pl0 = PL.objects.create()
        pl1 = PL.objects.create()
        Index.objects.create(pltp=pltp, pl=pl0)
        Index.objects.create(pltp=pltp, pl=pl1)
        
        self.assertNotEqual(list(PL.objects.filter(pk=pl0.pk)), [])
        self.assertNotEqual(list(PL.objects.filter(pk=pl1.pk)), [])
        
        pltp.delete()
        
        self.assertEqual(list(PL.objects.filter(pk=pl0.pk)), [])
        self.assertEqual(list(PL.objects.filter(pk=pl1.pk)), [])
