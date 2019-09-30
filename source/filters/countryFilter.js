module.exports = ({ site }) =>
    site.dataCatalog.world.map(country =>
        ({ item: country, pageName: country.name }));