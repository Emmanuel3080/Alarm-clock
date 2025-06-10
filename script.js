const hours = document.getElementById("hour");
const mint = document.getElementById("min");
const secs = document.getElementById("sec");
const alarmValue = document.getElementById("timeIN");

const notifyBtn = document.querySelector(".notifys");

let snoozeTime = document.querySelector(".snoozeBtn");
//  alarmValue= "";
const alertAlarm = document.getElementById("alerts");
const nDate = new Date();
const showBtn = document.querySelector(".showBtn");
const alarmBeep = new Audio(
  "./Sounds/41500_download_alarm_beep_ringtone_mp3_sms_ringtones.mp3"
);
// alarmBeep.loop = true;//Keep playing untll stopped

const startClock = () => {
  setInterval(() => {
    const nDate = new Date();

    hours.textContent = String(nDate.getHours()).padStart(2, "0");
    mint.textContent = String(nDate.getMinutes()).padStart(2, "0");
    secs.textContent = String(nDate.getSeconds()).padStart(2, "0");

    check();
  }, 1000);
};

// 14:24(format)

const check = () => {
  let currentTime = `${hours.textContent}:${mint.textContent}`;
  // alert(showEx)
  if (alarmValue.value == "") {
    alertAlarm.value = "Set Alarm ";
    return;
  }

  if (alarmValue.value == currentTime) {
    ringAlarm();

    alertAlarm.value = "Time Uppp";
    // snoozeTime.classList.add("snoozeBtn").sty
    notifyBtn.classList.add("notify");

    // setTimeout(()=>{
    //     notifyBtn.classList.remove("notify")
    // },6000)
    alarmTrigger = true;
  } else if (alarmValue.value > currentTime) {
     notifyBtn.classList.remove("notify")
    alertAlarm.value = "You can still sleep,just be ready";
  } else if (currentTime > alarmValue.value) {
     notifyBtn.classList.remove("notify")
    alertAlarm.value = "Time has passed,you slept off,Set Another Alarm!!";
     
  }
};

const ringAlarm = () => {
  alarmBeep.play();
};

snoozeTime.addEventListener("click", () => {
//   notifyBtn.classList.remove("notify");
  let setSnoozeDuration = prompt("Set Snooze duration");
  const [newHrs, newMinutes] = alarmValue.value.split(":").map(Number);

  const snoozeDuration = new Date();
  snoozeDuration.setHours(newHrs);
  snoozeDuration.setMinutes(newMinutes + Number(setSnoozeDuration));

  const newSnoozeHour = String(snoozeDuration.getHours()).padStart(2, "0");
  const newSnoozeMin = String(snoozeDuration.getMinutes()).padStart(2, "0");
  alarmValue.value = `${newSnoozeHour}:${newSnoozeMin}`;
});

startClock();
