const form = document.getElementById('form');
form.onsubmit = function(event){
        event.preventDefault()
    }

const input = document.getElementById('input');
const buttonFind = document.getElementById('button');
const tbody = document.querySelector('#tbody');
let mapId = document.getElementById('map');
const storage = new Map();
let map;
let marker;

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
        
        
        if (!mapId.innerHTML) {
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
            marker = L.marker([lat, lon]).addTo(map);
            marker.bindPopup(`${[lat, lon]}`).openPopup();
                        
        } else {
           marker = L.marker([lat, lon]).addTo(map);
           marker.bindPopup(`${[lat, lon]}`).openPopup();
                    
        };
        console.log(map);
       
    })
})



let buttonClear = document.getElementById('clear');
buttonClear.addEventListener('click', function(){
    storage.clear();
    tbody.innerHTML = ' ';
    map.remove();
    console.log(storage)
})
