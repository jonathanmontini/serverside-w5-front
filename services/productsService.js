/**
 * Ejercitación integradora:
 * En este archivo deberás crear el servicio.
 *
 ********************************************
 * Una vez creado, deberás correr el comando
 * `npm run test:unit:watch products-service`
 * y corroborrar que pasen los tests.
 ********************************************
 */
const { getNodeText } = require("@testing-library/react");

const restclient = require("nordic/restclient")({
  timeout: 5000,
});

class Service {
  static getProducts(siteId) {
    return restclient
      .get(`/sites/${siteId}/search`, {
        params: {
          q: "celular",
          limit: 10,
        },
      })
      .then((res) => res.data.results)
      .catch((err) => console.log(err));
  }
}

module.exports = Service;
