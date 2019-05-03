from random import choice, randint

def trouve_subordonnee_conjonctive():
    return choice(["Bien que je ne m'y attendais pas, ", "Dès que ce fût possible, ", "Même s'il on a été supris, ", "Sachant que personne ne s'y attendait, ", "Après qu'il fut revenu du travail, ", "Comme il est revenu, ", "Lorsqu'il a pu, "])

def trouve_sujet():
    return choice(["Paul", "Martin", "Pierre", "Jacques", "Mamadou", "Herbert", "Robert", "Dominique", "Jean", "Yvan", "Philippe", "Peter", "Mohamed", "José"])
    
def trouve_subordonnee_sujet():
    return choice(["que j'ai vu hier", "qui vient d'amérique", "qui possède la voiture rouge", "dont on a rencontré le frère", "qui habite à coté du stade", "à qui on avait révelé le secret"])
    
def trouve_verbe():
    return choice(["a touvé", "a récuperé", "a repris", "a racheté", "a vendu", "a retrouvé", "a revendu"])
    
def trouve_objet():
    return choice(["le jeu", "la tondeuse", "la mobilette", "le scooter", "la veste", "le ballon", "la tablette", "le vélo"])
    
def trouve_subordonnee_objet():
    return choice(["dont je parle", "dont la trace avait disparue", "que j'aime bien", "que je ne supporte pas", "que j'apprécie beaucoup", "que je trouvais moche"])
    
def faire_phrase():
    nb_relative = 0
    phrase = ""
    if randint(0, 1):
        phrase += trouve_subordonnee_conjonctive()
    phrase += trouve_sujet()
    if randint(0, 1):
        phrase += ", " + trouve_subordonnee_sujet() + ", "
        nb_relative += 1
    else:
        phrase += " "
    phrase += trouve_verbe()
    phrase += " " + trouve_objet()
    if randint(0, 1):
        phrase += " " + trouve_subordonnee_objet()
        nb_relative += 1
    phrase += "."
    return phrase, nb_relative
    
