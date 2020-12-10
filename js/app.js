const buttonEl = document.getElementById('addCommentButton');
const inputEl = document.getElementById('comments-input');
const ulEl = document.getElementById('comments-ul');

// console.log(ulEl);

// console.dir(inputEl);

buttonEl.addEventListener('click', function() {
    const inputVal = inputEl.value;
    
    const liEl = document.createElement('li');
    liEl.textContent = inputVal;
    ulEl.appendChild(liEl);

    console.dir(liEl);
});

ulEl.addEventListener('click', function(event) {
    if (event.target.matches('li')) {
        event.target.remove();
    }
});