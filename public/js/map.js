let mapAPI_Key = mapToken;
maptilersdk.config.apiKey = mapAPI_Key;

const map = new maptilersdk.Map({
    container: 'map', // id of HTML container element
    style: maptilersdk.MapStyle.STREETS,
    center: listing.geometry.coordinates,
    zoom: 14,
});

// Add geocoding control
const gc = new maptilersdkMaptilerGeocoder.GeocodingControl();
map.addControl(gc, 'top-left');

// Create popup with HTML
const popup = new maptilersdk.Popup({ offset: 25 }).setHTML(`
    <h3>${listing.title}</h3>
    <p>Exact Location will be provided after booking</p>
`);

// Create marker and add popup
const marker = new maptilersdk.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(popup)  // attach popup here
    .addTo(map);

// console.log(list.geometry.coordinates);
