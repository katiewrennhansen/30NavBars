const button = document.querySelector('button');
const collapseContent = document.querySelector('.collapse-content');
const collapseShow = document.querySelector('.collapse-content.show');



function toggleNav(){
    collapseContent.classList.toggle('show');
}

function checkWindowWidth(){
    if (window.innerWidth > 1200) {
        collapseContent.classList.remove('show');
    }
}


button.addEventListener('click', toggleNav);
window.onresize = checkWindowWidth;