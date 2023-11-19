document.addEventListener('DOMContentLoaded', () => {
  const texts = ['А вы подаёте большие надежды!', 'Не глядя вставляете код на свой сайт',
    'Где вы научились такому?', 'Ну ладно, не скромничайте', 'Ну же, скажите', 'На этом сайте? Да ну',
    'Ладно, давайте проверим что тут есть', 'Спускайтесь ниже на блок, до встречи'];
  let currentIndex = 0;

  const button = document.querySelector('.myButton');
  let intervalId;
  const updateText = () => {
    button.textContent = texts[currentIndex];

    currentIndex++;
    if (currentIndex === texts.length) {
      clearInterval(intervalId);
      currentIndex = 0;
      setTimeout(() => {
        intervalId = setInterval(updateText, 3500);
      }, 10000);
    }
  };

  intervalId = setInterval(updateText, 3500);

  clearInterval(intervalId);
  currentIndex = 0;
  intervalId = setInterval(updateText, 3500);
});


document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.myButton');

  button.addEventListener('click', () => {
    window.location.href = 'новая_страница.html';
  });
});


document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    const block = document.querySelector('.uc-scroll');
    const blockRect = block.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const windowMiddle = windowHeight / 2;

    if (blockRect.top <= windowMiddle && blockRect.bottom >= windowMiddle) {
      block.classList.add('active');
    } else {
      block.classList.remove('active');
    }
  });
});
