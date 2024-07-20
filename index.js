
import express from "express";
import axios from "axios";

const app=express();
const port=1000;

app.use(express.static("public"));


app.get("/", async(req,res)=>{
    const result = await axios.get("https://secrets-api.appbrewery.com/random");
    res.render("index.ejs", {
      secret: result.data.secret,
      user: result.data.username,
    });
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});

