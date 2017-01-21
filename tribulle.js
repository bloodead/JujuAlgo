"use strict";

var tri_bulle = function (tab) {
    var continuer;
    var tmp;
    var i;
    var j;
var countcompar = 0;
    var countPermu = 0;

    j = tab.length;
    do {
        continuer = 0;          // si on ne trouve pas d'échange, c'est fini !

        for(i=0; i<j-1; i++)    // on parcourt le tableau
        {
            if (tab[i] > tab[i+1])  // on compare 2 élements successifs
            {
                countcompar++;
                tmp = tab[i];
                countPermu++;
                tab[i] = tab[i+1];  // on échange si necessaire
                tab[i+1] = tmp;

                continuer = 1;  // on note que l'on a trouvé un échange
            }
        }
        j = j-1;                // un élément en moins pour le prochain passage

        //process.stdout.write ("Pendant tri : ");
      // console.log (tab);
    } while (continuer);


   return {tab :tab,countcompar:countcompar,  countPermu:countPermu};
}


exports.tri_bulle = tri_bulle;