console.log('javascript is running')
const weatherdata=document.querySelector('form')
const res=document.querySelector('#locations')
const messageone=document.querySelector('#result')
weatherdata.addEventListener('submit',(e)=>{
    e.preventDefault()
    const valuesearch=res.value
    messageone.textContent="Loading.."
    fetch('http://localhost:3000/weather?locations=!').then((response)=>{
    response.json().then((data)=>{
        if (data.error){
            messageone.textContent=data.error
        }
        else{
            messageone.textContent=data.Data.location.name
            console.log(data)
            
        }

        })
    })
    
})