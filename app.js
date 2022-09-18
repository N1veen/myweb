const express=require("express");
const bodyParser=require("body-parser");
const Razorpay=require("Razorpay")


const app=express()

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    res.render("home")
});
app.get("/contact",function(req,res){
    res.render("contact")
});
app.get("/donate",function(req,res){
    res.redirect("https://rzp.io/l/NfidAes");
});

   
app.listen(3000, () => {
     console.log(`Example app listening at http://localhost:${3000}`)
   })



