 
const request=require('request')
const forecast=(latitude,longitude,callback)=>{
    const url="http://api.weatherstack.com/current?access_key=3148100e94ce3178289e95e2b602494d&query=37.8267,-122.4233"
    request({url:url,json:true},(error,response)=>{
    if (error){
        callback('error',undefined)
    }
    else{

        callback(undefined,response.body)
    }
})
}
module.exports=forecast