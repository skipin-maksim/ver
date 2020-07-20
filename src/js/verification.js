import dataUsers from '../bd-json/bd-users.json';
import refs from './refs';
import toastr from 'toastr';
import { spinnerOn } from './spinner';

export { checkVerification, findLoginUser, addDesabledClassName };

const promiseLogin = new Promise((resolve, reject) => {
  resolve(dataUsers);
});

/*
  comment получает логин, ищет его в БД 
 */
function checkVerification(e) {
  event.preventDefault();

  const login = refs.inputLogin.value.toLowerCase();

  promiseLogin
    .then(res => findLoginUser(res))
    .then(boolean => {
      if (boolean) {
        spinnerOn();
        refs.inputLogin.desabled;
        refs.inputPassword.desabled;

        setTimeout(() => {
          addDesabledClassName();

          refs.inputLogin.value = '';
          refs.inputPassword.value = '';
        }, 1500);

        localStorage.setItem('userNameOnline', `${login}`);
      } else {
        toastr.error('Не верный логин или пароль', 'Ошибка');
      }
    })
    .catch(error => {
      console.log(error);
    });
}

/*
  comment получает логин и пароль и сопоставляет введенные данные с БД
 */
function findLoginUser(arr) {
  const login = refs.inputLogin.value.toLowerCase();
  const password = refs.inputPassword.value;

  let isLoginOk = false;
  let isPasswordOk = false;

  arr.find(elem => {
    refs.fullUserName.textContent = elem.fullName;
    return elem.name === login ? (isLoginOk = true) : isLoginOk;
  });

  arr.find(elem => {
    return elem.password === password ? (isPasswordOk = true) : isPasswordOk;
  });

  return isLoginOk && isPasswordOk ? true : false;
}

function addDesabledClassName() {
  refs.loginWindow.classList.add('desabled');
}
