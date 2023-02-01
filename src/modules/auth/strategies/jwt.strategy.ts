import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import appConfig from '../../../config/app.config';

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: appConfig().appSecret,
    });
  }

  async validate(payload: { sub: string; name: string }): Promise<{
    id: string;
    name: string;
  }> {
    return {
      id: payload.sub,
      name: payload.name,
    };
  }
}
