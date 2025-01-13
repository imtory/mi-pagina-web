const noButton = document.getElementById('no');
const container = document.querySelector('.container');

noButton.addEventListener('mouseover', () => {
  const containerRect = container.getBoundingClientRect();
  const buttonRect = noButton.getBoundingClientRect();

  let newLeft, newTop;

  // Evitar que el botón se salga del contenedor
  do {
    newLeft = Math.random() * (containerRect.width - buttonRect.width);
    newTop = Math.random() * (containerRect.height - buttonRect.height);
  } while (
    newLeft >= buttonRect.left - containerRect.left - 50 &&
    newLeft <= buttonRect.right - containerRect.left + 50 &&
    newTop >= buttonRect.top - containerRect.top - 50 &&
    newTop <= buttonRect.bottom - containerRect.top + 50
  );

  noButton.style.left =  `${newLeft}px`;
  noButton.style.top =   `${newTop}px`;
});