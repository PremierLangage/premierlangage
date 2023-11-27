#!/bin/bash

mathjax_dir="common_static/dependencies/mathjax"

# Vérifier si MathJax est déjà installé
if [ -d "$mathjax_dir" ]; then
    echo "MathJax est déjà installé dans le répertoire $mathjax_dir."
else
    echo "MathJax n'est pas installé. Installation..."

    # Créer le répertoire s'il n'existe pas
    mkdir -p "$mathjax_dir"

    # Télécharger et extraire MathJax avec cURL
    curl -LO https://github.com/mathjax/MathJax/archive/2.7.5.zip
    unzip 2.7.5.zip -d "$mathjax_dir"
    rm 2.7.5.zip

    # Déplacer le contenu du sous-répertoire dans le répertoire principal
    mv "$mathjax_dir/MathJax-2.7.5"/* "$mathjax_dir"/
    # Supprimer le sous-répertoire désormais vide
    rm -r "$mathjax_dir/MathJax-2.7.5"

    echo "MathJax a été installé avec succès dans le répertoire $mathjax_dir."
fi
