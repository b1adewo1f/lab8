function initMap() {
  L.mapquest.key = 'O3XedOqZs8NIkNsDruvgbas76IGG9Uh2';
// 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('map', {
    center: [32.8785248,-117.2380747],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });
  L.marker([32.8785248,-117.2380747]).addTo(map);
}
