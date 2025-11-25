document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("scrollTopBtn");
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    if (btn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                btn.classList.add("show");
                btn.classList.remove("hide");
            } else {
                btn.classList.add("hide");
                setTimeout(() => btn.classList.remove("show"), 200);
            }
        });

        btn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    const closeMenu = () => {
        if (!navToggle || !navMenu) return;
        navToggle.checked = false;
        navToggle.setAttribute("aria-expanded", "false");
        navMenu.classList.remove("open");
        document.body.classList.remove("nav-open");
    };

    const toggleMenu = () => {
        if (!navToggle || !navMenu) return;
        const shouldOpen = navToggle.checked && window.innerWidth <= 768;
        navMenu.classList.toggle("open", shouldOpen);
        document.body.classList.toggle("nav-open", shouldOpen);
        navToggle.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
        if (!shouldOpen) {
            navToggle.checked = false;
        }
    };

    if (navToggle) {
        navToggle.addEventListener("change", toggleMenu);
    }

    if (navMenu) {
        navMenu.querySelectorAll(".nav-link").forEach(link => {
            link.addEventListener("click", () => {
                closeMenu();
            });
        });
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
            if (navMenu) {
                navMenu.classList.remove("open");
            }
        }
    });
});
