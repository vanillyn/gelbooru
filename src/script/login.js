import { logUser } from "./user/logUser";
import { buildDropdown } from "./user/dropdown";


export function checkLogin() {
  fetch("/test/login.json")
    .then((response) => response.json())
    .then((data) => {
        if (data.user.loggedIn == true){
            logUser()
        }
    });
}
