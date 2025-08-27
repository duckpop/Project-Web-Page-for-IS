# Project for one of my subject: Internet Programing from the Client side
### Theme: "Intelligent System Lab Page"

---
# How to add more Projects

Firstly you choose from one of the few provided template pages (if you wish you can modify one or bring your own), using said template you rename it to fit the title of the project, after which you create a new folder sharing the same name as the project html itself, inside that folder you put the html and all needed images/videos/gifs it might need.

After doing so, you need to add that Project to the list, by going into the Projects.html file, there you will find the code for the main body starting on line 48.

the first thing you will find is the quick scroll menu, containing years to quickly scroll to a specific educational year of project (note this menu only appears on pc), you only need to add here once a year.

```html
<div class="year-links themeChangeNormal">
            <ul class="ulist-links themeChangeNormal">
                <li>
                    <h2 class="prevent-select">ГОДИНИ</h2>
                </li>
                <li>
                    <a class="prevent-select" href="#2025-2026">2025-2026</a>
                    <div></div>
                </li>
                <li>
                    <a class="prevent-select" href="#2024-2025">2024-2025</a>
                    <div></div>
                </li>
                <li>
                    <a class="prevent-select" href="#2023-2024">2023-2024</a>
                    <div></div>
                </li>
                <li>
                    <a class="prevent-select" href="#2022-2023">2022-2023</a>
                    <div></div>
                </li>
                <li>
                    <a class="prevent-select" href="#2021-2022">2021-2022</a>
                    <div></div>
                </li>
                <li>
                    <a class="prevent-select" href="#2020-2021">2020-2021</a>
                    <div></div>
                </li>
                <li>
                    <a class="prevent-select" href="#2019-2020">2019-2020</a>
                    <div></div>
                </li>
            </ul>
        </div>
```

to add more years you simply copy this:

```html
<li>
    <a class="prevent-select" href="#2025-2026">2025-2026</a>
    <div></div>
</li>
```

1. the first line makes it automatically scroll to the selected year, just make sure the **href='#????-????'** matches the years set as text in the hyperlink
2. the second line is only there so some site animations can run and make it more dynamic, if you wish you can exclude this

after follows the main project list, to better explain this I am going to take a sample from the year 2025-2026.

```html
<h1 id="2025-2026">2025-2026</h1>

<div class="segment themeChangeProjects">
    <div class="container-wrapper" data-location="project-01" onclick="link(this)">
        <div class="image-container" style="background-image: url(projects/project-01/maintenance-2422171_1280.jpg)"></div>
        <h2>PROJECT #1 NAME</h2>
    </div>
    
    <div class="container-wrapper" data-location="project-02" onclick="link(this)">
        <div class="image-container" style="background-image: url(projects/project-02/under-construction-4011849_1280.png)"></div>
        <h2>PROJECT #2 NAME</h2>
    </div>

    <div class="container-wrapper" data-location="project-03" onclick="link(this)">
        <div class="image-container" style="background-image: url(projects/project-03/under-construction-2891888_1280.jpg)"></div>
        <h2>PROJECT #3 NAME</h2>
    </div>

    <div class="container-wrapper" data-location="project-02" onclick="link(this)">
        <div class="image-container" style="background-image: url(projects/project-02/under-construction-4011849_1280.png)"></div>
        <h2>PROJECT #2 NAME</h2>
    </div>

    <div class="container-wrapper" data-location="project-03" onclick="link(this)">
        <div class="image-container" style="background-image: url(projects/project-03/under-construction-2891888_1280.jpg)"></div>
        <h2>PROJECT #3 NAME</h2>
    </div>
</div>
```
We can see this segment that repeats for every year interval, contains a h1 with the text being the educational year of that section, note that the h1 shares an id with the same contents as its text.
We can also see it contains a div of divs, that outermost div being the container for each link to each project. all this code has to be copied each year (without the individual divs, they aren't needed)

now the part where you add a project:

```html
<div class="container-wrapper" data-location="project-01" onclick="link(this)">
    <div class="image-container" style="background-image: url(projects/project-01/maintenance-2422171_1280.jpg)"></div>
    <h2>PROJECT #1 NAME</h2>
</div>
```
we have three lines to each project link:
1. the first line is essentially the link that transfers the user, for it to work you need to change the **data-location** text, to the same name you gave the folder/project html, the javascript in the background does the rest.
2. the second line is the image used to display on the page, simply link it to one of the images inside the folder you created by changing the text in the **url()**.
3. and lastly the final line is the project title that you can input by hand

# IMPORTANT

Inside this git repo I have added some temporary pages to show it off, please remove them and clean out the main area of the projects.html, so it looks like this:

```html
<div class="MainBody">
        <div class="year-links themeChangeNormal">
            <ul class="ulist-links themeChangeNormal">
                <li>
                    <h2 class="prevent-select">ГОДИНИ</h2>
                </li>
            </ul>
        </div>

        <div class="project-links themeChangeNormal">
            
        </div>
    </div>
```

here you can freely add both years and projects in said years freely