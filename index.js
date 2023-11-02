const jsonServer = require("json-server"); 
// This command imports json-server library
const server = jsonServer.create();
const router = jsonServer.router("snapface-data.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000; 

/* 
    Les intergiciels, ou middleware, sont des logiciels utilisés par différentes
     applications pour communiquer entre elles. Ils délivrent la fonctionnalité permettant de
      connecter les applications de façon intelligente et efficace, pour vous permettre
       d'innover plus rapidement.
*/

server.use(middlewares);
server.use(router);

server.listen(port);