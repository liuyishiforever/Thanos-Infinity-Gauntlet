var active = 0;
var gauntlet = document.getElementById('gauntlet');
var box = document.getElementsByClassName('box');

var arr = [];

function trick() {

    if (active == 0) {
        console.log('thanos');
        arr = randomNumbers(0, box.length, (box.length / 2));
        console.log(arr);
        let audio = new Audio('audio/trick.mov');
        audio.loop = false;
        audio.play();
        gauntlet.src = 'img/2.png';
        setTimeout(function () {
            gauntlet.src = 'img/3.png';
        }, 400)
        setTimeout(function () {
            gauntlet.src = 'img/4.png';
        }, 1000)
        setTimeout(function () {
            gauntlet.src = 'img/5.png';
            kill(arr);
        }, 1200)
        active = 1;
    } else {
        gauntlet.src = 'img/6.png';
        setTimeout(function () {
            gauntlet.src = 'img/5.png';
        }, 1000);
        console.log('revive: ' + arr);
        revive(arr);
        active = 0;
    }
}

function randomNumbers(startNum, endNum, count) {
    var arr = [];
    for (var i = 0; i < count; i++) {
        var arrNum = parseInt(Math.random() * (endNum - startNum)) + 1;
        var flag = true;
        for (var j = 0; j <= arr.length; j++) {
            if (arrNum == arr[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            arr.push(arrNum);
        } else {
            i--;
        }
    }
    return arr;
};


function kill(arr) {
    let audio = new Audio('audio/kill1.mp4');
    audio.loop = false;
    audio.play();
    arr.forEach((item) => {
        $('#b' + item).fadeTo(200, 0);
    })

}

function revive(arr) {
    let audio = new Audio('audio/revive.mp4');
    audio.loop = false;
    audio.play();
    arr.forEach((item) => {
        $('#b' + item).fadeTo(2000, 1);
    })
}



