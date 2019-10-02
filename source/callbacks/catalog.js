/*
dataDependency: world
*/

module.exports = ({ $tag, site }) => {
    const size = "128x128";
    site.dataCatalog.world.forEach(item => {
        $tag.append(/* html */`
            <li class="catalog__list-item">
                <img src="media/flags/${size}/${item.img}" alt="${item.name} flag">
                <a class="catalog__list-item-link" href="/country/${item.name.toLowerCase()}/">
                    <p class="catalog__list-item-name">${item.name}</p>
                </a>
            </li>
        `);
    });
};