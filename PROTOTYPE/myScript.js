//Aircraft types listed here
let aircrafts = [{
        type: "DC35",
        takeOffTime: 16,
        landingTime: 23
    },
    {
        type: "AB330",
        takeOffTime: 12,
        landingTime: 20
    },
    {
        type: "LH456",
        takeOffTime: 19,
        landingTime: 21
    },
    {
        type: "AB300",
        takeOffTime: 22,
        landingTime: 28
    }
];
/* to make sure there is always MAX 5 runways*/
let runways = ['', '', '', '', ''];
/*7min waiting time between takeOff and Landing*/
let waitingTime = 7;

let log = [];

/*InterChange between main page and report page*/
document.getElementById('show-report').onclick = function() {
    $('#main-page').hide();
    $('#show-report').hide();
    $("#report-page").fadeIn(300);
    $("#back").fadeIn(300);
}
document.getElementById('back').onclick = function() {
    $('#main-page').fadeIn(300);
    $('#show-report').fadeIn(300);
    $("#report-page").hide();
    $("#back").hide();
}
/*function to decrement takeOff or Landing time thus clearing up the runway for use again*/
var decrease = setInterval(function() {
    for (i = 0; i < runways.length; i++) {
        if (runways[i] !== '') {
            runways[i][1]--;
            document.getElementById('runway' + i).innerHTML = runways[i][0];
            document.getElementById('duration' + i).innerHTML = runways[i][1] + ' Minutes';
        }

        if (runways[i][1] === 0) {
            runways[i] = '';
            document.getElementById('runway' + i).innerHTML = '';
            document.getElementById('duration' + i).innerHTML = '';
            document.getElementById('status' + i).innerHTML = '';
            document.getElementById('r' + i).innerHTML = 'Available';
            document.getElementById('runwayImg' + i).classList.remove('plane');
            document.getElementById('runwayImg' + i).classList.remove('plane0');
            console.log("spliced");
        }
    }
}, 1000);



/*display aircraft & takeOff duration*/
document.getElementById('take-off').onclick = function() {
    let search = document.getElementById('search').value;
    var i;
    var j;
    var k;
    if (search === '') {

        document.getElementById('alert').innerHTML = 'Please select Aircraft';


        // close the div in 1 secs
        window.setTimeout(closeHelpDiv, 1000);
    } else {
        for (i = 0; i < aircrafts.length; i++) {
            if (search === aircrafts[i].type) {
                for (j = 0; j < runways.length; j++) {
                    if (runways[j] === '') {
                        runways[j] = [aircrafts[i].type, aircrafts[i].takeOffTime];
                        log[j] = [aircrafts[i].type, aircrafts[i].takeOffTime];
                        console.log(runways);
                        console.log(runways[j][0]);
                        document.getElementById('runway' + j).innerHTML = runways[j][0];
                        document.getElementById('duration' + j).innerHTML = runways[j][1] += waitingTime;
                        document.getElementById('status' + j).innerHTML = 'Taking Off';
                        document.getElementById('r' + j).innerHTML = 'Taking-Off';
                        document.getElementById('runwayImg' + j).classList.add('plane');
                        document.getElementById('flight' + j).innerHTML = runways[j][0];
                        document.getElementById('d' + j).innerHTML = runways[j][1] + "minutes";
                        const t = document.getElementById('clock').innerHTML;
                        document.getElementById("time" + j).innerHTML = t;
                        j = 5;

                    }
                }
            }
        }
    }
    if (j === 5) {
        document.getElementById('alert').innerHTML = 'Please wait for an unoccupied runway';
        // close the div in 1 secs
        window.setTimeout(closeHelpDiv, 1000);
    }

}
/*display aircraft & landing duration*/
document.getElementById('land').onclick = function() {
    let search = document.getElementById('search').value;
    var i;
    var j;
    if (search === '') {

        document.getElementById('alert').innerHTML = 'Please select Aircraft';


        // close the div in 1 secs
        window.setTimeout(closeHelpDiv, 1500);
    } else {
        for (i = 0; i < aircrafts.length; i++) {
            if (search === aircrafts[i].type) {
                for (j = 0; j < runways.length; j++) {
                    if (runways[j] === '') {
                        runways[j] = [aircrafts[i].type, aircrafts[i].landingTime];
                        console.log(runways);
                        console.log(runways[j][0]);
                        document.getElementById('runway' + j).innerHTML = runways[j][0];
                        document.getElementById('duration' + j).innerHTML = runways[j][1] += waitingTime;
                        document.getElementById('status' + j).innerHTML = 'Landing';
                        document.getElementById('status' + j).classList.add('orange');
                        document.getElementById('r' + j).innerHTML = 'Landing';
                        document.getElementById('runwayImg' + j).classList.add('plane0');
                        document.getElementById('flight' + j).innerHTML = runways[j][0];
                        document.getElementById('d' + j).innerHTML = runways[j][1] + "minutes";
                        const t = document.getElementById('clock').innerHTML;
                        document.getElementById("time" + j).innerHTML = t;
                        j = 5;


                    }
                }
            }

        }

    }
    if (j === 5) {
        document.getElementById('alert').innerHTML = 'Please wait for an unoccupied runway';
        // close the div in 1 secs
        window.setTimeout(closeHelpDiv, 1500);
    }

}

function closeHelpDiv() {
    document.getElementById("alert").innerHTML = "";
}

//DISPLAY TIME
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds()
    var ampm = "AM";

    if (h > 12) {
        h -= 12;
        ampm = "PM";
    }

    if (h == 0) {
        h = 12;
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + ampm;

    document.getElementById("clock").innerHTML = time;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[date.getDay()];
    var curDay = date.getDate();
    var curMonth = months[date.getMonth()];
    var curYear = date.getFullYear();
    var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
    document.getElementById("date").innerHTML = date;

}

setInterval(showTime, 500);
//////////////////////////////
$(".loader").delay(2000).fadeOut("slow");
$("#overlayer").delay(2000).fadeOut("slow");