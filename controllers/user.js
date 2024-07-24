const jwt = require(`jsonwebtoken`)
const bcrypt = require(`bcryptjs`)
const db = require("../config/database")

const getUser = async(req,res)=>{
    try{
        const query = 'SELECT * FROM users WHERE userID = ?';
        const values = [req.userID];
        console.log(values)
        const [data] = await db.query(query,values)
        if(!data) return  res.status(404).json({msg: 'no data found'})
            res.status(200).json(data[0])
    }catch(err){
        console.log(err)
        res.status(500).json({err:err})
    }
}

const registerUser = async (req, res) => {
    try {
        const body = req.body;
        const hashedPassword = await bcrypt.hash(body.userPassword, 12);

        const query = `INSERT INTO users (userName, userEmail, userPassword) VALUES (?, ?, ?)`;
        const values = [body.userName, body.userEmail, hashedPassword];

        const result = await db.query(query, values);

        res.status(200).json(result[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error with registration" });
    }
};

module.exports = {
    getUser : getUser,
    registerUser: registerUser
}