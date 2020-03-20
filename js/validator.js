function namevalidator(name) {
    var name = document.getElementById("name").value;
    let y = document.getElementById("name-required");
    if (name.length == 0) {
        y.style.display = "block";
        return false;
    } else {
        y.style.display = "none";
        return true;
    }
}

function emailvalidator() {
    let x = document.getElementById("email-required");
    let y = document.getElementById("invalid-email");
    var email = document.getElementById("email").value;
    if (email.length == 0) {
        y.style.display = "none";
        x.style.display = "block";
        return false;
    } else {
        x.style.display = "none";
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            y.style.display = "none";
            x.style.display = "none";
            return true;
        } else {
            y.style.display = "block";
            return false;
        }
    }
}

function orgvalidator() {
    let z = document.getElementById("org-required");
    var organisation = document.getElementById("organisation").value;

    if (organisation.length != 0) {
        z.style.display = "none";
        return true;
    } else {
        z.style.display = "block";
        return false;
    }
}

function validator() {
    var name = namevalidator();
    var email = emailvalidator();
    var organisation = orgvalidator();

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