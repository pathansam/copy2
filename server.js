
const express=require ("express");
const  app=express();
const mysql=require("mysql");
const path=(__dirname);
const bodyparser=require('body-parser');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"sameer@123",
    database:"iacsdmar22"
});


con.connect((err)=>{
    if (err){
    console.log(" db connection faild "
      ,err);
    }

else
{
    con.query("select * from emp",(err,date)=>{
        
        if (err)
           console.log("no data err");

           else{
            // console.log(date);clea
           }
    })
}
})




app.get("/",(req,res)=>{
    con.query("select * from emp",(err,data)=>{
        if(err)
        res.send("Error Occured");
        else{
        res.send(data);
        }
    })

});

app.get("/:id",(req,res)=>{
    var id=req.params.id;
    con.query('select * from emp where empno='+id,(err,data)=>{
        if(err)
        res.send("Invalid Id");
        else
        res.send(data);
    });

});

app.listen(9000,()=>{
    console.log("listening on server");

});