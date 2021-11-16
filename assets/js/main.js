document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.btn');
    const body = document.querySelector('body');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    let isDark = false;

    const changeBackground = (state) => {
        const colorBg = (state) ? '#040515' : '#fff';
        const colorBody = (state) ? '#afb5b9' : '#f0f7fb';
        body.style.backgroundColor = colorBg;
        main.style.backgroundColor = colorBody;
        footer.style.backgroundColor = colorBody;
    }

    btn.addEventListener('click', (event) => {
        isDark = (isDark) ? false : true;
        changeBackground(isDark);
    })
})