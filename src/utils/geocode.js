const geocode=(address,callback)=>{
    url="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=YOUR_MAPBOX_ACCESS_TOKEN"
    request({url:url,json:true},(error,response)=>{
        if (error){
            callback('something went wrong',undefined)
        }
        else if(response.body.features.length===0){
            callback('something went wrong',undefined)
    
        }
        else{
            callback(undefined,{
            latitude: response.body.features[0].center[0],
            longitude: response.body.features[0].center[1],
            address : response.body.features[0].place_name

            })
            
    
        }
         
    })
}
 
module.exports=geocode
