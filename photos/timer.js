function showTime() {
    const date = new Date ();
    return date.getHours() + "Hrs:" + date.getMinutes() + "Mins:" +date.getSeconds() + "second";
}
function showSessionExpire(){

    console.log("Activity-B your session expired at" +showTime());
}
    console.log("Activity-A triggring Activity-B at "+showTime());
    setTimeout(showSessionExpire, 5000);
    console.log("Activity-A: Triggered Activity-B at "+showTime()+"will execute after");
