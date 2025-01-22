//  Inside the use of promises(no abstraction)
                        // const { readFile,writeFile } = require('fs')
                        // const { resolve } = require('path')
                        // const read=(path)=>{
                        // return new Promise((resolve,reject)=>{
                        //     readFile(path,'utf-8',(err,data)=>{
                        //         if(err){
                        //             reject(err)
                        //         }
                        //         else{
                        //         resolve(data)
                        //         }
                        //     })
                        // })
                        // }
                        // read('./text/one.txt').then((data)=>console.log(data)).catch((error)=>console.log(error))

// Inside promises using async await and we are not specifying the .then and .catch
                        // const { readFile,writeFile } = require('fs')
                        // const { resolve } = require('path')
                        // const read=(path)=>{
                        // return new Promise((resolve,reject)=>{
                        //     readFile(path,'utf-8',(err,data)=>{
                        //         if(err){
                        //             reject(err)
                        //         }
                        //         else{
                        //         resolve(data)
                        //         }
                        //     })
                        // })
                        // }
                        // const readwrite=async()=>{
                            
                        //     const one=await read('./text/one.txt')
                            
                            
                        //     const two=await read('./text/two.txt')
                            
                        //     await writeFile('./text/third.txt',one+'\n'+two,{flag:'a'},(err,data)=>{})
                        // }
                        // readwrite()

// Using util
                        const { readFile,writeFile } = require('fs')
                        const util=require('util')
                        const readfilepromise=util.promisify(readFile)
                        const writefilepromise=util.promisify(writeFile)
                        const readwrite=async()=>{
                            
                                const one=await readfilepromise('./text/one.txt')
                                
                                
                                const two=await readfilepromise('./text/two.txt')
                                
                                await writefilepromise('./text/third.txt',one+'\n'+two,{flag:'a'},(err,data)=>{})
                            }
                            readwrite()


