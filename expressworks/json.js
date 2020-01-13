const express=require('express')
const app=express()
const fs=require('fs')

app.get('/books', function(req,res){
	const filename=process.argv[3]
	fs.readFile(filename,function(err,data){
		if(err) return res.send()
			try {
				books=JSON.parse(data)
			}catch(err){res.send()}
			res.json(books)
	})
})
app.listen(process.argv[2])