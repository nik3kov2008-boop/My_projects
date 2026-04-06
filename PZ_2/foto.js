const img = document.querySelectorAll('.img');
const window_wow = document.getElementById('img-window');
const close = document.getElementById('close');
const choice_img = document.getElementById('choice-img');

const text1 = document.getElementById('text_for_1');
const text2 = document.getElementById('text_for_2');
const text3 = document.getElementById('text_for_3');

img.forEach((img, index) => {
    img.onclick = () => {
        window_wow.style.display = 'block';
        choice_img.src = img.src;

        text1.style.display = 'none';
        text2.style.display = 'none';
        text3.style.display = 'none';

        text1.classList.remove('active');
        text2.classList.remove('active');
        text3.classList.remove('active');

        if (index === 0) {
            text1.style.display = 'block';
            text1.classList.add('active');
        }
        if (index === 1) {
            text2.style.display = 'block';
            text2.classList.add('active');
        }
        if (index === 2) {
            text3.style.display = 'block';
            text3.classList.add('active');
        }

    setTimeout(() => {
            choice_img.classList.add('active');
            window_wow.classList.add('active');
        }, 10);
    }
});

close.onclick = () => {
    choice_img.classList.remove('active');
    window_wow.classList.remove('active');

     setTimeout(() => {
        window_wow.style.display = 'none';
    }, 400);
}


