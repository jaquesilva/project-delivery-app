// const validateTokenMiddleware = async (req, res, next) => {
//   const token = req.headers.authorization;
//   // console.log(token);

//   if (!token) return res.status(401).json({ message: 'Token must be a valid token' });

//   try {
//     const decoded = jwtTokenGenerator.jwtTokenVerify(token);
//     console.log(decoded);

//     // if (req.url === '/login/validate') {
//     //   const { role } = decoded.loginUser;
//     //   return res.status(200).json({ role });
//     }
//     next();
//   } catch (error) {
//       return res.status(401).json({ message: 'Token must be a valid token' });
//     }

//     next(error);
// };

// export default validateTokenMiddleware;