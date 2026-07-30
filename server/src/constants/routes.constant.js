const apiRoutes = Object.freeze({
  baseUrl: "/nextstore/api/v1/",
  products: {
    POST: "/product/create",
    GET: "/products/fetch",
    GET_ID: "/product/fetch/:id",
    PUT: "/product/update/:id",
    DELETE: "/product/delete/:id",
  },
});

export default apiRoutes;
