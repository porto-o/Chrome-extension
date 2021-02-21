const SignUp = (req,res) => {
    const {userName, password} = req.params
    console.log(userName)
}

module.exports = {
    SignUp
}