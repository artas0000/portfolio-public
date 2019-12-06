const back__button = document.getElementById('back');
const mobile__button = document.getElementById('mobile');
back__button.style.display = 'block';
back__button.onclick = () => {
    window.location.href = '../../../index.html';
};

mobile__button.onclick = () => {
    window.location.href = './mobile_index.html';

};

