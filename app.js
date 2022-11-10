const express = require('express');
const { networkInterfaces } = require('os');
const app = express()
const port = 3000
app.use(express.static('public') );
app.set('view engine', 'pug');
app.set('views', './view');
app.use((req, res,next)=>{
    let time=new Date();
    if(time.getDay() > 1 || time.getDay() < 5){
        if(time.getHours() < 15 || time.getHours() >17){
            res.end('Lapplication est ferme !')
          }
        else{
            next();
        }
    }
    
  }
);


app.get('/',function (req, res){
  res.render('accueil')
});

app.get('/contact',function (req, res){
    res.render('contact')
  });
app.get('/services',function(req, res){
  res.render('services')
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

