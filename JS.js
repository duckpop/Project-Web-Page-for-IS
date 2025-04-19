var TimeOut = null;
document.querySelector('.NavBarRight').addEventListener('mouseover', ()    => {
    clearTimeout(TimeOut)
    document.querySelector('.NavBarLinks').classList.add('show');
});
document.querySelector('.NavBarRight').addEventListener('mouseout', () => {
    TimeOut = setTimeout(() => {
        document.querySelector('.NavBarLinks').classList.remove('show');
    },150);
});