from abc import ABC, abstractmethod



class AbstractActivityType(ABC):
    
    @abstractmethod
    def student_dashboard(self):
        return None
    
    
    @abstractmethod
    def teacher_dashboard(self):
        return None
    
    
    @abstractmethod
    def small_sd(self):
        return None
    
    
    @abstractmethod
    def small_td(self):
        return None
    
    
    @abstractmethod
    def barem(self):
        return None
    
    
    @abstractmethod
    def template(self):
        return None
    
    
    @abstractmethod
    def fetch(self):
        return None
