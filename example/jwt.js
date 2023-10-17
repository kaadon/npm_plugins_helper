const {JwtInstance} = require("../helper/encrypt");
console.log()
console.log(JwtInstance().verifyToken(JwtInstance().generateToken({"data":{"a":"6"}})))

