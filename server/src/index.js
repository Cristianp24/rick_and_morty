const server = require('./app');
const PORT = 3001;

server.listen(PORT, () => {
    console.log("server port in " + PORT);
})



        





// const express = require('express');
// const router = require("./routes")
// const server = express();
// const PORT = 3001;

// server.use((req, res, next) => {
//    res.header('Access-Control-Allow-Origin', '*');
//    res.header('Access-Control-Allow-Credentials', 'true');
//    res.header(
//       'Access-Control-Allow-Headers',
//       'Origin, X-Requested-With, Content-Type, Accept'
//    );
//    res.header(
//       'Access-Control-Allow-Methods',
//       'GET, POST, OPTIONS, PUT, DELETE'
//    );
//    next();
// });


// server.use("/rickandmorty", router )
// server.use(express.json())

// server.listen(PORT, () => {
//    console.log('Server raised in port: ' + PORT);
// });



// const http = require ('http');
// const characters = require("./utils/data");
// const getCharById = require('./controllers/getCharById');





// http.createServer((req,res) => {
//      //console.log(`Server raised on port ${PORT}`);
//     res.setHeader('Access-Control-Allow-Origin' , '*');
//     if(req.url.includes('/rickandmorty/character/')) {
//         let id = req.url.split('/').pop();
//         console.log(id);
//         // const idUrl = url.split('/').pop(); 
//         // const foundChar = characters.find(chr => chr.id === Number(idUrl));
//          getCharById(id)
//         .then( (response) => {
//             console.log('RESPONSE', response);
//             if(response) {
//                 console.log('aqui estoy success');
//                 res.writeHead(200,{'Content-type': 'application/json'});
//                 res.end( JSON.stringify(response) );
//             } else {
//                 console.log('aqui estoy fail')
//                 res.writeHead(500, {'Content-Type': 'text/plain'})
//                 res.end(`aqui habia ponido mi personaje:${id}!!!`);
//             }
            
//     });
// }
        
// }).listen(3001,'localhost');