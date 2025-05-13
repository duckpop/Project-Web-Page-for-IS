var NavLinks = document.querySelector('.NavBarLinks')
var DropDown = document.querySelector('.DropDown')

if (DropDown && NavLinks) {
    DropDown.addEventListener('click', () => {
        NavLinks.classList.toggle('show');
    });
}

//making divs act like links for the project page

function link(element){
    const location = element.getAttribute('data-location')
    const locationEnd = 'projects/' +location + '.html'
    if(locationEnd){
        window.location.href = locationEnd
    }else {
        console.log("no location found")
    }
}

//