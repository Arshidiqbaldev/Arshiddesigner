let root = document.documentElement;
let lightMode = document.getElementById("lightBtn");
let darkMode = document.getElementById("darkBtn");



let themes = {
    dark: {
        "--brand": "#f60900",
        "--brand-2": "#940200",
        "--bg-1": "#161515",
        "--bg-2": "#1d1b1b",
        "--color-1": "#cecece",
        "--color-2": "#a0a0a0",
        "--border-color": "#262626"
    },
    light: {
        "--brand": "#f60900",
        "--brand-2": "#940200",
        "--bg-1": "#f7f0ef",
        "--bg-2": "#ebe2e2",
        "--color-1": "#252323",
        "--color-2": "#4d4d4d",
        "--border-color": "#dadada"
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
    setTimeout(() => {
        darkMode.classList.remove("active");


    }, 500);
});

darkMode.addEventListener("click", () => {
    applyTheme("dark");
    darkMode.classList.add("active");
    setTimeout(() => {
        lightMode.classList.remove("active");

    }, 500);

});


const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const mobMenu = document.getElementById("mob-menu")



menuOpen.addEventListener("click", () => {
    mobMenu.classList.toggle("open-menu");

});

menuClose.addEventListener("click", () => {
    mobMenu.classList.remove("open-menu");
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
}, { threshold: 0.50 });

const aboutElements = document.querySelectorAll(".mob-menu-item");

aboutElements.forEach(el => {
    observer.observe(el);
})




