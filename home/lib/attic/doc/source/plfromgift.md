# Commande plfromgift
## Installation

Pour installer la commande et ainsi l'utiliser aisément il vous faut modifier le fichier ~/.bashrc
Pour cela, il faut lancer depuis un terminal
```
gedit ~/.bashrc
```
Ceci va ouvrir le fichier correspondant, ensuite il vous faut ajouter la ligne suivante à ce fichier :

```
export PATH=$PATH:/home/premierlangage/repo/plbank/bin
```

## Utilisation

La commande se nomme plfromgift.sh s’utilise en écrivant depuis n'importe où dans le terminal
```
	pltpfromgift.py [OPTION]...[fichier.gift]...
```

## Description
La commande sert à transformer les questions d'un fichier.gift en des pl et créer un pltp nommé fichier.pltp qui contient tous ces pl.

Tous les types des Questions gift sont compatibles excepté le type Essay

## Options
-r=[destination]
Pour renseigner l'endroit où vous désirer ranger le dossier qui contiendra votre pltp et vos pl, **par defaut la destination est plbank**

-d=[dir_gift]
Pour renseigner dans quel répertoire de l'endroit où vous souhaitez ranger votre dossier qui contiendra votre pltp et vos pl, par défaut dir_gift = gift/

## Informations complémentaires

Il est nécessaire de renseigner, soit le chemin absolu vers fichier.gift, soit le chemin relatif jusqu'à fichier.gift
Le fichier pltp, qui portera le nom du fichier.gift, ainsi que les fichiers pl créés seront rangés automatiquement dans destination/dir_gift/nomdufichiergift

Par exemple si vous avez un fichier quizz.gift qui se trouve dans /home/gift/ et qui contient trois questions nommées Q1, Q2 et Q3
Alors la commande pltpfromgift.py /home/gift/quizz.gift créera, dans plbank/gift/, un dossier nommé quizz qui contiendra les fichiers : quizz.pltp, Q1.pl, Q2.pl et Q3.pl

**Attention, si vous décidez d’écrire en gift avant de convertir votre fichier en pl, sachez que PL ne note qu’avec des points entiers. Vos demi points seront ignorés et chaque bonne réponse vaudra un point, chaque mauvaise réponse vaudra 0 point.**
