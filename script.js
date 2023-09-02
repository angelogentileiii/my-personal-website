const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";

document.querySelector("body").appendChild(h2);

const google = "<a href=https://www.google.com.>google</a>";
const intro = document.createElement("p");
intro.innerHTML = "Hi, my name is Angelo. Let's hope this works. Click here for " + google + "."


document.querySelector("body").appendChild(intro);