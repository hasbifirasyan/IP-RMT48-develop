const bcrypt = require('bcrypt');
const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password,salt)
}

const comparePassword = (pasword, hashedPassoword) =>{
    return bcrypt.compareSync(pasword, hashedPassoword)
}
module.exports={hashPassword,comparePassword}