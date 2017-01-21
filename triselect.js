"use strict";

var tri_selection = function (tab) {
    var continuer;
    var tmp;
    var pp;    // plus petit
    var i;
    var j;
    var countcompar = 0;
    var countPermu = 0;

    for(i=0; i<tab.length; i++)          // on prend tous les élements les uns après les autres
    {
        pp = i;                 // on va chercher une plus petite valeur que cet élément

        for(j=i+1; j<tab.length; j++)    // on parcourt le restant du tableau
        {
            if (tab[j] < tab[pp])   // on cherche le + petit element
            {
                countcompar++;
                pp = j;         // on mémorise son indice
            }
        }

        countPermu++;
        tmp = tab[i];        
        tab[i] = tab[pp];           // on échange
        tab[pp] = tmp;

    }
 


return {tab :tab,countcompar:countcompar,  countPermu:countPermu};
}


exports.tri_selection = tri_selection;