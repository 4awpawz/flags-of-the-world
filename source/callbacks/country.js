/*
dataDependencies: world
*/
module.exports = ({ $tag, $page, asset }) => {
    $page("title").append(" " + asset.collection.data.name);
    $tag.find("h2.flag-country__name").append(asset.collection.data.name);
    $tag.find("div.flag-country__flag-container").append(/* html */`
        <img class="flag-country__flag"
        src="/media/flags/128x128/${asset.collection.data.alpha2}.png"
        alt=" flag of ${asset.collection.data.name}">
    `);
    $tag.find("div.flag-country__alpha2-code").append(/* html */`
        <span class="flag-country__label">ISO 3166-1 Alpha2 Code:</span> ${asset.collection.data.alpha2}
    `);
    $tag.find("div.flag-country__alpha3-code").append(/* html */`
        <span class="flag-country__label">ISO 3166-1 Alpha3 Code:</span> ${asset.collection.data.alpha3}
    `);
};
