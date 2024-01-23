const asyncHandler = async (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).reject((err) => next(err));
  };
};

export { asyncHandler };
