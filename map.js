const mymap = L.map('issMap').setView([40, 0], 2);
mymap.options.minZoom = 1.5;
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { noWrap: true }, { attribution });
tiles.addTo(mymap);

namelist = [];
var clickedPoint = '';
jQuery(function () {
  $.get('lan_info1.csv', function (csvString) {
    data = Papa.parse(csvString, { header: true, dynamicTyping: true }).data;
    console.log(data);
    for (var i in data) {
      var row = data[i];
      if (row.Population == 0) {
        var circle = L.circle([row.Latitude, row.Longitude], {
          color: '#bcbcbc',
          fillColor: '#bcbcbc',
          fillOpacity: 0.5,
          radius: 20000,
        });
      } else if (row.Population < 10000) {
        var circle = L.circle([row.Latitude, row.Longitude], {
          color: '#f9c29c',
          fillColor: '#f9c29c',
          fillOpacity: 0.5,
          radius: 20000,
        });
      } else if (row.Population < 1000000) {
        var circle = L.circle([row.Latitude, row.Longitude], {
          color: '#fe9b56',
          fillColor: '#fe9b56',
          fillOpacity: 0.5,
          radius: 20000,
        });
      } else {
        var circle = L.circle([row.Latitude, row.Longitude], {
          color: '#c45000',
          fillColor: '#c45000',
          fillOpacity: 0.5,
          radius: 20000,
        });
      }
      // console.log("the point:",circle);
      circle
        .addTo(mymap)
        .bindTooltip(row.Language + ', Population: ' + row.Population, 'tooltip')
        .on('click', function (event) {
          // console.log(event.target._tooltip._content.split(",")[0]);
          clickedPoint = event.target._tooltip._content.split(',')[0];
          // click_list.push(clickedPoint);
          console.log(clickedPoint);
          window.test(clickedPoint);
        });
    }
    // console.log(namelist);
  });
});

var legend = L.control({ position: 'topright' });
legend.onAdd = function (mymap) {
  var div = L.DomUtil.create('div', 'info legend');
  div.innerHTML =
    '<select id="demoselect"><option value="def"></option><option value="afr">Africa</option><option value="ang">Australia & New Guinea</option><option value="eur">Eurasia</option><option value="nam">North America</option><option value="sam">South America</option><option value="sao">Southeast Asia & Oceania</option></select>';
  div.firstChild.onmousedown = div.firstChild.ondblclick = L.DomEvent.stopPropagation;
  return div;
};
legend.addTo(mymap);

$('select').change(function () {
  var options = document.getElementById('demoselect').value;
  // console.log(options);
  if (options == 'def') {
    mymap.setView([40, 0], 2);
  } else if (options == 'afr') {
    mymap.setView([0, 20], 4);
  } else if (options == 'ang') {
    mymap.setView([-20, 130], 4);
  } else if (options == 'eur') {
    mymap.setView([50, 80], 3);
  } else if (options == 'nam') {
    mymap.setView([35, -90], 4);
  } else if (options == 'sam') {
    mymap.setView([-18, -65], 4);
  } else if (options == 'sao') {
    mymap.setView([0, 120], 4);
  }
});
