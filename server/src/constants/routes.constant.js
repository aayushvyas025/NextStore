const apiRoutes = Object.freeze({
  baseUrl: "/nextstore/api/v1/",
  products: {
    POST: "/product/create",
    GET: "/products/fetch",
    GET_ID: "/products/fetch/:id",
    PUT: "/products/update/:id",
    DELETE: "/products/delete/:id",
  },
});

export default apiRoutes;
