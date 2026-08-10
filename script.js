/* =========================================
   DREW PORTFOLIO
   script.js
========================================= */


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


/* =========================================
   INTERACTIVE TERMINAL
========================================= */

const terminalInput = document.getElementById("terminal-input");
const terminalOutput = document.getElementById("terminal-output");


const commands = {

    help: `
        <p class="terminal-welcome">
            AVAILABLE COMMANDS:
        </p>

        <p>
            <span class="green">whoami</span>
            — learn about Drew
        </p>

        <p>
            <span class="green">projects</span>
            — see what I've built
        </p>

        <p>
            <span class="green">writing</span>
            — read my thoughts
        </p>

        <p>
            <span class="green">leadership</span>
            — see what I'm involved in
        </p>

        <p>
            <span class="green">currently</span>
            — what I'm doing right now
        </p>

        <p>
            <span class="green">contact</span>
            — ways to reach me
        </p>

        <p>
            <span class="green">clear</span>
            — clear the terminal
        </p>
    `,


    whoami: `
        <p>
            Drew Barranco Landa.
        </p>

        <p>
            Politics
            <span class="orange-text">×</span>
            Computer Science.
        </p>

        <p>
            I like building things,
            writing about things,
            organizing things,
            and occasionally arguing
            about things.
        </p>
    `,


    projects: `
        <p class="terminal-welcome">
            PROJECTS/
        </p>

        <p>
            ├── TheMajorly
        </p>

        <p>
            ├── LLM Projects
        </p>

        <p>
            ├── Java + Systems
        </p>

        <p>
            └── Data + AI Experiments
        </p>
    `,


    writing: `
        <p class="terminal-welcome">
            WRITING/
        </p>

        <p>
            > political theory
        </p>

        <p>
            > capitalism
        </p>

        <p>
            > feminism
        </p>

        <p>
            > technology
        </p>

        <p>
            > AI + policy
        </p>

        <p>
            Status:
            <span class="orange-text">
                opinions still loading...
            </span>
        </p>
    `,


    leadership: `
        <p class="terminal-welcome">
            LEADERSHIP/
        </p>

        <p>
            [01] Vice President — Model United Nations
        </p>

        <p>
            [02] Vice President — ACM
        </p>

        <p>
            [03] ASUSF College of Arts & Sciences Representative
        </p>

        <p>
            [04] Director General — BAYMUN
        </p>
    `,


    currently: `
        <p class="terminal-welcome">
            CURRENTLY.LOG
        </p>

        <p>
            + studying computer science
        </p>

        <p>
            + reading political theory
        </p>

        <p>
            + building TheMajorly
        </p>

        <p>
            + writing hot takes
        </p>

        <p>
            + consuming questionable amounts of matcha
        </p>
    `,


    contact: `
        <p class="terminal-welcome">
            CONTACT/
        </p>

        <p>
            EMAIL:
            dgbarrancolanda@dons.usfca.edu
        </p>

        <p>
            LINKEDIN:
            linkedin.com/in/drew-barranco
        </p>

        <p>
            GITHUB:
            github.com/dgbarranco
        </p>
    `,


    about: `
        <p>
            Try typing:
        </p>

        <p>
            <span class="green">whoami</span>,
            <span class="green">projects</span>,
            or
            <span class="green">help</span>
        </p>
    `,


    matcha: `
        <p class="terminal-welcome">
            MATCHA DETECTED.
        </p>

        <p>
            caffeine levels: concerning
        </p>

        <p>
            productivity levels: unpredictable
        </p>
    `,


    capitalism: `
        <p>
            ERROR 418:
        </p>

        <p>
            <span class="orange-text">
                system currently questioning
                the economic system.
            </span>
        </p>
    `,


    patriarchy: `
        <p>
            Opening:
        </p>

        <p class="terminal-welcome">
            womb_envy_theory.exe
        </p>

        <p>
            Warning:
            this may start an argument.
        </p>
    `,


    coffee: `
        <p>
            ERROR:
        </p>

        <p>
            Wrong command.
        </p>

        <p class="terminal-welcome">
            Try: matcha
        </p>
    `
};


/* =========================================
   TERMINAL COMMAND HANDLER
========================================= */

function runTerminalCommand(command) {

    if (!terminalOutput) {
        return;
    }


    const cleanCommand = command
        .trim()
        .toLowerCase();


    if (cleanCommand === "") {
        return;
    }


    /* SHOW USER COMMAND */

    terminalOutput.innerHTML += `
        <p>
            <span class="green">
                drew@internet:~$
            </span>

            ${cleanCommand}
        </p>
    `;


    /* CLEAR TERMINAL */

    if (cleanCommand === "clear") {

        terminalOutput.innerHTML = `
            <p class="terminal-welcome">
                Terminal cleared.
            </p>
        `;

        return;
    }


    /* COMMAND FOUND */

    if (commands[cleanCommand]) {

        terminalOutput.innerHTML += commands[cleanCommand];

    }


    /* UNKNOWN COMMAND */

    else {

        terminalOutput.innerHTML += `
            <p>
                command not found:
                <span class="orange-text">
                    ${cleanCommand}
                </span>
            </p>

            <p>
                Type
                <span class="terminal-command">
                    help
                </span>
                for available commands.
            </p>
        `;

    }


    /* AUTO SCROLL */

    terminalOutput.scrollTop =
        terminalOutput.scrollHeight;

}


/* =========================================
   LISTEN FOR ENTER
========================================= */

if (terminalInput) {

    terminalInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                const command =
                    terminalInput.value;

                runTerminalCommand(command);

                terminalInput.value = "";

            }

        }
    );

}


/* =========================================
   PROJECT WINDOW
========================================= */

const directoryCards =
    document.querySelectorAll(
        "[data-window]"
    );


directoryCards.forEach(function (card) {

    card.addEventListener(
        "click",
        function () {

            const windowId =
                card.dataset.window;

            const targetWindow =
                document.getElementById(
                    windowId
                );


            if (targetWindow) {

                targetWindow.classList.add(
                    "active"
                );

            }

        }
    );

});


/* =========================================
   CLOSE WINDOWS
========================================= */

const closeButtons =
    document.querySelectorAll(
        ".close-window"
    );


closeButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const window =
                button.closest(
                    ".desktop-window"
                );


            if (window) {

                window.classList.remove(
                    "active"
                );

            }

        }
    );

});


/* =========================================
   CLOSE WINDOW WITH ESC
========================================= */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            const activeWindows =
                document.querySelectorAll(
                    ".desktop-window.active"
                );


            activeWindows.forEach(
                function (window) {

                    window.classList.remove(
                        "active"
                    );

                }
            );

        }

    }
);


/* =========================================
   DRAGGABLE WINDOWS
========================================= */

const desktopWindows =
    document.querySelectorAll(
        ".desktop-window"
    );


desktopWindows.forEach(function (window) {

    const titlebar =
        window.querySelector(
            ".window-titlebar"
        );


    if (!titlebar) {
        return;
    }


    let isDragging = false;

    let startX = 0;
    let startY = 0;

    let initialX = 0;
    let initialY = 0;


    titlebar.addEventListener(
        "mousedown",
        function (event) {

            /* Don't drag when closing */

            if (
                event.target.closest(
                    ".close-window"
                )
            ) {
                return;
            }


            isDragging = true;


            const rect =
                window.getBoundingClientRect();


            startX = event.clientX;

            startY = event.clientY;

            initialX = rect.left;

            initialY = rect.top;


            window.style.transform =
                "none";

            window.style.left =
                `${initialX}px`;

            window.style.top =
                `${initialY}px`;

        }
    );


    document.addEventListener(
        "mousemove",
        function (event) {

            if (!isDragging) {
                return;
            }


            const moveX =
                event.clientX - startX;

            const moveY =
                event.clientY - startY;


            window.style.left =
                `${initialX + moveX}px`;

            window.style.top =
                `${initialY + moveY}px`;

        }
    );


    document.addEventListener(
        "mouseup",
        function () {

            isDragging = false;

        }
    );

});


/* =========================================
   SMOOTH ACTIVE NAVIGATION
========================================= */

const navLinks =
    document.querySelectorAll(
        ".main-nav a"
    );


navLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            navLinks.forEach(
                function (navLink) {

                    navLink.classList.remove(
                        "nav-active"
                    );

                }
            );


            link.classList.add(
                "nav-active"
            );

        }
    );

});


/* =========================================
   ACTIVE SECTION OBSERVER
========================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(
            function (entry) {

                if (
                    entry.isIntersecting
                ) {

                    const sectionId =
                        entry.target.id;


                    navLinks.forEach(
                        function (link) {

                            const href =
                                link.getAttribute(
                                    "href"
                                );


                            if (
                                href ===
                                `#${sectionId}`
                            ) {

                                navLinks.forEach(
                                    function (navLink) {

                                        navLink.classList.remove(
                                            "nav-active"
                                        );

                                    }
                                );


                                link.classList.add(
                                    "nav-active"
                                );

                            }

                        }
                    );

                }

            }
        );

    },

    {

        rootMargin:
            "-30% 0px -60% 0px"

    }
);


sections.forEach(function (section) {

    observer.observe(section);

});


/* =========================================
   SMALL FUN HERO INTERACTION
========================================= */

const doodle =
    document.querySelector(
        ".doodle-circle"
    );


if (doodle) {

    doodle.addEventListener(
        "click",
        function () {

            doodle.style.transform =
                "rotate(350deg) scale(1.1)";


            setTimeout(
                function () {

                    doodle.style.transform =
                        "rotate(-10deg) scale(1)";

                },
                300
            );

        }
    );

}


/* =========================================
   CONSOLE EASTER EGG
========================================= */

console.log(
    "%cHello, internet.",
    `
        color: #FF6719;
        font-size: 24px;
        font-weight: bold;
    `
);


console.log(
    "%cYou found the source code. Nice.",
    `
        color: #1F5F8B;
        font-size: 14px;
    `
);
