const checkBtns = document.querySelectorAll('.check-btn');

checkBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    const correctAnswer = this.getAttribute('data-correct');
    const radios = this.parentNode.querySelectorAll('input[type="radio"]');
    let selectedAnswer = '';

    radios.forEach(radio => {
      if (radio.checked) {
        selectedAnswer = radio.value;
      }
    });

    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');

    if (selectedAnswer === correctAnswer) {
      resultDiv.textContent = 'Правильно!';
      resultDiv.classList.add('correct');
    } else {
      resultDiv.textContent = 'Неправильно. Попробуйте ещё раз ';
      resultDiv.classList.add('incorrect');
    }

    const prevResult = this.parentNode.querySelector('.result');
    if (prevResult) {
      prevResult.remove();
    }
    this.parentNode.insertBefore(resultDiv, this.nextSibling);
  });
});
