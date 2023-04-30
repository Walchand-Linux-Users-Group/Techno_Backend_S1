const signUp = async (req, res) => {
    res.send('User Created!');
}

const deleteUser = async (req, res) => {
    res.send('User Deleted!');
}

const login = async (req, res) => {
    res.send('User Logged In!');
}

module.exports = { deleteUser, login, signUp };