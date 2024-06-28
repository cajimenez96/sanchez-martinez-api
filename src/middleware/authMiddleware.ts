// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// import { JWT_SECRET } from '../helpers/constants';

// interface JwtPayload {
//   id: string;
// }

// interface AuthenticatedRequest extends Request {
//   user?: JwtPayload;
// }

// export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction): Response | void => {
//   const token = req.header('Authorization')?.split(' ')[1];
//   if (!token) {
//     return res.status(401).json({ error: 'No token provided, authorization denied' });
//   }

//   try {
//     const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;
//     req.user = decoded;
//     next();
//   } catch (error) {
//     return res.status(401).json({ error: 'Token is not valid' });
//   }
// };
