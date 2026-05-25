let root = document.documentElement;
let lightMode = document.getElementById("lightBtn");
let darkMode = document.getElementById("darkBtn");
const myAudio1 = new Audio("assets/hover-effect-dich.mp3");
const myAudio2 = new Audio("assets/click-1-effect-dich.mp3");
const myAudio3 = new Audio("assets/fish-reel-in.mp3");




let themes = {
    dark: {
        "--brand": "#f60900",
        "--brand-2": "#940200",
        "--bg-1": "#101010",
        "--bg-2": "#1E1E1E",
        "--color-1": "#e2e2e2",
        "--color-2": "#aeaeae",
        "--border-color": "#ffffff11"
    },
    light: {
        "--brand": "#f60900",
        "--brand-2": "#940200",
        "--bg-1": "#f6f6f6",
        "--bg-2": "#eeeeee",
        "--color-1": "#252323",
        "--color-2": "#4d4d4d",
        "--border-color": "#0000000f"
    },
};

function applyTheme(name) {

    let theme = themes[name];

    for (let key in theme) {
        root.style.setProperty(key, theme[key]);

    };

}



function setTheme(mode) {
    if (mode === "system") {
        let isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;


        if (isDark) {
            applyTheme("dark");


        } else {
            applyTheme("light");
        }

    }
    else {
        applyTheme("mode");
    }
}

setTheme("system");



lightMode.addEventListener("click", () => {
    applyTheme("light");
    lightMode.classList.add("active");
    myAudio2.play();
    setTimeout(() => {
        darkMode.classList.remove("active");


    }, 500);
});

darkMode.addEventListener("click", () => {
    applyTheme("dark");
    darkMode.classList.add("active");
    myAudio2.play();

    setTimeout(() => {
        lightMode.classList.remove("active");

    }, 500);

});


const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const mobMenu = document.getElementById("mob-menu")



menuOpen.addEventListener("click", () => {
    mobMenu.classList.toggle("open-menu");
    myAudio3.play();


});

menuClose.addEventListener("click", () => {
    mobMenu.classList.remove("open-menu");
    myAudio2.play();
})





const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("fadeUp");
        }

        else {

            entry.target.classList.remove("fadeUp");

        }

    });
}, { threshold: 0.40 });

const aboutElements = document.querySelectorAll(".mob-menu-item");

aboutElements.forEach(el => {
    observer.observe(el);
})





// sound to menu

const menuItems = document.querySelectorAll(".menu-item");
const mobmenuItems = document.querySelectorAll(".mob-menu-item");

menuItems.forEach((i) => {



    const handleMouseEnter = function () {
        myAudio1.play();
    };



    i.addEventListener("mouseenter", handleMouseEnter);
    


})

