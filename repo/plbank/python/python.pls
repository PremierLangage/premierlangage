# Copyright 2016 Coumes Quentin
# Strategy allowing to change to any PL whenever you want (default template are programmed to work like this, so this pls is basically empty)

la==
class Strategy():
    def __init__(self, pltp):
        self.pl_list = list()
        for pl in pltp.pl.all():
            self.pl_list.append(pl.sha1)
            
    def start(self):
        pass
        
    def next(self):
        pass
        
    def end(self):
        pass
==
