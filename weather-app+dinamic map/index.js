const form = document.getElementById('form');
form.onsubmit = function(event){
        event.preventDefault()
    }

const input = document.getElementById('input');
const buttonFind = document.getElementById('button');
const tbody = document.querySelector('#tbody');
const buttonMyWeather = document.querySelector('#buttonMyWeather');
let mapId = document.getElementById('map');
const storage = new Map();
const mapMarkers = [];
let map;
let marker;

const key = 'pk.65c93667fe548705277ec2034036cbc4';
const streets = L.tileLayer.Unwired({key: key, scheme: "streets"});
map = L.map('map', {
    center: [52.5170365, 13.3888599], //map loads with Berlin as center
    zoom: 5,
    layers: [streets] // Show 'streets' by default
});     
L.control.scale().addTo(map);
L.control.layers({
    "Streets": streets
}).addTo(map); 

function renderTbody() {
    tbody.innerHTML = '' 
    storage.forEach((value, key) => {
        const [city, country, temperature] = value
        const row = `<tr>
            <td>${city}</td>
            <td>${country}</td>
            <td>${temperature}</td>
            <td>${temperature}</td>
        </tr>`
        tbody.innerHTML = tbody.innerHTML + row
    })
}

buttonMyWeather.addEventListener('click', function(){
    
        navigator.geolocation.getCurrentPosition(function(position) {
            const latMyWeather = position.coords.latitude;
            const lonMyWeather = position.coords.longitude;
            console.log(latMyWeather, lonMyWeather);
            fetch(`http://api.weatherstack.com/current?access_key=c3f9ea88c1f45ba3d7f06dbe3ac4fa49&query= ${latMyWeather}, ${lonMyWeather}`)    
                .then(result => result.json())
                .then(data => {
                const {
                    location: {name, country},
                    current: {temperature}
                } = data
                storage.set(name, [name, country, temperature]);
                renderTbody();
                marker = L.marker([latMyWeather, lonMyWeather]).addTo(map);
                marker.bindPopup(`My location: ${name}
                My temperature: ${temperature}`).openPopup();
                mapMarkers.push(marker);
                })
            })
})

buttonFind.addEventListener('click', function(){
    console.log(input.value);
    fetch(`http://api.weatherstack.com/current?access_key=c3f9ea88c1f45ba3d7f06dbe3ac4fa49&query= ${input.value}`)
    .then(result => result.json())
    .then(data => {
        console.log(data);
        const {
            location: {name, country, lat, lon},
            current: {temperature}
        } = data
        console.log(data)
        storage.set(name, [name, country, temperature]);
        renderTbody();

        marker = L.marker([lat, lon]).addTo(map);
        marker.bindPopup(`${[lat, lon]}`).openPopup();
        mapMarkers.push(marker);
        console.log(mapMarkers)
    })
})

let buttonClear = document.getElementById('clear');
buttonClear.addEventListener('click', function(event){
    storage.clear();
    tbody.innerHTML = ' ';
    mapMarkers.forEach(function(item){
        map.removeLayer(item);
    })
}) 