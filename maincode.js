var modetriselect = require('./triselect');
var modetribulle = require('./tribulle');
var modequicksort = require('./quicksort');

var stdin = process.openStdin();


var NameHead = ["Algo","         Permutation","           Comparaison"];
var resultalgp = [];


console.log("PLZ ENTER YOUR FUCKING NUMBER PLZ FOR FUCKED CONPAR");

stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    
 

var tab = TabRandom(d);


var tmp = tab.slice();
//console.log("TRI SELECT");
var select = modetriselect.tri_selection(tmp);
var resultselect = ["Select","             "+select.countPermu,"                "+select.countcompar];
resultalgp.push(resultselect);
var tmp = tab.slice();
//console.log("TRI bulle");
var bulle = modetribulle.tri_bulle(tmp);
var resultbulle = ["bulle","               "+bulle.countPermu,"                "+bulle.countcompar];
resultalgp.push(resultbulle);
var tmp = tab.slice();
//console.log("TRI  quick sort");
var quick = modequicksort.tri_quick(tmp,0,tmp.length-1);
var resulquick = ["quicksort","           "+quick.countPermu,"                "+quick.countcompar];
resultalgp.push(resulquick);
console.log(NameHead);
console.log("=======================================================");
resultalgp.forEach(function(element) {
    console.log(element);
}, this);
//console.log("tri quick nb compart"+ test.countcompar);
//console.log("tri quick nb permut"+ test.countPermu);
 });




 function TabRandom(nb)
 {
     var tab= [];

    for(i = 0;i <= nb; i++)
    {
      tab.push(Math.floor((Math.random() * 100) + 1));
    }

    return tab;
 }