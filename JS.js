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

    changeThemeIcon()

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
function changeThemeIcon(){
    var cookieVal = getCookieValue("darkMode")
    var element = document.getElementById("themeControl")

    if(cookieVal === "true" && element.classList.contains("fa-moon-o")){
        element.classList.remove("fa-moon-o")
        element.classList.add("fa-sun-o")
    }
    else if(cookieVal === "false" && element.classList.contains("fa-sun-o")){
        element.classList.remove("fa-sun-o")
        element.classList.add("fa-moon-o")
    }

}

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

    changeThemeIcon()
}