const imageTable = "https://picsum.photos/200/300"

async function tableUsers(){

    try{
        let users = await fetch("https://jsonplaceholder.typicode.com/users")
        .then (res=>res.json())
        for(let key in users){
             usersTable.innerHTML += `
            <tr id= "${users.id}">
            <td colspan="2">
                <h6>${users[key].name}</h6>
            </td>
            <td>
                <div class="d-flex align-items-center"><img class="rounded-circle" src="${imageTable}" width="30"><span class="ml-2">${users[key].username}</span></div>
            </td>
            <td>${users[key].email}</td>
            <td class="font-weight-bold">${users[key].address.street}</td>
            <td>${users[key].address.city}</td>
            <td>${users[key].phone}</td>
            <td><button class="${users.id} btn btn-danger"; onclick="deleteUser('${users.id}')";>delete</button></td>
            </tr>
        `
        }
    }
    catch(err){}
    finally{}
}
tableUsers()

async function deleteUser(id){
  document.getElementById(id).remove();

}