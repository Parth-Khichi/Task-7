/* ========================================
   SELECT ELEMENTS
======================================== */

const menuToggle =
    document.getElementById("menuToggle");

const mobileMenu =
    document.getElementById("mobileMenu");


/* ========================================
   OPEN / CLOSE MOBILE MENU
======================================== */

menuToggle.addEventListener("click", function () {

    const isOpen =
        mobileMenu.classList.toggle("show");


    /* Hamburger animation */

    menuToggle.classList.toggle(
        "open",
        isOpen
    );


    /* Accessibility */

    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );


    menuToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Close menu"
            : "Open menu"
    );

});


/* ========================================
   CLOSE MENU WHEN LINK IS CLICKED
======================================== */

const mobileLinks =
    mobileMenu.querySelectorAll("a");


mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("show");

        menuToggle.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        menuToggle.setAttribute(
            "aria-label",
            "Open menu"
        );

    });

});


/* ========================================
   CLOSE MENU WHEN SCREEN BECOMES DESKTOP
======================================== */

window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {

        mobileMenu.classList.remove("show");

        menuToggle.classList.remove("open");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});


/* ========================================
   ACTIVE NAVIGATION
======================================== */

const allLinks =
    document.querySelectorAll(
        ".nav-links a, .mobile-menu a"
    );


allLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        allLinks.forEach(function (item) {
            item.classList.remove("active");
        });


        const target =
            link.getAttribute("href");


        document
            .querySelectorAll(
                `[href="${target}"]`
            )
            .forEach(function (item) {

                item.classList.add("active");

            });

    });

});
