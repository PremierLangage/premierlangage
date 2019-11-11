from activity.mixins import PLPosition
from activity.models import Activity
from loader.models import PL
from misc_tests.activity_base_test_mixin import ActivityBaseTestMixin



def create_pl_list():
    pltp = Activity.objects.create(activity_type="pltp")
    pl0 = PL.objects.create()
    pl1 = PL.objects.create()
    pl2 = PL.objects.create()
    pl3 = PL.objects.create()
    i0 = PLPosition.objects.create(parent=pltp, pl=pl0)
    i1 = PLPosition.objects.create(parent=pltp, pl=pl1)
    i2 = PLPosition.objects.create(parent=pltp, pl=pl2)
    i3 = PLPosition.objects.create(parent=pltp, pl=pl3)
    
    return pltp, pl0, pl1, pl2, pl3, i0, i1, i2, i3,



class ModelsTestCase(ActivityBaseTestMixin):
    
    def test_pl_position(self):
        pltp, pl1, pl2, pl3, pl4, _, _, _, _ = create_pl_list()
        
        self.assertEqual(pltp.indexed_pl(), [pl1, pl2, pl3, pl4])
        self.assertNotEqual(pltp.indexed_pl(), [pl1, pl2, pl4, pl3])
    
    
    def test_position_move_start(self):
        pltp, pl0, pl1, pl2, pl3, i0, i1, i2, i3 = create_pl_list()
        
        self.assertEqual(pltp.indexed_pl(), [pl0, pl1, pl2, pl3])
        i0.move_start()
        self.assertEqual(pltp.indexed_pl(), [pl0, pl1, pl2, pl3])
        i2.move_start()
        self.assertEqual(pltp.indexed_pl(), [pl2, pl0, pl1, pl3])
        i3.move_start()
        self.assertEqual(pltp.indexed_pl(), [pl3, pl2, pl0, pl1])
    
    
    def test_position_move_end(self):
        pltp, pl0, pl1, pl2, pl3, i0, i1, i2, i3 = create_pl_list()
        
        self.assertEqual(pltp.indexed_pl(), [pl0, pl1, pl2, pl3])
        i3.move_end()
        self.assertEqual(pltp.indexed_pl(), [pl0, pl1, pl2, pl3])
        i1.move_end()
        self.assertEqual(pltp.indexed_pl(), [pl0, pl2, pl3, pl1])
        i0.move_end()
        self.assertEqual(pltp.indexed_pl(), [pl2, pl3, pl1, pl0])
    
    
    def test_delete(self):
        pltp, pl0, pl1, pl2, pl3, i0, i1, i2, i3 = create_pl_list()
        
        self.assertNotEqual(list(PL.objects.filter(pk=pl0.pk)), [])
        self.assertNotEqual(list(PL.objects.filter(pk=pl1.pk)), [])
        
        pltp.delete()
        
        self.assertEqual(list(PL.objects.filter(pk=pl0.pk)), [])
        self.assertEqual(list(PL.objects.filter(pk=pl1.pk)), [])
    
    
    def test_position_move_to(self):
        pltp, pl0, pl1, pl2, pl3, i0, i1, i2, i3 = create_pl_list()
        
        PLPosition.move_to(i0, 2)
        self.assertEqual(pltp.indexed_pl(), [pl1, pl2, pl0, pl3])
        PLPosition.move_to(i3, 1)
        self.assertEqual(pltp.indexed_pl(), [pl1, pl3, pl2, pl0])
        PLPosition.move_to(i3, -1)
        self.assertEqual(pltp.indexed_pl(), [pl1, pl3, pl2, pl0])
        PLPosition.move_to(i3, 4)
        self.assertEqual(pltp.indexed_pl(), [pl1, pl3, pl2, pl0])
        PLPosition.move_to(i3, 10)
        self.assertEqual(pltp.indexed_pl(), [pl1, pl3, pl2, pl0])
    
    
    def test_position_switch_relative(self):
        pltp, pl0, pl1, pl2, pl3, i0, i1, i2, i3 = create_pl_list()
        
        PLPosition.switch_with_relative(i0, 2)
        self.assertEqual(pltp.indexed_pl(), [pl2, pl1, pl0, pl3])
        PLPosition.switch_with_relative(i3, -3)
        self.assertEqual(pltp.indexed_pl(), [pl3, pl1, pl0, pl2])
        PLPosition.switch_with_relative(i1, 3)
        self.assertEqual(pltp.indexed_pl(), [pl3, pl1, pl0, pl2])
        PLPosition.switch_with_relative(i1, -2)
        self.assertEqual(pltp.indexed_pl(), [pl3, pl1, pl0, pl2])
        PLPosition.switch_with_relative(i1, 0)
        self.assertEqual(pltp.indexed_pl(), [pl3, pl1, pl0, pl2])
    
    
    def test_position_move_next(self):
        pltp, pl0, pl1, pl2, pl3, i0, i1, i2, i3 = create_pl_list()
        
        i0.move_next()
        self.assertEqual(pltp.indexed_pl(), [pl1, pl0, pl2, pl3])
        i0.move_next()
        self.assertEqual(pltp.indexed_pl(), [pl1, pl2, pl0, pl3])
        i1.refresh_from_db()
        i1.move_next()
        self.assertEqual(pltp.indexed_pl(), [pl2, pl1, pl0, pl3])
        i3.move_next()
        self.assertEqual(pltp.indexed_pl(), [pl2, pl1, pl0, pl3])
    
    
    def test_position_move_prev(self):
        pltp, pl0, pl1, pl2, pl3, i0, i1, i2, i3 = create_pl_list()
        
        i0.move_prev()
        self.assertEqual(pltp.indexed_pl(), [pl0, pl1, pl2, pl3])
        i3.move_prev()
        self.assertEqual(pltp.indexed_pl(), [pl0, pl1, pl3, pl2])
        i1.move_prev()
        self.assertEqual(pltp.indexed_pl(), [pl1, pl0, pl3, pl2])
        i3.move_prev()
        self.assertEqual(pltp.indexed_pl(), [pl1, pl3, pl0, pl2])
