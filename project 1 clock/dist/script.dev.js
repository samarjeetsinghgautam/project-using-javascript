"use strict";

setInterval(function () {
  d = new Date();
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  hrot = 30 * htime + mtime / 2;
  mrot = 6 * mtime;
  srot = 6 * stime;
  hour.style.transform = "rotate(".concat(hrot, "deg)");
  minute.style.transform = "rotate(".concat(mrot, "deg)");
  second.style.transform = "rotate(".concat(srot, "deg)");
}, 1000);