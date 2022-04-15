let h, m, s, d, mo;
let i = 0;
let z = 0;

function startTime() {
    const today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    mo = today.getMonth();
    d = today.getDate();
    m = checkTime(m);
    s = checkTime(s);
    let time = document.getElementById("time");
    time.innerHTML = h + ":" + m + ":" + s;
   
    let timed = new RegExp(`${time.textContent}`);
   
    for (n = 0; n < i; n++) {
      let p = new Promise((resolve, reject) => {
        if ( (document.getElementById(`alarm${n}`)!=null) && (timed.test(document.getElementById(`alarm${n}`).textContent)) ) {
          resolve();
        }
      });
      p.then(() => {
        let al = new Audio("alarm1.mp3");
        al.play()
      }).catch((e) => {console.log(e);});
    }

    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function createDropdown(Ar, Id, What) {
    const today1 = new Date();
    this.what = What;
    this.id = Id;
    let Element = document.getElementById(this.id);
    Ar.forEach((element) => {
      let opt = document.createElement("option");
      opt.value = `${element}`;
      opt.textContent = `${element}`;
      if (element == this.what) {
        opt.setAttribute("selected", true);
      }
      Element.appendChild(opt);
    });
  }
  

  function CreateAlarm() {
    let alarm = document.createElement("div");
    alarm.setAttribute("id", `alarm${i}`);
    alarm.innerHTML = `<br><br><hr><h3>${month.value} ${
      date.value
    }&nbsp;<br>${checkTime(hour.value)}:${checkTime(minute.value)}:${checkTime(
      second.value
    )}&nbsp;`;
    let btn1 = document.createElement("button");
    btn1.type = "submit";
    btn1.textContent = "Delete Alarm";
    alarm.appendChild(btn1);
    alarms.appendChild(alarm);
    
    function DeleteAlarm() {

      alarms.removeChild(alarm);
    }

    btn1.addEventListener("click", DeleteAlarm);
    for (n = 0; n < i; n++) {
      if (document.getElementById(`alarm${n}`) != null) {
        console.log(document.getElementById(`alarm${n}`).textContent);
      }
    }
    i++;
  }
  