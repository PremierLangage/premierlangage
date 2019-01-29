import oauth2


class Python3SignatureMethodHMACSHA1(oauth2.SignatureMethod_HMAC_SHA1):
    
    def check(self, request, consumer, token, signature):
        """ Overrides the check method of the class to convert the signature
            from bytes to unicode so that it can be compared properly
            in python 3."""
        built = self.sign(request, consumer, token)
        if isinstance(built, bytes):
            built = built.decode()
        return built == signature


def is_valid_request(consumer_key, consumer_secret, request):
    oauth_server = oauth2.Server()
    oauth_server.add_signature_method(Python3SignatureMethodHMACSHA1())
    oauth_consumer = oauth2.Consumer(consumer_key, consumer_secret)
    try:
        oauth_request = oauth2.Request.from_request(
            request.method, request.build_absolute_uri(),
            headers=request.META, parameters=request.POST.dict()
        )
        oauth_server.verify_request(oauth_request, oauth_consumer, {})
    except oauth2.MissingSignature:
        return False
    return True
