let data = JSON.parse(localStorage.getItem("object")) || [];

const readAll = () => {
  let tableData = document.querySelector(".data-table");
  let elements = "";
  data.map((record) => {
    elements += `<tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
            <button class="edit" onclick="edit(${record.id})">Edit</button>
            <button class="delete" onclick="remove(${record.id})">Delete</button>
        </td>
        </tr>`;
  });
  tableData.innerHTML = elements;
};
// Add option
const add = () => {
  document.querySelector(".create-form").style.display = "block";
  document.querySelector(".add").style.display = "none";
};

// Create
const create = () => {
  let id= data.length ? data[data.length -1].id +1 :1;
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
// email validation
  let regEmail=/^[a-zA-Z0-9._]{5,}@[a-zA-Z]{5,}[.]{1}[a-zA-Z]{3}$/;
  if(regEmail.test(email)){
    document.querySelector("#message").innerHTML=" ";
  }
  else{
    document.querySelector('#message').innerHTML="Email is not Valid";
    return false;
  }

  let newObj = { id, name, email };
  data.push(newObj);
  localStorage.setItem('object',JSON.stringify(data));

  document.querySelector(".create-form").style.display = "none";
  document.querySelector(".add").style.display = "block";
  readAll();
};
//Edit option
const edit = (id) => {
  document.querySelector(".update-form").style.display = "block";
  document.querySelector(".add").style.display = "none";

  let obj = data.find((record) => record.id === id);
  document.querySelector(".uname").value = obj.name;
  document.querySelector(".uemail").value = obj.email;
  document.querySelector(".uid").value = obj.id;
};
//Update
const update = () => {
  let id = parseInt(document.querySelector(".uid").value);
  let name = document.querySelector(".uname").value;
  let email = document.querySelector(".uemail").value;

  let index = data.findIndex((record) => record.id === id);
  data[index] = { id, name, email };
  localStorage.setItem("object",JSON.stringify(data));

  document.querySelector(".update-form").style.display = "none";
  document.querySelector(".add").style.display = "block";

  readAll();
};

//Delete
const remove =(id)=>{
    data=data.filter(record=> record.id!== id)
    localStorage.setItem("object",JSON.stringify(data));
    readAll();
}