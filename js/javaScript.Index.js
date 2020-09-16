// header
$('.add-button button').click(function () {
    displayItems();
    $('#getItems').val("");
    deleteItems();
});

function displayItems() {
    let inputVal = $('#getItems').val()
    $('#displayVal').after(`
    <div class="row no-gutters my-4 deleteRow">
    <div class="col-6 offset-3">
        <p class="bg-white  p-2 text-left rounded mb-0 overflow-auto userValue">${inputVal}</p>
    </div>
    <button class="btn btn-danger deleteItem">X</button>
    </div>`);
};

function deleteItems() {
    $('.deleteItem').click(function () {
        $(this).parent().remove();
    })
}



//section 1 cryingBaby

let playSound = new Audio();
playSound.src = "audio/baby-crying-05.mp3";

$("#babySound div").hover(function () {
    // over
    $(`#babySound`).addClass(`change-color`);

    playSound.play().catch(function () {
        console.log("error") // ممكن لو ليها حل تبلغونى بية؟
    })
    playSound.loop = true;

}, function () {
    // out
    $(`#babySound`).removeClass(`change-color`);
    playSound.pause();
    playSound.loop = true;
});


//section 2  getDate

function displayCounter() {
    let target = new Date("2021").getTime();
    let currentTime = new Date().getTime();
    let countDown = target - currentTime;

    let days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    let hours = Math.floor((countDown % (1000 * 60 * 60 * 24) / 3600000));
    let minutes = Math.floor((countDown % (1000 * 60 * 60)) / 60000);
    let seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    $(".clock").eq(0).text(days);
    $(".clock").eq(1).text(hours);
    $(".clock").eq(2).text(minutes);
    $(".clock").eq(3).text(seconds);

    let clear = setTimeout(displayCounter, 1000);
    if (countDown == 0) {
        clearTimeout(clear);
    };
};

displayCounter();

//section 3  RGB

$("#colorR").mousemove(function () {
    $("#rgb").css("backgroundColor", "red");
    $("#R path").eq(1).attr("fill", "black");
    $("#G polyline").eq(1).attr("fill", "black");
    $("#B path").eq(1).attr("fill", "black");

});

$("#colorG").mousemove(function () {
    $("#rgb").css("backgroundColor", "green");
    $("#R path").eq(1).attr("fill", "black");
    $("#G polyline").eq(1).attr("fill", "black");
    $("#B path").eq(1).attr("fill", "black");
});

$("#colorB").mousemove(function () {
    $("#rgb").css("backgroundColor", "blue");
    $("#R path").eq(1).attr("fill", "black");
    $("#G polyline").eq(1).attr("fill", "black");
    $("#B path").eq(1).attr("fill", "black");
});

$("#colorR,#colorG,#colorB").mouseleave(function () {
    $("#rgb").css("backgroundColor", "white");

    $("#R path").eq(1).attr("fill", "red");
    $("#G polyline").eq(1).attr("fill", "green");
    $("#B path").eq(1).attr("fill", "blue");
});

//section 4  validation


//regex1 
let userName = document.getElementById('userName');

userName.addEventListener("keyup", function () {
    checkRegex1(userName.value);
});
userName.addEventListener("blur", function () {
    checkRegex1(userName.value);
});

function checkRegex1(name) {
    let regex = /^\w{3,}$/;
    let userNameAlert = document.getElementById('userNameAlert');

    if (regex.test(name) == true) {
        userNameAlert.classList.replace("d-block", "d-none");
        userName.classList.add("is-Valid");
        userName.classList.remove("is-inValid");
    } else {
        userNameAlert.classList.replace("d-none", "d-block");
        userName.classList.add("is-inValid");
        userName.classList.remove("is-Valid");
    };
};

//regex2
let email = document.getElementById('email');

email.addEventListener("keyup", function () {
    checkRegex2(email.value);
});
email.addEventListener("blur", function () {
    checkRegex2(email.value);
});

function checkRegex2(mail) {
    let regex = /^\w{3,}@[A-Za-z\d]{2,}.com$/;
    let emailAlert = document.getElementById('emailAlert');

    if (regex.test(mail) == true) {
        emailAlert.classList.replace("d-block", "d-none");
        email.classList.add("is-Valid");
        email.classList.remove("is-inValid");
    } else {
        emailAlert.classList.replace("d-none", "d-block");
        email.classList.add("is-inValid");
        email.classList.remove("is-Valid");
    };
};

//regex3
let phone = document.getElementById('phone');

phone.addEventListener("keyup", function () {
    checkRegex3(phone.value);
});
phone.addEventListener("blur", function () {
    checkRegex3(phone.value);
});

function checkRegex3(phone) {
    let regex = /^(002)?01[0125]\d{8}$/;
    let phoneAlert = document.getElementById('phoneAlert');

    if (regex.test(phone) == true) {
        phoneAlert.classList.replace("d-block", "d-none");
        phone.classList.add("is-Valid");
        phone.classList.remove("is-inValid");
    } else {
        phoneAlert.classList.replace("d-none", "d-block");
        phone.classList.add("is-inValid");
        phone.classList.remove("is-Valid");
    };
};


//text area
function calcMaxLength() {

    let max30 = document.getElementById("max30");
    let textArea = document.getElementById("textArea");
    let maxLength = textArea.getAttribute("maxlength");
    max30.innerHTML = maxLength - this.value.length + " lettre remaining";

    if (max30.innerHTML == "0 lettre remaining") {
        max30.classList.replace("text-muted", "text-danger");
    } else {
        max30.classList.replace("text-danger", "text-muted");
    }
};

textArea.addEventListener("input", calcMaxLength);