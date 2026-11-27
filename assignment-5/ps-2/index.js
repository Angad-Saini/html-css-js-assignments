/* ---------- Q1: Save Student Name ---------- */
let input = document.getElementById("studentName");
let saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
    const name = input.value.trim();

    if (name === "") {
        message.textContent = "Please enter a student name.";
        return;
    }

    localStorage.setItem("studentName", name);
    input.value = "";

})

/* ---------- Q2: Retrieve Student Name ---------- */

const displayNameBtn = document.getElementById("displayNameBtn");
const nameHeading = document.getElementById("nameHeading");

displayNameBtn.addEventListener("click", () => {

    const name = localStorage.getItem("studentName");
    nameHeading.textContent = name ? name : "No Student name found.";
});

/* ---------- Q3: Save and Display Email ---------- */

const emailInput = document.getElementById("emailInput");
const saveEmailBtn = document.getElementById("saveEmailBtn");
const emailOutput = document.getElementById("emailOutput");

function showEmail() {
    const email = localStorage.getItem("email");
    emailOutput.textContent = email ? "Stored Email: " + email : "";
}

saveEmailBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (email === "" || !email.includes("@")) { 
        console.log("Please enter a valid email address.");
        console.log("error");
        return;
    }
    
    localStorage.setItem("email", email);
    emailInput.value = "";
    showEmail();
});

showEmail();

/* ---------- Q4: Remove Stored Data ---------- */
const usernameInput = document.getElementById("usernameInput");
const saveUserBtn = document.getElementById("saveUserBtn");
const removeUserBtn = document.getElementById("removeUserBtn");
const usernameOutput = document.getElementById("usernameOutput");

function showUsername() {
    const user = localStorage.getItem("username");
    usernameOutput.textContent = user ? "Stored Username: " + user : "No username stored.";
}

saveUserBtn.addEventListener("click", () => {
    const user = usernameInput.value.trim();

    if (user === "") {
        console.log("Please enter a username.");
        console.log("error");
        return;
    }

    localStorage.setItem("username", user);
    usernameInput.value = "";
    showUsername();
});

removeUserBtn.addEventListener("click", () => {
    localStorage.removeItem("username");
    console.log("Username removed successfully.");
    console.log("success");
    showUsername();
});

showUsername();

/* ---------- Q5: Save and Retrieve City Name ---------- */

const cityInput = document.getElementById("cityInput");
const saveCityBtn = document.getElementById("saveCityBtn");
const displayCityBtn = document.getElementById("displayCityBtn");
const cityOutput = document.getElementById("cityOutput");

saveCityBtn.addEventListener("click", () => {
    const city = cityInput.value.trim();

    if (city === "") {
        console.log("Please enter a city name.");
        console.log("error");
        return;
    }

    localStorage.setItem("city", city);
    console.log("City saved successfully.");
    console.log("success");
    cityInput.value = "";
});

displayCityBtn.addEventListener("click", () => {
    const city = localStorage.getItem("city");
    cityOutput.textContent = city ? "City: " + city : "No city found.";
});