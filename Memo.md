# JAVASRCIPT

## Les variables

"var" n'est plus utilisé (ou seulement dans de rares cas).

"let" permet de déclarer une variable dont la valeur changera au cour du programme.

"const" permet de déclarer une variable à la valeur figé tout au long du programme.

## Les tableaux

Il y as beaucoup de méthodes pour manipuler les tableaux et leur donnée.

let array = [
    "string",
    3,
    "un autre truc"
]

array.foreach() pour boucler.

array.push("truc") ajouter à la fin.

array.pop() supprimer le dernier élément.

array.shift() supprime le premier élément.

array.unshift("truc") ajoute au début du tableau.

array.indexOf("truc") donne l'index d'un élément.

array.splice(index,nombre,élément) supprime "nombre" élément à partir de "index" (et le remplace par "élément", facultatif).

array.join() concaténe tous les éléments du tableau, on peut préciser le séparateur en paramètre (" ").
