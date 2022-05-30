export const getUsers = async () => {
  let users = localStorage.getItem("users");
  if (!users) {
    const url = "https://reqres.in/api/users?page=1";
    const response = await fetch(url);
    const json = await response.json();
    localStorage.setItem("users", JSON.stringify(json.data));
    return json.data;
  }
  return JSON.parse(users);
};

export const getUsersFromServer = async () => {
  const url = "https://reqres.in/api/users?page=1";
  const response = await fetch(url);
  const json = await response.json();
  return json.data;
};

export const addUser = async (user) => {
  const users = await getUsers();
  const id = users.length + 1;
  users.push({
    id,
    email: user.email,
    first_name: user.first_name,
    last_name: user.last_name,
    birthday: user.birthday,
  });
  localStorage.setItem("users", JSON.stringify(users));
};
