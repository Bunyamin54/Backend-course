'use strict';

//
/* -----------------------------------------

                 EXPRESS - JS

----------------------------------------*/

/* 


* npm init -y
* npm i express dotenev   -- seklinde de birden fazla modulu yanyana yazabiliriz.
* npm i dotenv  env dosyasindan modulu okuma icin 


*/

// ExpressJs Start

const express = require ('express');
const app = express ();

/* ENV */

require ('dotenv').config ();
const HOST = process.env.HOST || 'http://localhost';
const PORT = process.env.PORT || 8000; // port ismi buyuk harfle baslarsa sabit oldugunu anlariz porta dokunmayiz


/*   Methods */































app.listen(PORT, () => console.log(`Running on ${HOST}:${PORT}`));
