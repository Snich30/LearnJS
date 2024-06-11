document.addEventListener('click', function(event) {
  const clickedBtn = event.target.closest('.btn-below, .btn-below-code');
  
  if (clickedBtn) {
    const tasksList = clickedBtn.parentNode.querySelector('.tasks-list');

    if (tasksList.style.display === 'none') {
      tasksList.style.display = 'block';
    } else {
      tasksList.style.display = 'none';
    }
  }
});
