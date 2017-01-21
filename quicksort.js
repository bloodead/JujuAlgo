"use strict";


var countcompar = 0;
    var countPermu = 0;

var tri_quick = function (tab, gauche, droite) {

    var g;
    var d;
    var tampon;
    var val;

    if(droite <= gauche) {
        return tab;         /* fin de récursivité si tableau à trier ne fait qu'une seule case */
    }

    val = tab[droite];  /* choix du pivot : on prend par exemple la valeur de droite */
    g = gauche-1;
    d = droite;

    do {
        while (tab[++g] < val); /* g pointe le premier élément (à gauche) 
                                   qui est plus grand (ou égal) que le pivot */

        while (tab[--d] > val);    /* d pte le premier élément (par la droite) 
                                      qui est plus petit (ou égal) que le pivot */

        if (g < d)              /* si g et d ne se sont pas rencontrés,
                                   on échange les contenus de g et d et on recommence */
            {
                countcompar++;
                countPermu++;
                tampon = tab[g];
                tab[g] = tab[d];
                tab[d] = tampon;
            }
    } while (g < d);

    /* on sort quand "g a rencontré d", et alors :
     * - tous les éléments à gauche de g sont <= au pivot
     * - tous ceux à droite de d sont >= */

    /* on place le pivot en position g (d serait aussi possible)
     * donc dans sa bonne position (tous ceux à gauche sont <=, à droite sont >=) */

countPermu++;
    tampon = tab[g];
    tab[g] = tab[droite];
    tab[droite] = tampon;

    /* il ne reste plus qu'à trier les deux parties, à droite et à gauche du pivot (RECURSIVITE) */
    /* C'EST LA RECURSIVITE !!*/

    tab = tri_quick(tab, gauche, g-1);
    tab = tri_quick(tab, g+1, droite);

    //console.log (tab);


    //console.log("TRI BULLE nb compar " +countcompar);
    
    //console.log("TRI BULLE nb permut " +countPermu);
    return { tab :tab , countPermu: countPermu, countcompar : countcompar};
}


exports.tri_quick = tri_quick;