
function searchNames() {
    let name = document.getElementById('LNInput').value;
    console.log(name);
    fetchName(name);
}

function fetchName(id) {
    fetch('http://localhost:9966/petclinic/api/owners/' + id)
        .then(res => res.json())
        .then(json => handleData(json))
        .catch(err => console.error(err));
}
function handleData(json) {
    console.log(json);
    let sheet = document.createElement('div');
    json.forEach(i => {
        sheet.innerText = "Name: " + i.firstName + " " + i.lastName + " Adress: " + i.address + " " + i.city + " Phone number: " + i.telephone;
    });
    document.getElementById('pet main').appendChild(sheet);
}
