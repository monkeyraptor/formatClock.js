function formatClock(a) {
    "use strict";
    if (typeof a !== "number") {
        a = Number(a);
        if (isNaN(a)) {
            return "ERROR: INPUT MUST BE NUMBER (SECOND)";
        }
    }
    var hour, minute, second;
    hour = Math.floor(a / 3600);
    minute = Math.floor(a / 60) - (hour * 60);
    second = a - (hour * 3600) - (minute * 60);
    function z(e) {
        if (e < 10) {
            e = "0" + e;
        }
        return e;
    }
    hour = z(hour);
    minute = z(minute);
    second = z(second);
    return hour + ":" + minute + ":" + second;
}
