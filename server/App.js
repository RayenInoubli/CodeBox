const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'codebox'
})

con.connect(() => {
    console.log("connected");
})

app.get("/", (req, res) => {

    const query = "SELECT * FROM users";
    con.query(query, (requsest, response) => {
        res.send(response);
    })
})

app.post("/signup", (req,res) => {

    const userId = req.body.userId;
    const userName = req.body.userName;
    const userPassword = req.body.userPassword;
    const userEmail = req.body.userEmail;

    const sql = "INSERT INTO users(userId, userName, userPassword, userEmail) VALUES (?,?,?,?)";
    con.query(sql, [userId, userName, userPassword, userEmail], (err, result) => {
       // console.log("inserted successfuly");
    })

})

app.get("/login", (req,res) => {

    const userName = req.query.userName;
    const userPassword = req.query.userPassword;

    const sql = "SELECT * FROM users WHERE userName = ? AND userPassword = ?";
    con.query(sql, [userName, userPassword], (err, result) => {
        //console.log("selected succsessfuly");
        res.send(result);
    })
})

app.get("/Cards", (req,res) => {

    let userId = req.query.userId;

    const sql = "SELECT * FROM card_content WHERE userId = ?";
    con.query(sql, [userId], (err, result) => {
        res.send(result);
    })
})

app.post("/newCard", (req, res) => {

    const cardId = req.body.cardId;
    const cardTitle = req.body.cardTitle;
    const cardText = req.body.cardText;
    const cardDescription = req.body.cardDescription;
    const userId = req.body.userId;

    if (cardId && cardTitle && cardText && cardDescription && userId) {
        
        const sql = "INSERT INTO card_content(cardId, cardTitle, cardText, cardDescription, userId) VALUES (?,?,?,?,?)";
        con.query(sql, [cardId, cardTitle, cardText, cardDescription, userId], (err) => {
            console.log(err);
        })
    }


})


app.get("/UserCards", (req,res) => {

    const sql = "SELECT * FROM card_content";
    con.query(sql, (err, result) => {
        res.send(result);
    })
})

app.post("/Edit",(req,res) => {
   const Id = req.body.Id;
    const NewText = req.body.NewText;

    const sql = "UPDATE card_content SET cardText= ? WHERE cardId = ?";
    con.query(sql, [NewText, Id], (err, result) => {
       // console.log("updated successfuly");
    })
})
 
app.post("/Delete",(req,res) => {
    const Id = req.body.Id;
 
     const sql = "DELETE FROM card_content WHERE cardId = ?";
     con.query(sql, [Id], (err, result) => {
        // console.log("deleted successfuly");
     })
 })

 app.post("/editaccount", (req,res) => {

    const userId = req.body.userId
    const newEmail = req.body.userEmail
    const newName = req.body.userName
    const newPassword = req.body.userPassword

    if (cardId && cardTitle && cardText && cardDescription && userId) {
        
        const sql = "UPDATE users SET userName = ?, userPassword = ?, userEmail = ? WHERE userId = ?";
        con.query(sql, [newName,newPassword,newEmail,userId], (err) => {
            console.log(err);
        })
    }
 })

app.listen(3001, () => {
    console.log("running on port 3001")
})