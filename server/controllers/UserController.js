const SignUp = (req,res) => {
    const {userName, password} = JSON.parse(req.params.data)
    console.log('USERNAME: ' + userName)
    console.log('Password: ' + password);
}

module.exports = {
    SignUp
}