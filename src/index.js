const express = require('express')
const bodyParser = require('body-parser')
const port = 5000
const app = express()
const cors = require('cors')

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(cors())

const {userModel} = require('./connector/userConnector');
const {restaurentModel} = require('./connector/restaurentConnector');


app.get('/users',(req,res,next)=>{
    userModel.find().then(result => res.send(result)).catch(error => res.send({message : error.message}));
});

app.post('/users',(req,res)=>{
    const {email} = req.body;
    const user = new userModel({
        email : email,
        role : "user"
    })
    user.save();
})

app.get('/restaurents',(req,res)=>{
    const city = req.query.city;
  let limitReceived = req.query.limit;
  let offsetReceived = req.query.offset;
  let limit = parseInt(Number(limitReceived));
  let offset = parseInt(Number(offsetReceived));

const options = {};
options.skip = (offset-1) * limit;
options.limit = limit;
restaurentModel.countDocuments({city : city}, function (err) {
  if (err) {
    res.status(500).send({ message: err.message });
    return;
  }
  restaurentModel.find({city : city}, {}, options, function (err, result) {
    if (err) {
      res.status(500).send({ message: err.message });
      return;
    } else {
      res.status(200).send(result);
    }
  });
});
})


app.get('/:city',(req,res)=>{
    const city = req.params.city;
    restaurentModel.countDocuments({city : city },function(err,count){
        if(err){
            console.log(err);
        }
        res.send({count:count});
    });

})
app.get('/',(req,res)=>{
    restaurentModel.distinct("city").then(results => res.send(results)).catch(error => res.send({message : error.message }));
})

app.post('/',(req,res)=>{
    const {name,localty,cusines,dishes,streetName,city,state,country} = req.body;
    console.log(data);
    const restaurentData = new restaurentModel({
        name : name,
        localty : localty,
        cusines : cusines,
        dishes : dishes,
        streetName : streetName,
        city : city,
        state : state,
        country : country
    })
    restaurentData.save();
})




app.listen(port ,()=> console.log(`App Listening to port ${port}`));