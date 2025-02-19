function getTime() {
    let baseDate = new Date("2025-02-13"); // dia base
    let now = new Date();
    let timeDifference = Math.floor((now.getTime() - baseDate.getTime()) / 60 / 60 / 24 / 1000);
    let eachWeek = Math.floor(timeDifference / 7);
    let result = eachWeek % 4;

    return {result, now};
}

function setSeason() {
    let season = document.getElementById("season");
    let {result, now} = getTime();
    
    let weekDay = now.getUTCDay();
    let nowHour = now.getUTCHours();
    let nowMinutes = now.getUTCMinutes();
    let nowHourMinutes = nowHour * 60 + nowMinutes;

    // 870 minutos son las 14:30
    if ((nowHourMinutes >= 870) && (weekDay == 4)) {
        result++;
        result = result % 4;
    }

    switch (result) {
        case 0:
            season.textContent = "It's autumn!";
            document.title = "It's autumn in FH4!"
            break;
        case 1:
            season.textContent = "It's winter!";
            document.title = "It's winter in FH4!"
            break;
        case 2:
            season.textContent = "It's spring!";
            document.title = "It's spring in FH4!"
            break;
        case 3:
            season.textContent = "It's summer!";
            document.title = "It's summer in FH4!"
            break;
    }

    document.body.style.backgroundImage = `url(images/${result}.jpg)` 
}

setSeason();
