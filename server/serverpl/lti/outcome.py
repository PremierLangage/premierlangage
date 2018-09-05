from models import LTIgrade
import xml.etree.ElementTree as ET

def replace_grade(request,grade):
    if request.method == 'POST':
        with open("ressources/result.xml", "r") as f:
            return result.read() % (LTIgrade.sourcedid, grade)

def replace_read_result(request):
    if request.method == 'POST':
        with open("ressources/readResult.xml", "r") as f
            return result.read() % LTIgrade.sourcedid
        
def replace_delete(request):
    if request.method == 'POST':
        with open("ressources/delete.xml", "r") as f
            return result.read() % LTIgrade.sourcedid
    
def send_grade(request, grade):
     response = requests.post(LTIgrade.outcome_url, replace_grade(request, grade))
     tree = ET.parse(response)
     root = tree.getroot()
     if 200 <= response.status_code < 300 && root[0][0][2][0].text == "succes":
          return True
     raise ValueError(root[0][0][2][2].text)

def send_read_result(request)
     response = request.post(LTIgrade.outcome_url, replace_read_result(request))
     tree = ET.parse(response)
     root = tree.getroot()
     if 200 <= response.status_code < 300 && root[0][0][2][0].text == "succes":
          return True
     raise ValueError("Read result response have failed")

     
        
