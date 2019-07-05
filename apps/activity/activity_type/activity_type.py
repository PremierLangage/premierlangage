from abc import ABC, abstractmethod



class AbstractActivityType(ABC):
    
    @abstractmethod
    def student_dashboard(self):
        pass
    
    
    @abstractmethod
    def teacher_dashboard(self):
        pass
    
    
    @abstractmethod
    def small_sd(self):
        pass
    
    
    @abstractmethod
    def small_td(self):
        pass
    
    
    @abstractmethod
    def grading(self):
        pass
    
    
    @abstractmethod
    def template(self):
        pass
    
    
    @abstractmethod
    def fetch(self):
        pass
    
    
    @abstractmethod
    def install(self):
        pass
    
    
    @abstractmethod
    def init(self):
        pass
    
    
    @abstractmethod
    def launch(self):
        pass
    
    
    @abstractmethod
    def display(self):
        pass
    
    
    @abstractmethod
    def validate(self):
        pass
    
    
    @abstractmethod
    def next(self):
        pass
    
    
    @abstractmethod
    def pop(self):
        pass
    
    
    @abstractmethod
    def end(self):
        pass
