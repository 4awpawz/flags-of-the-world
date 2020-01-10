module.exports = ({ site }) =>
    site.dataCatalog.world.map(country =>
        ({ data: country, pageName: country.name }));