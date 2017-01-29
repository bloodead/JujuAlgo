"use strict";

var http = require("http");
var url = require("url");
var querystring = require("querystring");
var fs = require("fs");
//-------------------------------------------------------------------------
// DECLARATION DES DIFFERENTS MODULES CORRESPONDANT A CHAQUE ACTION
//-------------------------------------------------------------------------

var req_static = require("./req_static.js");


//-------------------------------------------------------------------------
// FONCTION DE CALLBACK APPELLEE POUR CHAQUE REQUETE
//-------------------------------------------------------------------------

var traite_requete = function (req, res) {

    var ressource;
    var requete;
    var pathname;;
    var query;

    console.log("URL reçue : " + req.url);
    
    requete = url.parse(req.url, true);
    pathname = requete.pathname;
    console.log(pathname);
    query = requete.query;

    // ROUTEUR

    try {
        switch (pathname) {
            case '/':
            pathname = "/index.html";
            req_static(req, res, pathname);
                break;
            default:
                req_static(req, res, pathname);
                break;
        }
    } catch (e) {
        console.log('Erreur : ' + e.stack);
        console.log('Erreur : ' + e.message);
        //console.trace();
        req_erreur(req, res, query);
    }
};


//-------------------------------------------------------------------------
// CREATION ET LANCEMENT DU SERVEUR
//-------------------------------------------------------------------------

var mon_serveur = http.createServer(traite_requete);
var port = 80;
var contenuBan;
var listBan;

// Chargement de socket.io



console.log("Serveur en ecoute sur port 127.0.0.1: " + port);
mon_serveur.listen(port);