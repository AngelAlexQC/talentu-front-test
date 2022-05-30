import {
  submitUser,
  addUserForm,
  renderUsers,
  refreshButton,
  refreshButtonClick,
} from "./selectors.js";

addUserForm.addEventListener("submit", submitUser);
refreshButton.addEventListener("click", refreshButtonClick);
renderUsers();
