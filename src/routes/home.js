// import L from 'leaflet';
// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
const path = require('path');
const env = require('env2')(path.join(__dirname, '../../config.env'));
const accessToken = process.env.MAPBOX_ACCESS_TOKEN

module.exports = {
  method: 'GET',
  path: '/',
  handler: (request, reply) => {

    const context = {
      hello: 'Hello World',
      mapboxToken: accessToken
    };

    return reply.view('index', context);
  }
};
