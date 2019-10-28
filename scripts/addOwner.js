let first = document.getElementById("firstName");
let last = document.getElementById("lastName");
let addr = document.getElementById("address");
let cty = document.getElementById("city");
let pnum = document.getElementById("phoneNumber");
let addOwn = document.getElementById("addOwner");
let bBtn = document.getElementById("back");

bBtn.addEventListener("click", () => window.location.href = "./ownerPage.html");
addOwn.addEventListener("click", () => addOwnerPt1());

function addOwnerPt1() {
    fetch("http://localhost:9966/petclinic/api/owners", { headers: { "Accept": "application/json;charset=UTF-8" } })
        .then(res => res.json())
        .then(res => addOwnerPt2(res));
}

function addOwnerPt2(data) {
    let idSize = data.length + 1;
    fetch("http://localhost:9966/petclinic/api/owners", {
        method: "POST",
        body: JSON.stringify({ firstName: first.value, lastName: last.value, address: addr.value, city: cty.value, telephone: pnum.value, id: idSize, pets: [] }),
        headers: {
            "Accept": "application/json;charset=UTF-8",
            "Content-Type": "application/json;charset=UTF-8"
        }
    }
    )
        ;
        first.value = "";
        last.value = "";
        addr.value = "";
        cty.value = "";
        pnum.value = "";
        window.location.href = "./ownerPage.html"
}
