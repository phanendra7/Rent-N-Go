let express = require ("express")
let app = express();
let path = require ("path")
console.log(__dirname)
let hbs=require("hbs")

let connectdb = require("./connection/connectdb")
connectdb()

let saveDoc = require("./models/model")
saveDoc()




//view engine
app.set("view engine","hbs")
app.set("views",path.join(__dirname,"../templates/views"))

//for joining images and css 

app.use(express.static (path.join(__dirname, "../public")))

hbs.registerPartials(path.join(__dirname,"../templates/partials"))


// app.get("/", (req,res)=>{
//     res.sendFile(path.join(__dirname, "../public/home.html")
//     )
//     })

    // app.get("/",(req,res)=>{
    //     res.render("homepage")
    // })

    // app.get("/table",(req,res)=>{
    //    res.render("table")
    // })
app.get("/",(req,res)=>{
    res.render("homepage")
})

app.get("/category",(req,res)=>{
    res.render("category")
})

app.get("/pageproject",(req,res)=>{
    res.render("pageproject")
})

app.get("/pageproject1",(req,res)=>{
    res.render("pageproject1")
})

app.get("/pageproject2",(req,res)=>{
    res.render("pageproject2")
})

app.get("/LOGIN",(req,res)=>{
    res.render("LOGIN(M)")
})

app.get("/signup",(req,res)=>{
    res.render("sign up")
})

app.get("/forgot",(req,res)=>{
    res.render("FORGOT(M)")
})

app.get("/bookswift",(req,res)=>{
    res.render("webproject1")
})

app.get("/bookverna",(req,res)=>{
    res.render("webproject2")
})


app.get("/bookinnova",(req,res)=>{
    res.render("webproject3")
})

app.get("/bookertiga",(req,res)=>{
    res.render("webproject4")
})

app.get("/bookbmw",(req,res)=>{
    res.render("webproject")
})

app.get("/bookjaguar",(req,res)=>{
    res.render("webproject5")
})
// app.get("/school", (req,res)=>{
//     res.sendFile(path.join(__dirname, "../public/school.html")
//     )
//     })
  
//     app.get("/book",(req,res)=>{
       
//      res.sendFile(path.join(__dirname,"../public/booktable.html"))
//     })
 


app.listen("800", ()=>{console.log('connected...')
})