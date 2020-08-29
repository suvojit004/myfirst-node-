const express= require("express");
const hbs=require("hbs");

const path=require("path");
const app=express();
// path for the views
const viewPath=path.join(__dirname,"/templete/views");
const publicPath=path.join(__dirname,"/src/public");
const partialPath=path.join(__dirname,"/templete/partials");
//use static file
app.use(express.static(publicPath));


//setting the view engine and path of the view location
app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialPath);

app.get("/",(req,res)=>
{
    res.render("index");
})
app.get("/about",(req,res)=>
{
    res.render("about",{
        title:"about page",
        name:"Suvojit"
    });
})
app.get("/help",(req,res)=>
{
    res.render("help",{
        title:"help page",
        write:"this is done",
        name:"Suvojit"
    });
})
app.get("*",(req,res)=>{
res.send("404 page not found");
})

app.listen(3000,()=>
{
    console.log("server is up");
    
});