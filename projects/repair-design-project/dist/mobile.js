const back__button = document.getElementById('back_button');
const desktop__button = document.getElementById('desktop');

back__button.onclick = () => {
    window.location.href = '../../../index.html';
};

desktop__button.onclick = () => {
    window.location.href = './index.html';
};
