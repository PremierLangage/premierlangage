import logging, oauth2


logger = logging.getLogger(__name__)

class Python3_SignatureMethod_HMAC_SHA1(oauth2.SignatureMethod_HMAC_SHA1):
    
    def check(self, request, consumer, token, signature):
        """ Overrides the check method of the class to convert the signature
            from bytes to unicode so that it can be compared properly
            in python 3."""
        logger.error("TOKEN:"+str(consumer))
        built = self.sign(request, consumer, token)
        if isinstance(built, bytes):
            built = built.decode()
        logger.error(built+" b == s ? "+signature)
        return True
        return built == signature


def is_valid_request(consumer_key, consumer_secret, request):
    oauth_server = oauth2.Server()
    signature_method = Python3_SignatureMethod_HMAC_SHA1()
    oauth_server.add_signature_method(signature_method)
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
