import local from 'passport-local'
import passport from 'passport'
import { createHash, validatePassword } from '../utils/bcrypt.js'

const LocalStrategy = local.Strategy



const initializePassport = () => {
    passport.use('register', new LocalStrategy(
        {passReqToCallback: true, usernameField: 'email'}, async(req, username, password, done) =>{
            const {first_name, last_name, email, age, gender} = req.body
            try{
                const user = await user.findOne({email:email})

                if(user){
                    return donde (null, false)
                }
                const passwordHash = createHash(password)
                const userCreated = User.create({
                    first_name: first_name,
                    last_name: last_name,
                    email: email,
                    age: age,
                    gender: gender,
                    password: passwordHash
                })
                console.log(userCreated)
                return done (null, userCreated)
            }catch(error) {
                return done(error)

            }
        }
    ))
}