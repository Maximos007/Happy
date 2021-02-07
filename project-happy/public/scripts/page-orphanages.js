// Create map
const map = L.map("mapid").setView([-15.7958613, -47.8890838], 13);

// Create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Create popup overlay
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,

    //possível erro na linha 25

}).setContent(
  'Lar das meninas <a href"/orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg"></a>'
);

// Create and add marker
L.marker([-15.7958613, -47.8890838], { icon }).addTo(map).bindPopup(popup);
