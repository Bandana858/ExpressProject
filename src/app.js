const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path")
var hbs = require('hbs')
//Public static path//
const staticPath = path.join(__dirname, "../public")
const template_path = path.join(__dirname, "../templates/views")
const partials_Path = path.join(__dirname, "../templates/partials")

app.set('view engine', 'hbs');
app.set("views", template_path)
hbs.registerPartials(partials_Path)

app.use(express.static(staticPath))


//Routing//
app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/about", (req, res)=>{
    res.render('about')
})

app.get("/weather", (req, res)=>{
    res.render('weather')
})

app.get("*", (req, res)=>{
    res.render('error', {
        errorMsg: 'Opps! Page not found'
    })
})

app.listen(port, ()=>{
    console.log(`listening to the port number ${port}`)
})