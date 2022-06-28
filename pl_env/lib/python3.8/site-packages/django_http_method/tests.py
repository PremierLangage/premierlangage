from django.test import Client, SimpleTestCase



class WithoutMixinTestCase(SimpleTestCase):
    
    def test_get(self):
        response = Client().get('/')
        self.assertContains(response, "Received a GET", status_code=200)
    
    
    def test_post(self):
        response = Client().post('/')
        self.assertContains(response, "Received a POST", status_code=200)
    
    
    def test_head(self):
        response = Client().head('/')
        self.assertEqual(response.status_code, 200)
    
    
    def test_put(self):
        response = Client().put('/')
        self.assertContains(response, "Received a PUT", status_code=200)
    
    
    def test_delete(self):
        response = Client().delete('/')
        self.assertContains(response, "Received a DELETE", status_code=200)
    
    
    def test_patch(self):
        response = Client().patch('/')
        self.assertContains(response, "Received a PATCH", status_code=200)
    
    
    def test_options(self):
        response = Client().options('/')
        self.assertContains(response, "Received a OPTIONS", status_code=200)
    
    
    def test_trace(self):
        response = Client().trace('/')
        self.assertContains(response, "Received a TRACE", status_code=200)



class WithoutMixinParamTestCase(SimpleTestCase):
    
    def test_get_params(self):
        response = Client().get('/', {'value': 2})
        self.assertContains(response, "Received a GET request with params:")
        self.assertContains(response, "value : 2")
    
    
    def test_post_params(self):
        response = Client().post('/', {'value': 2})
        self.assertContains(response, "Received a POST request with params:")
        self.assertContains(response, "value : 2")
    
    
    def test_put_params(self):
        response = Client().put('/', {'value': 2})
        self.assertContains(response, "Received a PUT request with params:")
        self.assertContains(response, "value : 2")
    
    
    def test_patch_params(self):
        response = Client().patch('/', {'value': 2})
        self.assertContains(response, "Received a PATCH request with params:")
        self.assertContains(response, "value : 2")



class GetMethodTestCase(SimpleTestCase):
    
    def test_get_not_allowed(self):
        response = Client().get('/', {'_method': 'VOID'})
        self.assertEqual(response.status_code, 405)
    
    
    def test_get_get(self):
        response = Client().get('/', {'_method': 'GET'})
        self.assertContains(response, "Received a GET", status_code=200)
    
    
    def test_get_post(self):
        response = Client().get('/', {'_method': 'POST'})
        self.assertContains(response, "Received a POST", status_code=200)
    
    
    def test_get_head(self):
        response = Client().get('/', {'_method': 'HEAD'})
        self.assertEqual(response.status_code, 200)
    
    
    def test_get_put(self):
        response = Client().get('/', {'_method': 'PUT'})
        self.assertContains(response, "Received a PUT", status_code=200)
    
    
    def test_get_delete(self):
        response = Client().get('/', {'_method': 'DELETE'})
        self.assertContains(response, "Received a DELETE", status_code=200)
    
    
    def test_get_patch(self):
        response = Client().get('/', {'_method': 'PATCH'})
        self.assertContains(response, "Received a PATCH", status_code=200)
    
    
    def test_get_options(self):
        response = Client().get('/', {'_method': 'OPTIONS'})
        self.assertContains(response, "Received a OPTIONS", status_code=200)
    
    
    def test_get_trace(self):
        response = Client().get('/', {'_method': 'TRACE'})
        self.assertContains(response, "Received a TRACE", status_code=200)



class PostMethodTestCase(SimpleTestCase):
    
    def test_post_not_allowed(self):
        response = Client().post('/', {'_method': 'VOID'})
        self.assertEqual(response.status_code, 405)
    
    
    def test_post_get(self):
        response = Client().post('/', {'_method': 'GET'})
        self.assertContains(response, "Received a GET", status_code=200)
    
    
    def test_post_post(self):
        response = Client().post('/', {'_method': 'POST'})
        self.assertContains(response, "Received a POST", status_code=200)
    
    
    def test_post_head(self):
        response = Client().post('/', {'_method': 'HEAD'})
        self.assertEqual(response.status_code, 200)
    
    
    def test_post_put(self):
        response = Client().post('/', {'_method': 'PUT'})
        self.assertContains(response, "Received a PUT", status_code=200)
    
    
    def test_post_delete(self):
        response = Client().post('/', {'_method': 'DELETE'})
        self.assertContains(response, "Received a DELETE", status_code=200)
    
    
    def test_post_patch(self):
        response = Client().post('/', {'_method': 'PATCH'})
        self.assertContains(response, "Received a PATCH", status_code=200)
    
    
    def test_post_options(self):
        response = Client().post('/', {'_method': 'OPTIONS'})
        self.assertContains(response, "Received a OPTIONS", status_code=200)
    
    
    def test_post_trace(self):
        response = Client().post('/', {'_method': 'TRACE'})
        self.assertContains(response, "Received a TRACE", status_code=200)



class MixinParamTestCase(SimpleTestCase):
    
    def test_post_get_params(self):
        response = Client().post('/', {'value': 2, '_method': 'GET'})
        self.assertContains(response, "Received a GET request with params:")
        self.assertContains(response, "value : 2")
    
    
    def test_post_post_params(self):
        response = Client().post('/', {'value': 2, '_method': 'POST'})
        self.assertContains(response, "Received a POST request with params:")
        self.assertContains(response, "value : 2")
    
    
    def test_post_put_params(self):
        response = Client().post('/', {'value': 2, '_method': 'PUT'})
        self.assertContains(response, "Received a PUT request with params:")
        self.assertContains(response, "value : 2")
    
    
    def test_post_patch_params(self):
        response = Client().post('/', {'value': 2, '_method': 'PATCH'})
        self.assertContains(response, "Received a PATCH request with params:")
        self.assertContains(response, "value : 2")
