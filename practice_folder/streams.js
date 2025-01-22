// if the file is too big to read the variable cannot handle it so we use the streams

const{createReadStream,readFileSync}=require('fs')

const server=require('http')
server.createServer((req,res)=>{
    const stream=createReadStream('./text/four.txt','utf-8')
    // const data=readFileSync('./text/four.txt','utf-8',)//this will take lot of stuff through the wire
    stream.on('data',(datas)=>{
        stream.pipe(res)//converts readable to writable and pushed in the pipe to res
        // res.end(datas)
    })
    // console.log(stream)
}).listen(5001)