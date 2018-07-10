

form==
<div class="input-group">
    <span class="input-group-addon">Réponse</span>
    <input id="form_txt_answer" type="number" class="form-control" placeholder="" required>
</div>
==


evaluator==
def evaluator(response, dic):
    return (False, "")
==

title=RangeAvecTolerance
text=What is a number from 1 to 5?

template=plbank:/demo/template/numeric_template.pl
mini=1.0
maxi=5.0


