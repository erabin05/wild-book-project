const passport = require('passport')
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy
const JWTStrategy   = passportJWT.Strategy;

const connection = require('./conf');

require('dotenv').config()

// get user in DB and verify if exist
passport.use(new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password'
    }, 
    (username, password, done) => {

    const query = `SELECT id, username FROM admins WHERE username=? AND password=?`

        connection.query(query, [username, password], (err, user) => {
            if (err) {
                return done(err)
            }
            if (user.length < 1) {
                return done(null, false, {message: 'Incorrect username or password'}) 
            }
            return done(null, user, {message: 'Logged In Successfully'})
        })
    }    
));

// verify JWT during request
passport.use(new JWTStrategy(
    {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : process.env.JWT_SECRET_KEY
    },
    (jwtPayload, done) => {
        return done(null, jwtPayload);      
    }
));