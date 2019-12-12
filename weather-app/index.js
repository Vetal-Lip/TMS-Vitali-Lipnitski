const form = document.getElementById('form');
form.onsubmit = function(event){
        event.preventDefault()
    }

const input = document.getElementById('input');
const buttonFind = document.getElementById('button');
const tbody = document.querySelector('#tbody');
const map = document.getElementById('map');
const img = document.createElement("img");
const storage = new Map();
const locationCoordinates = new Map();

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
    fetch(`http://api.weatherstack.com/current?access_key=c3f9ea88c1f45ba3d7f06dbe3ac4fa49&query= ${input.value}&units=f`)
    .then(result => result.json())
    .then(data => {
        const {
            location: {name, country, lat, lon},
            current: {temperature}
        } = data
        console.log(data)
        storage.set(name, [name, country, temperature]);
        console.log(storage);
        renderTbody();
        img.setAttribute('src', `https://maps.locationiq.com/v2/staticmap?key=pk.65c93667fe548705277ec2034036cbc4&center=${lat},${lon}&zoom=8&size=1000x800&markers=icon:small-purple-cutout|${lat},${lon}`)
        // img.setAttribute('src', `https://{s}-tiles.locationiq.com/v2/obk/r/{z}/{x}/{y}.png?key=pk.65c93667fe548705277ec2034036cbc4&center=${locationLat},${locationLon}&zoom=8&size=1000x1500&markers=icon:small-purple-cutout|${locationLat},${locationLon}`)
        map.append(img);
    })
})
 
let buttonClear = document.getElementById('clear');
buttonClear.addEventListener('click', function(){
    storage.clear();
    tbody.innerHTML = ' ';
    map.innerHTML = '';
    console.log(storage)
})