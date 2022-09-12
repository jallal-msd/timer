import express from 'express'
import bodyParse from 'body-parser'
import cors from 'cors'
import fs from 'fs'

const app = express()
app.use(bodyParse.json())
app.use(express.static('public'))
app.use(cors())

const jobs = fs.readFileSync('job.json')
const jsonJobs = JSON.parse(jobs)


app.get('/' ,(req,res)=>{

	res.send(jsonJobs)
	
})

app.post('/send' ,(req,res)=>{

	let data = req.body
	console.log(data)
	fs.writeFile('job.json' , JSON.stringify(req.body),(()=>{
		console.log("done")
	}))
})


app.listen(3000, ()=> console.log("listing on 3000"))