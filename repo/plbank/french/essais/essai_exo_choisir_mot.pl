#Copyright 2018 Elise Hardy <ehardy@etud.u-pem.fr>
#
# 

author=Elise Hardy
title=choisir les mots justes
name=choisir les mots justes
tag=orthographe 
type=direct

feedback_template=@../template/template.html

text==
blalbl  
==

before==
mot=["a","b","c","d","e"]
choice=list()
for i in range(5):
    try:
        choice.append(mot[i])
        
    except KeyError:
        break

==
form==



<style>



/* Style the active class, and buttons on mouse-over */
.active, .btn:hover {
    background-color: #A7DBD8;
    color: white;
}
</style>





    

{% for item in choice %}
 <button id="{{forloop.counter0}}" class="btn">{{item}}</button>
 <input id="form_txt_answer{{forloop.counter0}}" type="checkbox" value ={{item}} unchecked hidden>
{% endfor%}


<script>
{% for item in choice %}
    $(document).ready(function(){
        {% for item in choice %}
            $( "#form_txt_answer{{forloop.counter0}}" ).prop("checked", false);
        {% endfor%}
        $( "#{{forloop.counter0}}" ).click(function() {
            $(this).toggleClass("active");
            $( "#form_txt_answer{{forloop.counter0}}" ).prop("checked", !$( "#form_txt_answer{{forloop.counter0}}" ).prop("checked"));
        });
    });
{% endfor %}
</script>
==
evaluator==
reponse=["a","c","d"]
cor=len(reponse)
v=0
try:
    print(response)
    if not response.values():
        grade=(None,"Merci de rentrer des réponses")
    else:    
        for x in response.values():
            
            if x[0] not in reponse:
                grade=(False, feedback_template)
                break;
            v+=1
        else :
            if v != cor:
                grade = (False,"Votre réponse est incomplète")
            else:
                grade=(True,"Toutes les réponses sont correctes")
      
            
except Exception as e:
    grade=(None,"Un problème a eu lieu lors de la correction: "+str(e))
==






