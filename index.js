const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://HelperImmerse:merichidaku@cluster3.tfkdcxw.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );


app.use (
    function (req, res, next) {

        var currentDate= new Date();
        var dateTime=currentDate.getDate() + " "
                    +(currentDate.getMonth()+1) + " "
                    +currentDate.getFullYear() + " "
                    +currentDate.getHours() + ":"
                    +currentDate.getMinutes() + ":"
                    +currentDate.getSeconds();
        let ip=req.ip
        let url=req.url
        console.log( dateTime + " , " + ip + " , " + url )


        // const today = moment();
        // console.log(today.format("YYYY-MM-DD hh-mm-ss") + " , " + req.ip + " , " + req.path);
        // next()
  }
  )
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
