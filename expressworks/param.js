const express = require('express')
const app = express()
app.put('/message/:id', function(req, res){
	const id = req.params.id
	const crypto=require('crypto')
      .createHash('sha1')
      .update(new Date().toDateString() + id)
      .digest('hex')
      res.send(crypto)
});
app.listen(process.argv[2]);