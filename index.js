import  express from "express";
import cors from "cors"
import connection from "./Connection.js";
import user from "./Model.js";

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors({origin: 'http://localhost:3000'}))


app.post('/contactDetail' , async(req, res)=>{
    console.log(req.body)

const {name,email,text} = req.body

const saveData = new user({
    name,
    email,
    text
})

    

    res.status(200).send("form submited")
    await saveData.save()

})



connection.then(()=>{
app.listen(8000, ()=>{
    console.log("its running")
})
})

