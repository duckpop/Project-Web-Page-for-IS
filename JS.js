// setup
document.addEventListener("DOMContentLoaded", function () {
    var cookieVal = getCookieValue("darkMode")

    if(cookieVal === null) {
        var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDark) {
            document.cookie = "darkMode=true; path=/; max-age=31536000"
            cookieVal = "true"
        } else {
            document.cookie = "darkMode=false; path=/; max-age=31536000"
            cookieVal = "false"
        }
    }

    if(cookieVal === "true"){
        changeThemeCokkie()
    }
});

function getCookieValue(name) {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}

// functions
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

function changeThemeCokkie(){
    var elements = document.getElementsByClassName("themeChangeNormal")
    for (var i = 0; i < elements.length; i++){
        elements[i].classList.toggle("TCN")
    }

    var elementsEnd = document.getElementsByClassName("themeChangeEnd")
    for (var i = 0; i < elementsEnd.length; i++){
        elementsEnd[i].classList.toggle("TCE")
    }

    var projects = document.getElementsByClassName("container-wrapper")

    for (var i = 0; i < projects.length; i++){
        projects[i].classList.toggle("TCN")
    }
}

//
function changetheme(){
    var elements = document.getElementsByClassName("themeChangeNormal")
    for (var i = 0; i < elements.length; i++){
        elements[i].classList.toggle("TCN")
    }

    var elementsEnd = document.getElementsByClassName("themeChangeEnd")
    for (var i = 0; i < elementsEnd.length; i++){
        elementsEnd[i].classList.toggle("TCE")
    }

    var projects = document.getElementsByClassName("container-wrapper")

    for (var i = 0; i < projects.length; i++){
        projects[i].classList.toggle("TCN")
    }

    var cookieVal = getCookieValue("darkMode")

    if (cookieVal === "true"){
        document.cookie = "darkMode=false; path=/; max-age=31536000"
    }else{
        document.cookie = "darkMode=true; path=/; max-age=31536000"
    }
}