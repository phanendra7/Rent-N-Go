const mongoose= require("mongoose");
const url="mongodb+srv://car:1812@cluster0.elddn2b.mongodb.net/?retryWrites=true&w=majority"
const connectionParams={
    useNewUrlParser:true,
    useUnifiedTopology:true,

};
let
connectdb = async()=>{


try{


let
con = await
mongoose.connect(url,


 
  {useUnifiedTopology :true,


 
  useNewUrlParser: true


 
  }


 
  )


 
  console.log("database is connected with the given URI ")


}


catch(err){


console.log(err)


}


 


}


 


module.exports= connectdb


