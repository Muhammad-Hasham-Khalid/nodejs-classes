const middleware = (request, response, next) => {
  // check whether the request is authenticated or not
  const token = request.headers['auth-token'];
  if (token === '123456') {
    next();
  }
  return response.status(400).json({
    error: 'request not authenticated',
  });
};

export default middleware;
