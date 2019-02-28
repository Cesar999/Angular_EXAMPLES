const express = require(`express`);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/httpExample1',{ useNewUrlParser: true });

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name: {type: String},
    grade: {type: String},
    subject: {type: String}
});
const Student = mongoose.model('student',studentSchema);

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

var server = app.listen(port,()=>{
    console.log(`Listening port 3000`);
});

let publicPath = __dirname+'/public';
app.use(express.static(publicPath));

app.use((req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
  res.setHeader("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});

app.post('/post', (req, res) => {
  const student1 = new Student({
    name: req.body.name,
    grade: req.body.grade,
    subject: req.body.subject
  });
  student1.save()
  .then((s)=>{
    console.log(s);
    res.json(s);
  })
  .catch(()=>{
    res.status(404);
  })

});

app.get('/get', (req, res) => {
  Student.find()
  .then((s)=>{
    res.json(s);
  })
  .catch(()=>{
    res.status(404);
  })

});

app.delete('/delete/:id', (req, res) => {
  Student.findOneAndDelete({_id: req.params.id})
  .then((s)=>{
    res.json(s);
  })
  .catch(()=>{
    res.status(404);
  })

});

app.put('/update', (req, res) => {
  const { name, grade, subject, _id } = req.body;
  const student1 = {name, grade, subject};
  console.log(req.body);
  Student.findByIdAndUpdate({_id}, student1)
  .then((s)=>{
    res.json(s);
  })
  .catch(()=>{
    res.status(404);
  })
});

