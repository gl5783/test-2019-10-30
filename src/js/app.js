'use strict';

/**
 *  Ajout de Bootstrap
**/
import 'bootstrap';

import '../css/style.scss';


/* --------------- CODE --------------- */
console.log('--------------- JS ---------------');

import {monCompteur, incrementeMonCompteur} from "./tarteauxpommes";
console.log("la valeur est de " + monCompteur);
incrementeMonCompteur();
console.log(monCompteur);
