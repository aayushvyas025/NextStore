function setupErrorMiddleware(app) {
  app.use((error, request, response) => {
    response
      .status(500)
      .json({ success: false, message: "Internal server error" });
  });
}

export default setupErrorMiddleware; 