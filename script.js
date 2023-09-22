"use strict";

/**            BOUCLE
 *              FOR
 * Declarer une variable a qui est egale à un entier positif
 * 
 * Faire un console log de 'OKLM' autant de fois que le valeur de a
 * 
 * 
 */

let aBis=4;
for(let i=0;i<aBis;i++){
    console.log('OKLM');
}

//          WHILE
/**
 * Declarer une varaible a qui est egale a 3
 * tant que a est plus petit que 9 
 * incremente a de 1
 * si a est egal a 8 on arrete la boucle 
 * si a est egal a 7 on revient au debut de la boucle 
 * on console log(a)
 */
let aT=3;
while(a<9){
    aT++
    if(aT==7){
        continue
    }
    if(aT==8){
        break
    }
    console.log(aT);
}
console.log('Jai cassé la boucle au bout de '+aT+" tours");

/**                 Tableau
 * 
 * Declare un tableau vide names 
 * Ajouter "vincent", "Paul", et "Arthur" dans le tableau via la methode push
 * 
 * Pour chaque element du tableau
 * 
 * Ajouter a la fin "va a la peche"
 * Afficher chaque element 
 * 
 */

let names=[];
names.push('Vincent',"Paul",'Arthur');

names.forEach(name =>{
    name += 'va a la peche ';
    console.log(name)
})





let tableauFruit=["fraise","mangue","goyave"]
console.log(tableauFruit);
console.log(tableauFruit.length);//voir longueur du tableau
console.log(tableauFruit[0]);//pour faire ressortir la fraise car index commence à 0
console.log(tableauFruit[1]="Framboise");//rempmlacer mangue par framboise
console.log(tableauFruit.push("Cerise"));// ajoute un objet au tableau
console.log(tableauFruit[3]);//faire apparaitre cerise dans la console


//boucle permet de repeter des instructions x fois ( nous qui decidons ) i=index

for(let i=0;i<tableauFruit.length;i++){
    console.log(tableauFruit[i]);
}

//pour un compteur (i) qui est initialisé à 0 on test i par rapport 
//à la longueur de notre tableau (si le test est bon on execute les instructions )
// puis on rajoute 1 à notre variable (i)
// ++ = +1 accrementer 
