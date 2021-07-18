var express = require('express');
var cors   = require('cors');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
const { ObjectId } = require('bson');
var nodemailer = require('nodemailer');




var app = express();

app.use(cors());
var client = new MongoClient('mongodb+srv://crudproject:crudproject@cluster0.ffqoy.mongodb.net/student?retryWrites=true&w=majority',{useNewUrlParser:true, useUnifiedTopology:true});
var connection;
client.connect((err,db)=>{
    if(!err)
    {
        connection = db;
        console.log("Database Connected Successfully");
    }
    else{
        console.log("database could not connect");
    }

})
app.get('/student-by-id', (req,res)=>{
    var studentCollection = connection.db('student').collection('crud project');
    studentCollection.find({_id:ObjectId(req.query.id)}).toArray((err,docs)=>{
        if(!err)
        {
            res.send({status:"ok",data:docs});
            
        }
        else{
            res.send({status:"failed",data:err});
        }
    })
});
app.get('/list-student', (req,res)=>{
    var studentCollection = connection.db('student').collection('crud project');
    studentCollection.find().toArray((err,docs)=>{
        if(!err)
        {
            res.send({status:"ok",data:docs});
            
        }
        else{
            res.send({status:"failed",data:err});
        }
    })
});
app.get('/delete-student', (req,res)=>{
    var studentCollection = connection.db('student').collection('crud project');
    studentCollection.remove({_id:ObjectID(req.query.id)}, (err,results)=>{
        if(!err)
        {
            res.send({status:"ok",data:"student Deleted finally"});
            
        }
        else{
            res.send({status:"failed",data:err});
        }
    })

});
app.post('/create-student',bodyParser.json() , (req,res)=>{
    var studentCollection = connection.db('student').collection('crud project');
    studentCollection.insert(req.body, (err,results)=>{
        if(!err)
        {
            res.send({status:"ok",data:"student Created finally"});
            sendMail("mediamemories62@gmail.com","kgbdzyjukjumxxfs",req.body.email,"register success","<h1>Your Registration Complete<h1/>")

            
        }
        else{
            res.send({status:"failed",data:err});
        }
    })

});
app.post('/login-student',bodyParser.json() ,(req,res)=>{
    var studentCollection = connection.db('student').collection('crud project');
    studentCollection.find({email:req.body.email1}).toArray((err,docs)=>{
        if(!err)
        {
            res.send({status:"ok",data:docs.length>0});
            
        }
        else{
            res.send({status:"failed",data:err});
            
        }
    })

})
 app.post('/update-student',bodyParser.json() ,(req,res)=>{
     var studentCollection = connection.db('student').collection('crud project');


     studentCollection.update({_id:ObjectId(req.body._id)}, {$set:{name:req.body.name, age:req.body.age, marks:req.body.marks, email:req.body.email, city:req.body.city}}, (err,results)=>{
      if(!err)
       {
           res.send({status:"ok",data:"student Updated finally"});
            
       }
       else{
          res.send({status:"failed",data:err});
      }
    })
 });

app.listen(3000, ()=>{
    console.log("Server is Started");
})
function sendMail(from, appPassword, to, subject,  htmlmsg)

{

    let transporter=nodemailer.createTransport(

        {

            host:"smtp.gmail.com",

            port:587,

            secure:false,

            auth:

            {

             //  user:"weforwomen01@gmail.com",

             //  pass:""

             user:from,

             pass:appPassword

            

    

            }

        }

      );

    let mailOptions=

    {

       from:from ,

       to:to,

       subject:subject,

       html:htmlmsg

    };

    transporter.sendMail(mailOptions ,function(error,info)

    {

      if(error)

      {

        console.log(error);

      }

      else

      {

        console.log('Email sent:'+info.response);

      }

    });

}