import toastr from 'toastr';
import toastrSettings from './js/toaster-settings';
import handlers from './js/handlers';

import './css/styles.css';
import 'toastr/build/toastr.css';

// const debounce = require('lodash.debounce');

/*
comment
Проверяет LocalStorage на наличие Пользователя
*/
import refs from './js/refs';
import dataUsers from './bd-json/bd-users.json';
import { addDesabledClassName } from './js/verification';
function getUserOfLocalStorage() {
  const localUser = localStorage.getItem('userNameOnline');

  dataUsers.find(elem => {
    if (elem.name === localUser) {
      addDesabledClassName();
      refs.fullUserName.textContent = elem.fullName;
    }
  });
}

getUserOfLocalStorage();
