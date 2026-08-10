/* =================================
CLOCK
================================= */

function updateClock() {

```
const clock = document.getElementById("clock");

const now = new Date();

const time = now.toLocaleTimeString(
    "en-US",
    {
        hour12: false
    }
);

clock.textContent = time;
```

}

updateClock();

setInterval(updateClock, 1000);

/* =================================
FOOTER YEAR
================================= */

document.getElementById("year").textContent =
new Date().getFullYear();

/* =================================
DESKTOP WINDOWS
================================= */

const directoryCards =
document.querySelectorAll(".directory-card");

const windows =
document.querySelectorAll(".desktop-window");

const closeButtons =
document.querySelectorAll(".close-window");

directoryCards.forEach(card => {

```
card.addEventListener("click", () => {

    const windowId =
        card.dataset.window;

    const targetWindow =
        document.getElementById(windowId);

    windows.forEach(windowElement => {

        windowElement.classList.remove("active");

    });

    targetWindow.classList.add("active");

    bringToFront(targetWindow);

});
```

});

closeButtons.forEach(button => {

```
button.addEventListener("click", () => {

    const windowElement =
        button.closest(".desktop-window");

    windowElement.classList.remove("active");

});
```

});

/* =================================
WINDOW Z-INDEX
================================= */

let highestZIndex = 300;

function bringToFront(windowElement) {

```
highestZIndex++;

windowElement.style.zIndex =
    highestZIndex;
```

}

/* =================================
DRAGGABLE WINDOWS
================================= */

windows.forEach(windowElement => {

```
const titlebar =
    windowElement.querySelector(".window-titlebar");

let isDragging = false;

let startX = 0;
let startY = 0;

let initialLeft = 0;
let initialTop = 0;


titlebar.addEventListener(
    "mousedown",
    event => {

        if (
            event.target.classList.contains(
                "close-window"
            )
        ) {
            return;
        }

        isDragging = true;

        bringToFront(windowElement);

        const rect =
            windowElement.getBoundingClientRect();

        startX = event.clientX;
        startY = event.clientY;

        initialLeft = rect.left;
        initialTop = rect.top;

        windowElement.style.left =
            rect.left + "px";

        windowElement.style.top =
            rect.top + "px";

        windowElement.style.transform =
            "none";

    }
);


document.addEventListener(
    "mousemove",
    event => {

        if (!isDragging) {
            return;
        }

        const deltaX =
            event.clientX - startX;

        const deltaY =
            event.clientY - startY;

        windowElement.style.left =
            initialLeft + deltaX + "px";

        windowElement.style.top =
            initialTop + deltaY + "px";

    }
);


document.addEventListener(
    "mouseup",
    () => {

        isDragging = false;

    }
);


windowElement.addEventListener(
    "mousedown",
    () => {

        bringToFront(windowElement);

    }
);
```

});

/* =================================
INTERACTIVE TERMINAL
================================= */

const terminalInput =
document.getElementById("terminal-input");

const terminalOutput =
document.getElementById("terminal-output");

const commands = {

```
help: `
    <p>Available commands:</p>
    <p>
    help — display commands<br>
    whoami — learn about Drew<br>
    projects — list projects<br>
    currently — current status<br>
    politics — political interests<br>
    skills — technical skills<br>
    clear — clear terminal<br>
    secret — ???
    </p>
`,

whoami: `
    <p class="terminal-welcome">
        Drew Barranco Landa
    </p>

    <p>
        Politics × Computer Science
    </p>

    <p>
        Building at the intersection
        of technology, society, and policy.
    </p>
`,

projects: `
    <p>
        PROJECT_DIRECTORY/
    </p>

    <p>
        ├── TheMajorly.app<br>
        ├── NGramModel.java<br>
        ├── LLM_StoryTeller.exe<br>
        ├── Citrus_Analysis.mat<br>
        └── AI_Meme_Finder.py
    </p>
`,

currently: `
    <p>
        READING → political theory<br>
        BUILDING → TheMajorly<br>
        LEARNING → computer systems<br>
        WRITING → hot takes<br>
        RUNNING → on matcha
    </p>
`,

politics: `
    <p>
        Interested in:
    </p>

    <p>
        AI governance<br>
        technology policy<br>
        privacy<br>
        public policy<br>
        political theory<br>
        law
    </p>
`,

skills: `
    <p>
        LANGUAGES/
    </p>

    <p>
        Java<br>
        JavaScript<br>
        C<br>
        SQL<br>
        HTML/CSS
    </p>
`,

secret: `
    <p class="terminal-welcome">
        you found the secret.
    </p>

    <p>
        unfortunately there is no prize.
    </p>

    <p>
        except this:
        ★ keep building weird things ★
    </p>
`
```

};

terminalInput.addEventListener(
"keydown",
event => {

```
    if (event.key !== "Enter") {
        return;
    }

    const command =
        terminalInput.value
            .trim()
            .toLowerCase();


    if (command === "") {
        return;
    }


    terminalOutput.innerHTML += `
        <p>
            <span style="color:#84d78f">
                drew@internet:~$
            </span>
            ${command}
        </p>
    `;


    if (command === "clear") {

        terminalOutput.innerHTML = "";

    }

    else if (commands[command]) {

        terminalOutput.innerHTML +=
            commands[command];

    }

    else {

        terminalOutput.innerHTML += `
            <p>
                command not found:
                ${command}
            </p>

            <p>
                type "help"
            </p>
        `;

    }


    terminalInput.value = "";

    terminalOutput.scrollTop =
        terminalOutput.scrollHeight;

}
```

);

/* =================================
ESC CLOSES WINDOWS
================================= */

document.addEventListener(
"keydown",
event => {

```
    if (event.key === "Escape") {

        windows.forEach(windowElement => {

            windowElement.classList.remove("active");

        });

    }

}
```

);

/* =================================
RANDOM TERMINAL STATUS
================================= */

const statusMessages = [

```
"thinking too much...",
"compiling opinions...",
"reading political theory...",
"debugging reality...",
"probably drinking matcha...",
"running on questionable sleep...",
"asking why capitalism did this..."
```

];

const typingLine =
document.querySelector(".typing-line");

setInterval(() => {

```
if (!typingLine) {
    return;
}

const randomMessage =
    statusMessages[
        Math.floor(
            Math.random() *
            statusMessages.length
        )
    ];

typingLine.textContent =
    randomMessage;
```

}, 4500);
