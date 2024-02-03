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
const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 8000; // port ismi buyuk harfle baslarsa sabit oldugunu anlariz porta dokunmayiz

/*   Methods *

app.get ('/', (request, response) => {
  response.send('Welcome to Express')  // string bir veri html formatinda gonderilir

  response.send ({message: 'called in "get" method '}); // obje yaparsak otomatikmen Json a cevirir bvunu respons send yapiyor
}); // paramatre hangi url kullanici bu ur lhangi parametre ile gelirse o request veya response calisacak

app.post ('/', (request, response) =>
  response.send ({message: "called in 'post' method."})
);
app.put ('/', (request, response) =>
  response.send ({message: "called in 'put' method."})
);
app.delete ('/', (request, response) =>
  response.send ({message: "called in 'delete' method."})
);

 ? allow at all methods:

 app.all('/', (request, response) => response.send({ message: "'all' option allows to all methods."}))  // bunlarin yerine all methodunu kullanirsak tamamina cevp aliriz  tum methodlara izin ver demeke  guvenlik acisindan saglikli degil 


? app.route('url'):   url sabit  methodlar degisir

app.route('/route')
.get( (req, res) => res.send('get'))  // siralama onemli once req,sonra res
.post( (req, res) => res.send('post')) 
.put( (req, res) => res.send('put')) 
.delete( (req, res) => res.send('delete')) 


/* URL (Path) Options */

app.get ('/', (req, res) => res.send ("in  'root' path")); // '/' ==root
app.get ('/path', (req, res) => res.send ("in  'path' ")); // '/path' == '/path/'  sonuuna / koymak zorunda degiliz sistem her ikisinide algilayacak




























/* ------------------------------------------------------- */
/* URL (Path) Options */

// app.get('/', (req, res) => res.send("in 'root' path")) // '/' == root
// app.get('/path', (req, res) => res.send("in 'path'")) // '/path' == '/path/'
// //? express-urls supported JokerChar:
// app.get('/abc(x?)123', (req, res) => res.send("in 'abc(x?)123'")) // abc123 or abcx123
// app.get('/abc(x+)123', (req, res) => res.send("in 'abc(x+)123'")) // abcx123 or abcxx..xx123
// app.get('/abc*123', (req, res) => res.send("in 'abc*123'")) // abc123 or abc...123 // abc(ANY)123
//? express-urls supported regexp:
// app.get(/xyz/, (req, res) => res.send("regexp /xyz/")) // url contains = 'xyz' (no limit for subPaths)
// app.get(/^\/xyz/, (req, res) => res.send("regexp /^\/xyz/")) // url startswith = 'xyz'
// app.get(/xyz$/, (req, res) => res.send("regexp /xyz$/")) // url endswith = 'xyz'

/* ------------------------------------------------------- */
/* URL Parameters (req.params) */

// /user/66/config/update/any/any/any
// app.get('/user/:userId/config/:configParam/*', (req, res) => {
//     res.send({
//         userId: req.params.userId,
//         configParam: req.params.configParam,
//         url: {
//             protocol: req.protocol,
//             subdomains: req.subdomains,
//             hostname: req.hostname,
//             baseUrl: req.baseUrl,
//             params: req.params,
//             query: req.query,
//             path: req.path,
//             originalUrls: req.originalUrl
//         }
//     })
// })

// //? '\d' means only-digit-chars in regexp:
// //? '\w' means only-chars in regexp:
// // app.get('/user/:userId([0-9]+)', (req, res) => {
// app.get('/user/:userId(\\d+)', (req, res) => {
//     res.send({
//         params: req.params
//     })
// })

// app.get('/command/:userId-:profileId', (req, res) => {
//     res.send({
//         params: req.params
//     })
// })

/* ------------------------------------------------------- */

/* Response Methods */

//? SendStatus:
// app.get('/', (req, res) => res.sendStatus(404))
//? Status:
// app.get('/', (req, res) => res.status(200).send({ message: 'OK' }))
// app.post('/', (req, res) => res.status(201).send({ message: 'Created' }))
// app.put('/', (req, res) => res.status(202).send({ message: 'Accepted' }))
// app.delete('/', (req, res) => res.status(204).send({ message: 'No Content' }))
//? JSON (.send() method already does this converting.)
// app.get('/', (req, res) => res.json([{ key: 'value' }]))
//? Download File (Download at browser):
// app.get('/download', (req, res) => res.download('app.js', 'changedName.js'))
//? SendFile Content:
// console.log( __dirname )
// app.get('/file', (req, res) => res.sendFile(__dirname + '/app.js')) // FilePath must be realPath
//? Redirect:
// app.get('/google', (req, res) => res.redirect(302, 'https://www.google.com'))

/* ------------------------------------------------------- */
// app.listen(PORT, () => console.log(`Running on http://127.0.0.1:${PORT}`))

app.listen (PORT, HOST, () =>
  console.log (`Running on http://${HOST}:${PORT}`)
);
