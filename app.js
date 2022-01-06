//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const date=require(__dirname + "/date.js");
// date() calling out the function
//console.log(date());

const app = express();

const items = ["Buy Food","Cook Food","Eat Food"];
const workItems =[];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use (express.static("public"));

app.get("/", function (req, res) {

  // var currentday = today.getDay();

  //  var day = "";
  //if (currentday === 6 || currentday === 0) {
                                            // || today.getDay() === 0)
    //day = "Weekend";
                              //res.write("<h1>Yay! it's the weekend.</h1>");
                                  //res.render("list",{kindOfDay:day});
  //  } else {
                               //res.write("<p> It is ot the weekend.</p>");
                            //res.write("<h1>Boo it's the work day :)</h1> ");
  //  day = "Weekdays";
                             //res.sendFile(__dirname +"/index.html");
                            // res.render("list",{kindOfDay:day});
  //  }
  // res.render("list", { kindOfDay: day });
   /* switch (currentday) {
       case 0:
       day ="Sunday";
       break;

       case 1:
       day ="Monday";
       break;

       case 2:
       day ="Tuesday";
       break;

       case 3:
       day ="Wednesday";
       break;

       case 4:
      day ="Thursday";
       break;

       case 5:
       day ="Friday";
       break;

       case 6:
       day ="Saturday";
       break;

       default:
       console.log("Error: Current day is equal to : "+ currentday );
       */

       //let day = date(); // calling the function that is bound to the date
       //let day =date.getDay(); // For day
        let day =date.getDate();
       res.render("list",{ListTitle:day,newListItems:items});

  // res.render("list",{kindOfDay:day});

});

app.post("/",function(req,res){

 let item=req.body.newItem;
 if(req.body.list ==="Work" )
  {
    workItems.push(item);
    res.redirect("/work")
  }else {
    items.push(item);
    res.redirect("/");
  }

//  res.render("list",{newListItem : item })

});


app.get("/work",function(req,res){
  res.render("list",{ListTitle:"Work list",newListItems:workItems});
});

app.post("/work",function(req,res){
  let item =req.body.newItem;
  workItems.push(item);
   res.redirect("/work");
});


app.get("/about",function(req,res){
  res.render("about");
});

app.listen(process.env.PORT||3000, function () {
  console.log("Server has started at 3000");
});
