import passport from 'passport';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import config from 'config';

const verifyCallback = (payload: any, done: VerifiedCallback): void => {

};

const strategy = new Strategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.get('jwt.secret'),
}, verifyCallback);

passport.use(strategy)
