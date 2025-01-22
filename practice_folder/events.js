const eventemitter=require('events')
const custom=new eventemitter()
custom.on('res',(name,id)=>{
console.log("response received"+name+' '+id)
})
custom.on('res',()=>{
    console.log("another response received")
    })
custom.emit('res','udar',45)