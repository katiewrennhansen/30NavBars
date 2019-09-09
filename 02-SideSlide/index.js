const toggleBtn = document.querySelector('.toggle-button');
const collapse = document.querySelector('.collapse-content');

toggleBtn.addEventListener('click', function(){
    toggleBtn.classList.toggle('cross');
    collapse.classList.toggle('toggle');

});