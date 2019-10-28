function getID() {
    if (document.getElementById("inputID").value != "") {
        findAllPets(document.getElementById("inputID").value);
    }
}

function findAllPets(id) {
    fetch('http://localhost:9966/petclinic/api/owners/' + id, {
        //method: 'POST',
        //body: JSON.stringify({ name: petName.value, lastName: peopleName.value }),
        headers: { "Accept": "application/json;charset=UTF-8" }
    })
        .then(result => result.json())
        .then(res => printAllPets(res))
        .catch(err => console.log(err));
}
function printAllPets(json) {
    console.log(json);
    let myDiv = document.createElement("div");
    myDiv.innerText = json.firstName + " " + json.lastName;

    for (let p of json.pets) {
        myDiv.innerText += "; " + p.name;
        myDiv.innerText += " the " + p.type.name + "\n";
        console.log(p.name);
        console.log(p.type.name)
    }


    document.body.appendChild(myDiv);
}
