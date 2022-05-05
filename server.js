 // Require modules
 const express = require('express');
 	
 // Create the Express app
 const app = express();
 	
 // Configure the app (app.set)
 	
 	
 // Mount middleware (app.use)
 	
 	
 // Mount routes
 app.get('/', function (req, res) {
	  res.send('<h1>Bobs Universe!</h1>');
 });
 	
 // Tell the app to listen on port 3000
 app.listen(3000, function() {
   console.log('Listening on Bobs port 3000');
 });