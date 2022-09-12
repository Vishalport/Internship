var conn = require('./connection.js');
var express = require("express");
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true }));

app.get('/',function(req, res) {
    res.sendFile(__dirname+'/contact.html');
});


app.post('/',function(req, res){
    var name = req.body.name;
    var email = req.body.email;
    var mno = req.body.mno;
    var more = req.body.more;
    for (var multi in req.body.multi) {
        if (req.body.multi) {
          items = req.body.multi;
          multi = JSON.stringify(items).replace(/]|[[]|"/g, '',)
          // console.log(items);
        }
      }
    

    conn.connect(function(error){
        if(error) throw error;

        var sql = "INSERT INTO datas(name, email, mno, more, know) VALUES(?, ?, ?, ?, ?)";



        conn.query(sql, [name, email, mno, more, multi], function(error, result){
            if(error){
                throw error;
            }
            else {
                console.log("New User Added into database");
                res.send("Successful Submitted..!! : "+req.body.name);
                // res.redirect('/');
            }

            
            // res.json('/${req.file.index.js}');
            // res.send(result.insertId);
            // res.send('your desc'+desc.insertId);
        });
    });
});

app.listen(7000);