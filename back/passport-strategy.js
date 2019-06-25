const passport = require('passport')
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy
const JWTStrategy   = passportJWT.Strategy;

require('dotenv').config()

passport.use(new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password'
    }, 
    (username, password, done) => {

        query = `SELECT FROM WHERE`

        connection.query(query, [username, password], (err, user) => {
            if (err) {
                return done(err)
            }
            if (!user) { 
                return done(null, false, {message: 'Incorrect username or password'}) 
            }
            return done(null, user, {message: 'Logged In Successfully'})
        })
    }    
));


passport.use(new JWTStrategy(
    {
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : process.env.JWT_SECRET_KEY
    },
    (jwtPayload, done) => {
        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return UserModel.findOneById(jwtPayload.id)
            .then(user => {
                return done(null, user);
            })
            .catch(err => {
                return done(err);
            });
    }
));