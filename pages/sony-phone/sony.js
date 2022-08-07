


const BASIC_API = "http://api-mobilespecs.azharimm.site/v2/brands/sony_ericsson-phones-19"

async function print() {
    // let objPrint = document.getElementById("objPrint")
    try {
        
        let printObj = await fetch(BASIC_API)
            .then(res => res.json())
        for (let key in printObj.data.phones) {
            iphonesPrint.innerHTML += `
            <div class="card d-flex text-center bg-light bg-opacity-50" style="font-family: 'Bebas Neue', cursive;" id='${printObj.data.phones[key]}'> 
            <div class="card-img-top img-adjusted d-flex justify-content-center bg-light "><img id="img-phone" src="${printObj.data.phones[key].image}" width="150px" height="150px"></div>
            <div class=" text-center" ><h1 style="font-family: 'Bebas Neue', cursive;font-weight:800">${printObj.data.phones[key].brand}</h2></div>
            <div>${printObj.data.phones[key].phone_name}</div>
            <div>${printObj.data.phones[key].slug}</div>
            <button class="dis btn btn-primary"; onclick="deleteUser('${printObj.data.phones[key]}')";>Add</button>
        </div>`
        }
    }
    catch (err) { }
    finally { 

    }

}
print()
let counter = 0
function deleteUser(id){
    if(counter==0){
        document.getElementById(id).remove()
        counter++
        alert("שמחנו לתרום תהנו מהמכשיר!.")

    }

  }