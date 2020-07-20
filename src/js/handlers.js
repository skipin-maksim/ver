import refs from './refs';
import { checkVerification } from './verification';

refs.verificationBtn.addEventListener('click', checkVerification);
refs.exitBtn.addEventListener('click', exitOfProgram);

function exitOfProgram() {
  refs.loginWindow.classList.remove('desabled');
  refs.spinner.classList.add('desabled');
  localStorage.removeItem('userNameOnline');
}
