import { addUser, getUsers, getUsersFromServer } from "./userService.js";

export const addUserForm = document.querySelector("#addUserForm");
const usersTable = document.querySelector("#usersTable");
export const refreshButton = document.querySelector("#refreshButton");
export const submitUser = async (event) => {
  event.preventDefault();
  const user = {
    email: event.target.email.value,
    first_name: event.target.first_name.value,
    last_name: event.target.last_name.value,
    birthday: event.target.birthday.value,
  };
  await addUser(user);
  event.target.reset();
  await renderUsers();
};

export const renderUsers = async () => {
  usersTable.innerHTML = "";
  const users = await getUsers();
  const thead = document.createElement("thead");
  const headers = ["Email", "First Name", "Last Name", "Birthday"];
  const tr = document.createElement("tr");
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  usersTable.appendChild(thead);
  users.forEach((user) => {
    const row = document.createElement("tr");
    const email = document.createElement("td");
    const first_name = document.createElement("td");
    const last_name = document.createElement("td");
    const birthday = document.createElement("td");
    email.textContent = user.email;
    first_name.textContent = user.first_name;
    last_name.textContent = user.last_name;
    birthday.textContent = user.birthday;
    row.appendChild(email);
    row.appendChild(first_name);
    row.appendChild(last_name);
    row.appendChild(birthday);
    usersTable.appendChild(row);
  });
};

export const refreshButtonClick = async () => {
  const users = await getUsersFromServer();
  localStorage.setItem("users", JSON.stringify(users));
  await renderUsers();
}
