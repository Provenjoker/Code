var wins = 0;
var loss = 0;
var tie = 0;
var theTime = new Date();
var tempTime = new Date();
var time_interval = 5000;
var last_iteration = 0;
var running= true;
var index = 0; 
var timer;

function updateDisplay(){
    theTime = new Date();
    console.log("the time is: " + theTime.getHours() + ":" + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));
     
     var timeRead = data[index].time_seconds;
     


 var timeRead = data[index].time_seconds;
 //update the table here
    if(timeRead >= 10){
        document.getElementById("data").rows["seconds"].innerHTML = dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerHTML = dataRow("Latitude", data[index].latitude, " ");
        document.getElementById("data").rows["longitude"].innerHTML = dataRow("Longitude", data[index].longitude, " ");
        document.getElementById("data").rows["gps"].innerHTML = dataRow("GPS altitude", data[index].gps_altitude, " ");
        document.getElementById("data").rows["bmpSensorAltitdue"].innerHTML = dataRow("BMP Altitude", data[index].bmpSensor_altitude, " ");
        document.getElementById("data").rows["bmpSensorPressure"].innerHTML = dataRow("BMP Pressure", data[index].bmpSensor_pressure, " ");
        document.getElementById("data").rows["bmpSensorTemp"].innerHTML = dataRow("BMP Temp", data[index].bmpSensor_temp, " ");
        document.getElementById("data").rows["digitalSensorTemp"].innerHTML = dataRow("Dig Temp", data[index].digSensor_temp, " ");
        document.getElementById("data").rows["cssSensorTemp"].innerHTML = dataRow("CSS Temp", data[index].cssSensor_temp, " ");
        document.getElementById("data").rows["cssSensor_eC02"].innerHTML = dataRow("CSS EC02", data[index].cssSensor_eC02, " ");
        document.getElementById("data").rows["cssSensorTVOC"].innerHTML = dataRow("CSS TVOC", data[index].cssSensor_TVOC, " ");
        document.getElementById("data").rows["uv"].innerHTML = dataRow("UV", data[index].UV, " ");
        document.getElementById("data").rows["accelX"].innerHTML = dataRow("Accel X", data[index].accelX, " ");
        document.getElementById("data").rows["accelY"].innerHTML = dataRow("Accel Y", data[index].accelY, " ");
        document.getElementById("data").rows["accelZ"].innerHTML = dataRow("Accel Z", data[index].accelZ , " ");
        document.getElementById("data").rows["magX"].innerHTML = dataRow("Magnetic X", data[index].magneticX, " ");
        document.getElementById("data").rows["magY"].innerHTML = dataRow("Magnetic Y", data[index].magneticY, " ");
        document.getElementById("data").rows["magZ"].innerHTML = dataRow("Magnetic Z", data[index].magneticZ, " ");
        document.getElementById("data").rows["gyroX"].innerHTML = dataRow("Gyro X", data[index].gyroX, " ");
        document.getElementById("data").rows["gyroY"].innerHTML = dataRow("Gyro Y", data[index].gyroY, " ");
        document.getElementById("data").rows["gyroZ"].innerHTML = dataRow("Gyro Z", data[index].gyroZ, " ");
        document.getElementById("timeClock").innerHTML = "The time is: " + theTime.getHours() + ":"
            + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds());
        if(index < 500){
            index++;
        } else{
            index = 0;
        }
    }
}
   
  
function checkCreds() {
    console.log("checkCreds() started");
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var badgeNum = document.getElementById("badgeID").value;
    var fullName = firstName + " " + lastName;

    console.log(" Full Name is " + fullName);

    if (fullName.length > 20 || fullName.length < 2) {
        document.getElementById("loginStatus").innerHTML = "Invalid full name !! Please submit a valid full name.";
    } else if (badgeNum > 999 || badgeNum < 0) {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge number ! Please submit a valid Badge number.";
    }
    else {
        alert("Welcome Gamer!,  " + fullName);
        location.replace("uatSpace.html");
    }
}

function btrBlastOff() {
    console.log("btrBlastOff() started");
    var currTime = 50;
    for (var i = 0; i < 11; i++) {
         setTimeout(function () {
              if (currTime >= 25) {
                   document.getElementById("countDownTimer").innerHTML = currTime;
              } else if (currTime == 0) {
                   document.getElementById("countDownTimer").innerHTML = "Blastoff!!";
              } else {
                   document.getElementById("countDownTimer").innerHTML = "Waring Less Tham 1/2 way to Launch, time left =" + currTime;
              }
              currTime = currTime - 5;
         }, i * 5000);
    }
}

class Rocket{
    // name states first
    constructor(
        fuelType,
        weight,
        power
    ){ // substanite states
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;

    } 
        launch(){
            alert("luanch sequence started");
            return true;
        }
        
        landing(){
            alert("landing started");
            return true;
        }

        burn(fuelUsed){
            alert(" Fuel used" + fuelUsed);
            return true;
        }

}

class Mission{
    constructor(
        objective,
        oxyLvl,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft,
        numOfAstronauts
    ){
        this.objective = objective;
        this.oxyLvl = oxyLvl;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft = spaceCraft;
        this.numOfAstronauts = numOfAstronauts;
    }

    displayMissionParameters(){
        alert("the spacecraft " + this.spaceCraft + " will launch on " + this.launchDateDay + " of " + this.launchDateMonth + " " + this.launchDateYear + " with an 02 Level of " + this.oxyLvl + "%");
    }

    launch(){
        alert("luanch sequence started");
    }
}

function launchFall(){
    fallLaunch.launch();
}

function displayFall(){
    console.log("auhdiuahiudworking")
    fallLaunch.displayMissionParameters();
}

function launchSpring(){
    springLaunch.launch();
}

function displaySpring(){
    springLaunch.displayMissionParameters();
}
var numWins = 0; //Base display number of Wins
var numLost = 0; //Base display number of Lost
var numTie = 0; //Base display number of Ties

function playCraps() {
    console.log("playCraps() started...)");
    //display that the button has been clicked in the console log
    var die1 = 6 * Math.random();
    // pick a random number, multiply by 6 and store in die1
    var roundDie1 = Math.ceil(die1); //Rounds die1 up
    console.log("The random number is: " + die1);   //display die1 on the browser at the die1Res position
    console.log("The rounded number is: " + roundDie1);  //Display the rounded number of die1
    document.getElementById("die1Res").innerHTML = "The rounded number is: " + roundDie1; //Shows the rounded number for die1 on the browser
    var die2 = 6 * Math.random();
    // pick a random number, multiply by 6 and store in die2
    console.log("die1 is " + die1);
    console.log("die2 is " + die2);
    var roundDie2 = Math.ceil(die2); //Rounds die2 up
    console.log("The random number is: " + die2);  //display die2 on the browser at the die2Res position
    console.log("The rounded number is: " + roundDie2); //display the rounded number of die2
    document.getElementById("die2Res").innerHTML = "The rounded number is: " + roundDie2; //Shows the rounded number for die2 on the browser
    var sum = roundDie1 + roundDie2;        //add die1 and die2 up and store in sum
    console.log("The sum of the two dice roll is: " + sum); //Displays the sum of die1 and die2
    document.getElementById("sumRes").innerHTML = "The sum of the two dice roll is: " + sum; // Shows the sum of die1 and die2 in the browser
    if (sum == 7 || sum == 11) { //Shows how to achieve a loss
        document.getElementById("lossRes").innerHTML = numLost; //Shows when the player loses in Craps
        numLost = numLost + 1; //Increase Lost counter by 1
    } else if (roundDie1 == roundDie2 && roundDie2 % 2 == 0) { //Shows how to achieve a win
        document.getElementById("winRes").innerHTML = numWins; //Shows when the player wins in Craps
        numWins = numWins + 1; //Increase Win counter by 1
    } else { //Shows how to achieve a tie
        document.getElementById("tieRes").innerHTML = numTie; //Shows when the player ties in Craps
        numTie = numTie + 1; //Increase Tie counter by 1
    }
   
}



function start(){
    console.log ("stared function start");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stop(){
    console.log ("stop function stared");
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(lengend, value, units){
    msg = "<td>";
    msg += lengend;
    msg += ": </td><td>";
    msg += value;
    msg += " : </td><td>";
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function playSpace(){
    console.log ("sound started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();

}

function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src= srcFile;
    this.play = function(){
         this.sound.play();
    }
    this.stop = function(){
         this.sound.pause();
    }
}
//These functions and class will allow the data to be displayed and updated every 5 seconds.
class InputData{
    constructor(
         time_seconds,
         latitude,
         longitude,
         gps_altitude,
         bmpSensor_altitude,
         bmpSensor_pressure,
         bmpSensor_temp,
         digSensor_temp,
         cssSensor_temp,
         cssSensor_eC02,
         cssSensor_TVOC,
         UV,
         accelX,
         accelY,
         accelZ,
         magneticX,
         magneticY,
         magneticZ,
         gyroX,
         gryoY,
         gyroZ,

    ){
         this.time_seconds = time_seconds;
         this.latitude = latitude;
         this.longitude = longitude;
         this.gps_altitude = gps_altitude;
         this.bmpSensor_altitude = bmpSensor_altitude;
         this.bmpSensor_pressure = bmpSensor_pressure;
         this.bmpSensor_temp = bmpSensor_temp;
         this.digSensor_temp = digSensor_temp;
         this.cssSensor_temp = cssSensor_temp;
         this.cssSensor_eC02 = cssSensor_eC02;
         this.cssSensor_TVOC = cssSensor_TVOC;
         this.UV = UV ;
         this.accelX = accelX ;
         this.accelY = accelY;
         this.accelZ = accelZ;
         this.magneticX = magneticX;
         this.magneticY = magneticY;
         this.magneticZ = magneticZ;
         this.gyroX = gyroX;
         this.gryoY = gryoY;
         this.gyroZ = gyroZ;

    }
}
