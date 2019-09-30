module.exports = ({ siteMetadata }) =>
    siteMetadata.dataCatalog.world.map(country =>
        ({ item: country, pageName: country.name }));