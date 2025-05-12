var NavLinks = document.querySelector('.NavBarLinks')
var DropDown = document.querySelector('.DropDown')

if (DropDown && NavLinks) {
    DropDown.addEventListener('click', () => {
        NavLinks.classList.toggle('show');
    });
}