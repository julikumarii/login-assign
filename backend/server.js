const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM login where `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email,req.body.password], (err, data) => {
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Success");
        }else{
            return res.json("Failed");
        }
    })
})

app.listen(8081, ()=> {
    console.log("listening");
})



// // Get User Details API
// app.get('/getUserDetails', (req, res) => {
    
//     const email = 1;
  
//     const sql = 'SELECT * FROM login WHERE email = ?';
//     db.query(sql, [email], (err, result) => {
//       if (err) {
//         console.error('Error getting student details:', err);
//         res.json({ success: false });
//       } else {
//         res.json({ success: true});
//       }
//     });
//   });
  
//   // Edit User Details API
//   app.post('/editUserDetails', (req, res) => {
//     const {name } = req.body;
  
//     const sql = 'UPDATE login SET name=?,  WHERE email=?';
//     db.query(sql, [name, email, id], (err) => {
//       if (err) {
//         console.error('Error updating student details:', err);
//         res.json({ success: false });
//       } else {
//         res.json({ success: true });
//       }
//     });
//   });
  
  
  