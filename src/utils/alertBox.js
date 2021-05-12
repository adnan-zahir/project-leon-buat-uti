export default function alertBox(message) {
  const alertBox = document.getElementById('alertBox');
  alertBox.classList.add('active');
  alertBox.innerHTML = message;
  setTimeout(() => {
    alertBox.classList.remove('active');
    alertBox.innerHTML = '';
  }, 2000);
}
