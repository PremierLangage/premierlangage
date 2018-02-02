#Ne doit pas fonctionner: du text se trouve en dehors de '=='

author=Coumes Quentin
title=Test HTML

type=direct

texth==
<center>
    <h1>Texte en HTML</h1>
    <p><strong>Voici un exemple de texte html</strong><p>
    <table style="border:solid;">
        <tr style="border:solid;">
            <th style="width: 100px;"><center>Il</center></th>
            <th style="width: 100px;"><center>Est</center></th>
            <th style="width: 100px;"><center>Même</center></th>
        </tr>
        <tr style="border:solid;">
            <td style="width: 100px;"><center>Possible</center></td>
            <td style="width: 100px;"><center>De</center></td>
            <td style="width: 100px;"><center>Faire</center></td>
        </tr>
        <tr style="border:solid;">
            <td style="width: 100px;"><center>Des</center></td>
            <td style="width: 100px;"><center>Tableaux</center></td>
        </tr>
    </table>
</center>
==

evaluator==
def evaluator(a, b): return True, None
==


form==
&emsp;
==
