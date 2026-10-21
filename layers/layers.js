var wms_layers = [];

var format_Poland_0 = new ol.format.GeoJSON();
var features_Poland_0 = format_Poland_0.readFeatures(json_Poland_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poland_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poland_0.addFeatures(features_Poland_0);
var lyr_Poland_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poland_0, 
                style: style_Poland_0,
                popuplayertitle: 'Польша — Poland',
                interactive: false,
                title: '<img src="styles/legend/Poland_0.png" /> Польша — Poland'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Польша',
                interactive: true,
    title: 'Польша<br />\
    <img src="styles/legend/_1_0.png" /> 6 - 6<br />\
    <img src="styles/legend/_1_1.png" /> 6 - 6,7<br />\
    <img src="styles/legend/_1_2.png" /> 6,7 - 7<br />\
    <img src="styles/legend/_1_3.png" /> 7 - 7,5<br />\
    <img src="styles/legend/_1_4.png" /> 7,5 - 8,7<br />' });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Промышленность Польши',
                interactive: true,
    title: 'Промышленность Польши<br />\
    <img src="styles/legend/_2_0.png" /> 0,4 - 0,7<br />\
    <img src="styles/legend/_2_1.png" /> 0,7 - 1,2<br />\
    <img src="styles/legend/_2_2.png" /> 1,2 - 2,3<br />\
    <img src="styles/legend/_2_3.png" /> 2,3 - 3,4<br />\
    <img src="styles/legend/_2_4.png" /> 3,4 - 11,5<br />' });

lyr_Poland_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr_Poland_0,lyr__1,lyr__2];
lyr_Poland_0.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr__1.set('fieldAliases', {'id': 'id', 'Name': 'Название города', 'X (долгота)': 'X (долгота)', 'Y (широта)': 'Y (широта)', 'Population': 'Население', 'GDP_share(%)': 'GDP_share(%)', 'Birth rate (per 1000)': 'Коэффициент рождаемости', });
lyr__2.set('fieldAliases', {'id': 'id', 'Name': 'Название города', 'X (долгота)': 'X (долгота)', 'Y (широта)': 'Y (широта)', 'Population': 'Население', 'GDP_share(%)': 'ВВП промышленности', 'Birth rate (per 1000)': 'Birth rate (per 1000)', });
lyr_Poland_0.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr__1.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'X (долгота)': 'Hidden', 'Y (широта)': 'Hidden', 'Population': 'Range', 'GDP_share(%)': 'Hidden', 'Birth rate (per 1000)': 'TextEdit', });
lyr__2.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'X (долгота)': 'Hidden', 'Y (широта)': 'Hidden', 'Population': 'Range', 'GDP_share(%)': 'TextEdit', 'Birth rate (per 1000)': 'Hidden', });
lyr_Poland_0.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr__1.set('fieldLabels', {'Name': 'inline label - always visible', 'Population': 'inline label - always visible', 'Birth rate (per 1000)': 'inline label - always visible', });
lyr__2.set('fieldLabels', {'Name': 'hidden field', 'Population': 'hidden field', 'GDP_share(%)': 'inline label - always visible', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});