const jwt = require(`jsonwebtoken`);

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];//set authorixation header in postman and give taken to it 
  if (!authHeader) {
    return res.status(400).send(`login needed`);
  }
  const token = authHeader.split(` `)[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, `somesupersecret`);
    console.log(decodedToken);
  } catch (err) {
    console.log(err, `error while decoding token`);
    return res.status(400).send("error with verifying token");
  }
  req.userID = decodedToken.userID;
  next();
};
