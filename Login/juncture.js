const { createPool }= require('mysql')
        const pool=createPool({
          host:"localhost",
          user:"root",
          password:"mms-17@UCSM",
          conncectionLimit:10
        })
         pool.query('SELECT * FROM user_login',(err,result)=>{
           return console.log(result)
         })