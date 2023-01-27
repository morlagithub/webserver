const express=require('express')
const path=require('path')
const app=express()
const request=require('request')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')
console.log(path.join(__dirname,"../public/home.html"))
const pathdirectory=path.join(__dirname,"../public")
app.use(express.static(pathdirectory))
//static is used to set index.html page for index.hbs we have set manually like declared below
app.set('view engine','hbs')

app.get('',(req,res)=>{
    res.render('index')

})
app.get('/weather',(req,res)=>{
    if (!req.query.locations){
        return res.send({error:'Please Provide valid address'})
    }
    else{
        //res.send({datas:req.query.locations})
        forecast(37.83,-122.42,(error,data)=>{
            if (error){
                console.log('error in forecast') 
            }
            else{
                console.log(data)
                return res.send({Data:data})

            }
            
        })
    }
})
app.get('/help',(req,res)=>{
    res.send('Hello nodejs world,help page')

})
app.listen(3000,()=>{
    console.log('your app now running')
})
