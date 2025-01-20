// const os=require('os')
// const user=os.userInfo()
// console.log(user)
// const current_os={
//     name:os.type(),
//     free:os.freemem(),
//     tot:os.totalmem()}
// console.log(current_os)




// const path=require('path')
// console.log(path.sep)
// const path1=path.join('/content','join','join1')
// console.log('normal path',path1)
// const path2=path.resolve(__dirname,'content','join','join1')
// console.log("absolute path",path1)






// const {readFileSync,writeFileSync,readFile,writeFile}=require('fs')
// const one=readFileSync('./text/one.txt','utf-8')
// writeFileSync('./text/two.txt',one+" comming from one.txt",{flag:'a'})
// readFile("./text/two.txt",'utf-8',(err,data)=>{
//     const first=data
//     if(err){
//     console.log("i have got an error")
// return
// }
//     readFile("./text/one.txt",'utf-8',(err,data)=>{
//         const second=data
//         if(err){
//             console.log(err)
//             return
//         }
//         writeFile("./text/third.txt",first+'\n'+second,{flag:'a'},(err,data)=>{
//             console.log(data)
//         })

//     })
// })








const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        console.log("before res")
    res.end("wercome to homepage")
        console.log("after res")
}
    else if(req.url=='/about'){
        res.end("welcome to about page")
    }
    else{
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
            <h1>oops!</h1> 
            <p>go to the next page</p> 
            <a href="/">back home</a>
            `
        )
    }
// res.write('Welcome to our home page')
// res.end()
})
server.listen(5001)

// npm i pakcage is a local pakcage
// npm or sudo install -g package is a global package
// npm init -y