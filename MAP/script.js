let turismo = [['Santiago, Chile', -33.44758, -70.67172], ['Gramado, Brasil', -29.37463, -50.87402]]
for (let i = 0; i < turismo.length; i++) {
    let map = new ol.Map({
        target: 'local-' + (i + 1),
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([
                turismo[i][2],
                turismo[i][1]
            ]),
            zoom: parseInt(prompt('Zoom desejado [entre 5 e 15]: '))
        })
    })
}
