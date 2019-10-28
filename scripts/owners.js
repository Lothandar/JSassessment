let showBtn = document.getElementById("showOwner");
let addBtn = document.getElementById("addOwners");
let display1 = document.getElementById("output");
let hBtn = document.getElementById("home");

addBtn.addEventListener("click", () => window.location.href = "./addOwner.html");
showBtn.addEventListener("click", () => showOwners());
hBtn.addEventListener("click", () => window.location.href = "./index.html");

function showOwners() {
    fetch("http://localhost:9966/petclinic/api/owners", { headers: { "Accept": "application/json;charset=UTF-8" } })
        .then(res => res.json())
        .then(res => printOwners(res));
}

function printOwners(data) {
    console.log(data);
    data.forEach(d => {
        let p = document.createElement("p");
        let h = document.createElement("h3");
        let sq = document.createElement("div");
        sq.className = "card";
        sq.addEventListener('click', () => window.location.href = './oneOwnerView.html?id=' + d.id);
        h.innerText = d.firstName + " " + d.lastName;
        p.innerText = "Address: \n" + d.address + "\n" + d.city 
        + "\nPhone number: " + d.telephone
        + "\n";
        sq.append(h, p);
        display1.appendChild(sq);
    }
    );
}