import threading


_thread_local = threading.local()


def set_current_request(request):
    setattr(_thread_local, 'request', request)
