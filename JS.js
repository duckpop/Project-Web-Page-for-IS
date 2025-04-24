var TimeOut = null;
var NavRight = document.querySelector('.NavBarRight')
var NavLinks = document.querySelector('.NavBarLinks')
var DropDown = document.querySelector('.DropDown')

// NavRight.addEventListener('mouseover', ()    => {
//     clearTimeout(TimeOut)
//     NavLinks.classList.add('show');
// });
// NavRight.addEventListener('mouseout', () => {
//     TimeOut = setTimeout(() => {
//         NavLinks.classList.remove('show');
//     },150);
// });
DropDown.addEventListener('click', () =>{
    NavLinks.classList.toggle('show')
})