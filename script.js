let root = document.documentElement;
let lightMode = document.getElementById("lightBtn");
let darkMode = document.getElementById("darkBtn");
const myAudio1 = new Audio("assets/hover-effect-dich.mp3")
const myAudio2 = new Audio("assets/click-1-effect-dich.mp3")



let themes = {
    dark: {
        "--brand": "#F60900",
        "--bg-1": "#101010",
        "--bg-2": "#1E1E1E",
        "--color-1": "#ddd9cd",
        "--color-2": "#a6a096",
        "--border-color": "#ffffff0c"
    },
    light: {
        "--brand": "#F60900",
        "--bg-1": "#efeadc",
        "--bg-2": "#eae2d2",
        "--color-1": "#353430",
        "--color-2": "#47453f",
        "--border-color": "#0000000c"
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
    myAudio1.play();


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





