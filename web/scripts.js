function getTime() {
    const BASEDATE = new Date(Date.UTC(2025, 1, 13, 14, 30)); // 2025-02-13 14:30 en UTC, los meses en UTC empiezan en cero!!!
    let now = new Date();
    let utcTimestamp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 
    now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds(), now.getUTCMilliseconds()); // el UTC de la hora actual

    let timeDifference = Math.floor((utcTimestamp - BASEDATE.getTime()) / 60 / 1000);
    let eachWeek = Math.floor(timeDifference / 10080); // 7 dias en minutos

    let result = eachWeek % 4;
    return result;
}

function setSeason() {
    const SEASONS = {0:"autumn", 1:"winter", 2:"spring", 3:"summer"};
    let season = document.getElementById("season");
    let result = getTime();

    season.textContent = `It's ${SEASONS[result]}`;
    document.title = `It's ${SEASONS[result]} in FH4!`;
    document.body.style.backgroundImage = `url(images/${result}.jpg)`;
}

setSeason();
