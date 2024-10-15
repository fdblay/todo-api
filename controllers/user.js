// Register ('user registered')
// Login ('user logged in')
// Logout ('user logged out')

export const userRegister = (req, res, next) => {
    res.json('User Registered!');
}

export const userLogin = (req, res, next) => {
    res.json('User Logged in!');
}

export const userLogout = (req, res, next) => {
    res.json('user Logged out');
}

export const updateUserProfile = (req, res, next) => {
    res.json('User profile updated')
}