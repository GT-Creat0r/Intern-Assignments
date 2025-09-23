let data = JSON.parse(localStorage.getItem("object")) || [];
let deleteId = null;

const readAll = () => {
  let tableData = document.querySelector(".data-table");
  tableData.innerHTML = "";
  data.forEach((record) => {
    let row = document.createElement("tr");
    row.setAttribute("data-id", record.id);
    row.innerHTML = `
      <td data-label="Name">${record.name}</td>
      <td data-label="Email">${record.email}</td>
      <td data-label="Phone">${record.phone}</td>
      <td data-label="Action">
        <button class="edit" onclick="edit(${record.id})">Edit</button>
        <button class="delete" onclick="openModal(${record.id})">Delete</button>
      </td>`;
    tableData.appendChild(row);
  });
};
// show option
const showForm = () => {
  document.querySelector(".crud-form").style.display = "block";
  document.querySelector(".add").style.display = "none";
};

// Handle form submit (create+update)
const handleSubmit = (event) => {
  event.preventDefault();

  let id = document.querySelector(".id").value;
  let name = document.querySelector(".name").value.trim();
  let email = document.querySelector(".email").value.trim();
  let phone = document.querySelector(".phone").value.trim();

  let message = document.querySelector("#message");

  //email and phone validation
  let regEmail = /^[a-zA-Z0-9._]{5,}@[a-zA-Z]{5,}[.]{1}[a-zA-Z]{3}$/;
  let regPhone = /^(98|97)[0-9]{8}$/;

  if (!regEmail.test(email)) {
    message.innerHTML = "Invalid Email format. Enter a valid Email address.";
    return;
  }
  if (!regPhone.test(phone)) {
    message.innerHTML = "Invalid Phone Number format.";
    return;
  }

  //check duplicate values
  if (!id) {
    if (data.some((record) => record.name === name && record.id != id)) {
      message.innerText = "Name already exists.";
      return;
    }
    if (data.some((record) => record.email === email && record.id != id)) {
      message.innerText = "Email already exists.";
      return;
    }
    if (data.some((record) => record.phone === phone && record.id != id)) {
      message.innerText = "Phone already exists.";
      return;
    }
  }
  message.innerHTML = "";

  if (id) {
    // update
    let index = data.findIndex((record) => record.id == id);
    data[index] = { id: parseInt(id), name, email, phone };
    localStorage.setItem("object", JSON.stringify(data));

    // update row in table
    let row = document.querySelector(`tr[data-id="${id}"]`);
    if (row) {
      row.innerHTML = `
        <td data-label="Name">${name}</td>
        <td data-label="Email">${email}</td>
        <td data-label="Phone">${phone}</td>
        <td data-label="Action">
          <button class="edit" onclick="edit(${id})">Edit</button>
          <button class="delete" onclick="openModal(${id})">Delete</button>
        </td>`;
      row.classList.add("new-row"); // animate updated row
      setTimeout(() => row.classList.remove("new-row"), 500);
    }
  } else {
    // create
    let newId = data.length ? data[data.length - 1].id + 1 : 1;
    let newRecord = { id: newId, name, email, phone };
    data.push(newRecord);
    localStorage.setItem("object", JSON.stringify(data));

    let tableData = document.querySelector(".data-table");
    let newRow = document.createElement("tr");
    newRow.setAttribute("data-id", newId);
    newRow.classList.add("new-row");
    newRow.innerHTML = `
      <td data-label="Name">${name}</td>
      <td data-label="Email">${email}</td>
      <td data-label="Phone">${phone}</td>
      <td data-label="Action">
        <button class="edit" onclick="edit(${newId})">Edit</button>
        <button class="delete" onclick="openModal(${newId})">Delete</button>
      </td>`;
    tableData.appendChild(newRow);
  }

  document.querySelector(".crud-form").reset();
  document.querySelector(".crud-form").style.display = "none";
  document.querySelector(".add").style.display = "block";
  // readAll();
};

//Edit option
const edit = (id) => {
  showForm();
  let obj = data.find((record) => record.id === id);
  document.querySelector(".id").value = obj.id;
  document.querySelector(".name").value = obj.name;
  document.querySelector(".email").value = obj.email;
  document.querySelector(".phone").value = obj.phone;
};

//delete
const openModal = (id) => {
  deleteId = id;
  document.getElementById("deleteModal").style.display = "flex";
};
const closeModal = () => {
  deleteId = null;
  document.getElementById("deleteModal").style.display = "none";
};
const confirmDelete = () => {
  if (deleteId !== null) {
    data = data.filter((record) => record.id !== deleteId);
    localStorage.setItem("object", JSON.stringify(data));

    let row = document.querySelector(`tr[data-id="${deleteId}"]`);
    if (row) {
      row.classList.add("fade-out");
      row.addEventListener("animationend", () => {
        row.remove();
      });
    }
  }
  closeModal();
};
