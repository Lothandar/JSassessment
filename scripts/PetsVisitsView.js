let home = document.getElementById("home");
home.addEventListener("click", () => window.location.href = "./index.html");

const url = "http://localhost:9966/petclinic/api/pets/";

function getPetByID(id){

fetch(url+id, {
    headers: {
        "Accept": "application/json;charset=UTF-8"
      }
}) 
.then(response => response.json())
.then(res => display(res))
.catch(err => console.log(err));

}
function display(json){
        //console.log(json);
        //console.log(json.visits);
        if(json != null);
        {
            document.getElementById("Container").innerText="";
            let MainDiv= document.createElement("div");
            MainDiv.id ="MainDiv";
            document.getElementById("Container").appendChild(MainDiv);
            let h1 = document.createElement("h1");
            h1.innerText = json.name + " The: "+ json.type.name;
            MainDiv.appendChild(h1);
            if(json.visits.length == 0){
                //display no visits history or planned
                let myDiv = document.createElement("div");
                    myDiv.innerText = "This pet has no Visits planned or recorded";
                    MainDiv.appendChild(myDiv);
            }
            else
            {
                for(let v of json.visits)
                {
                    //console.log(v);
                    let myDiv = document.createElement("div");
                    myDiv.innerText = "Date: " + v.date + " , Description: " + v.description;
                    MainDiv.appendChild(myDiv);
                    let DeleteButton = document.createElement("button");
                    DeleteButton.innerText="Delete";
                    DeleteButton.addEventListener("click", () => DeleteThis(v.id));
                    myDiv.appendChild(DeleteButton);
                }
            }
        }
    }


function DeleteThis(Id)
{
    fetch("http://localhost:9966/petclinic/api/visits/"+Id,
    {
        method: "Delete",
        headers: {
                "Accept": "application/json;charset=UTF-8"
              }

    }).then(document.getElementById("Container").innerText="Pet: "+Id+ "Deleted Successfully");

}

function ShowPetByID(){
    //console.log("clicked");
    getPetByID(document.getElementById("petID").value);
}