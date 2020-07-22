// import toastr from 'toastr';
// import debounce from 'lodash.debounce';

import refs from './js/refs';
import dataUsers from './bd-json/bd-users.json';
import { addDisabledClassName } from './js/verification';

import './js/toaster-settings';
import './js/handlers';

import './css/styles.css';
import 'toastr/build/toastr.css';

/**
 * Проверяет LocalStorage на наличие Пользователя
 */
function getUserOfLocalStorage() {
  const localUser = localStorage.getItem('userNameOnline');

  dataUsers.find(elem => {
    if (elem.name === localUser) {
      addDisabledClassName();
      refs.fullUserName.textContent = elem.fullName;
    }
  });
}

getUserOfLocalStorage();
