import refs from './refs';
import { checkVerification } from './verification';

refs.verificationBtn.addEventListener('click', checkVerification);
refs.exitBtn.addEventListener('click', exitOfProgram);

function exitOfProgram() {
  refs.loginWindow.classList.remove('disabled');
  refs.spinner.classList.add('disabled');
  localStorage.removeItem('userNameOnline');
}
