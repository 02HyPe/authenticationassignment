const jwt = require(`jsonwebtoken`)
const bcrypt = require(`bcryptjs`)
const db = require("../config/database")

const login = async(req,res) => {
    try{
        const body = req.body;
        const query = `SELECT * FROM users WHERE userName = ?`;
        const values = [body.userName];
        const data = await db.query(query, values);
        const record = data[0][0]
        const passwordMatch = await bcrypt.compare(body.userPassword, record.userPassword);
      if (passwordMatch) {
        
        const token = jwt.sign(
          {
            userID : record.userID
          },
          process.env.JWT_SECRET || "somesupersecret"
        );
        console.log(token)
        return res.status(200).json({jwt: "Bearer "+token})
    }

    }catch(err){
        res.status(500).json({msg: "couldnt login"})
    }
}

const logout = async(req,res) =>{
    
}


module.exports = {
    login :login,
    logout: logout
}