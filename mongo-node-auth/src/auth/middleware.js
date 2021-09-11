import { User } from '../resources/user/user.model';
import { messageLogger } from '../utils/loggers';
import { verifyToken } from './utils';

export const authenticate = async (request, response, next) => {
  const bearer = request.headers.authorization;

  // Prefix: Bearer | Token
  // 'Bearer <the token value here>'
  // 'Token <the token value here>'

  if (!bearer || !bearer.startsWith('Bearer ')) {
    return response
      .status(401)
      .json({ success: false, message: 'authorization token not found' });
  }

  const token = bearer.split('Bearer ')[1].trim();
  try {
    const payload = await verifyToken(token);

    const foundUser = await User.findById(payload.id)
      .select('-password')
      .lean()
      .exec();

    if (!foundUser) {
      return response
        .status(401)
        .json({ success: false, message: 'invalid token' });
    }

    request.user = foundUser;
    next();
  } catch (exception) {
    messageLogger.error(exception.message);
    return response.status(500).end();
  }
};
