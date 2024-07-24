const express = require('express');
const userRoutes = require('./routes/users');
const dotenv = require('dotenv');
const mysqlPool = require('./config/database');
dotenv.config();
const cookie = require("cookie-parser")
const app = express();
app.use(express.json());

(async () => {
    try {
      
        const queryRes = await mysqlPool.query('SELECT 1');
        console.log('MySQL DB connected');
        
        app.use('/user', userRoutes);

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    } catch (err) {
        console.error('Error connecting to MySQL:', err);
    }
})();
