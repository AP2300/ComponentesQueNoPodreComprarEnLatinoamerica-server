const _token = require("./../../models/token")
const user = require("./user");

module.exports.GetUserData = async (req, res)=>{
    const token = req.headers["auth"];
    const decode = await _token.verifyToken(token);

    user.user(decode.id)
    .then(data =>{
       return res.send({
            success:true,
            data:data
        })
    })
    .catch(err =>{
        console.log(err);
        return res.send({
            success:false
        })
    })
}