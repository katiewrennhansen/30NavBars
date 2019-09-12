const button = document.querySelector('button');
const collapseContent = document.querySelector('.collapse-content');

function toggleNav(){
    collapseContent.classList.toggle('show');
}

function checkWindowWidth(){
    if (window.innerWidth > 1200) {
        collapseContent.classList.remove('show');
    }
    if (window.innerWidth < 1200) {
        collapseContent.style.transition = 'none';
    }
}


button.addEventListener('click', toggleNav);
window.onresize = checkWindowWidth;