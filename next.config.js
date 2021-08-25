module.exports = {
    images: {
        //domain yang di izinin buat akses image dari luar termasuk link/image yang ada di dalem api
        domains: ["a0.muscache.com", "links.papareact.com"],
    },
    env: {
        MAPBOX_KEY: process.env.MAPBOX_KEY,
    },
};
