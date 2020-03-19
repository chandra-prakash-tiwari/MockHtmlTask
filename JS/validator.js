var abc = "female";
gender(abc)

function namevalidator() {
    var name = document.forms["contact"]["username"].value;
    let y = document.getElementById("name-required");
    if (name.length == 0) {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

function emailvalidator() {
    let x = document.getElementById("email-required");
    var email = document.forms["contact"]["email"].value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) && email.length != 0) {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function orgvalidator() {
    let z = document.getElementById("org-required");
    var organisation = document.forms["contact"]["organisation"].value;
    if (organisation.length != 0) {
        z.style.display = "none";
    } else {
        z.style.display = "block";
    }
}

function validator() {
    var name = namevalidator(document.forms["contact"]["name"].value);
    var email = emailvalidator(document.forms["contact"]["email"].value);
    var organisation = orgvalidator(document.forms["contact"]["organisation"].value);

    if (name && email && organisation)
        return true;
    else
        return false;
}

function gender(gender) {
    if (gender == "male") {
        alert("Hello sir!");
        return true;
    } else if (gender == "female") {
        alert("Hello mam!!");
        return true;
    } else {
        alert(gender);
        return true;
    }
}