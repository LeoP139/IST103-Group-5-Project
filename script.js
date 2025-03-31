async function fetchJSONData() {
    //Function to fetch the dat
    const url = './data.json';
    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.error(error.message);
    }
};


async function daily() {
    //Function to modify daily data;

    const data = await fetchJSONData();

    document.getElementById("workNow").textContent = data[0].timeframes.daily.current + "hrs";
    document.getElementById("workPrevious").textContent = "Yesterday - " + data[0].timeframes.daily.previous + "hrs";
    document.getElementById("playNow").textContent = data[1].timeframes.daily.current + "hrs";
    document.getElementById("playPrevious").textContent = "Yesterday - " + data[1].timeframes.daily.previous + "hrs";
    document.getElementById("studyNow").textContent = data[2].timeframes.daily.current + "hrs";
    document.getElementById("studyPrevious").textContent = "Yesterday - " + data[2].timeframes.daily.previous + "hrs";
    document.getElementById("exerciseNow").textContent = data[3].timeframes.daily.current + "hrs";
    document.getElementById("exercisePrevious").textContent = "Yesterday - " + data[3].timeframes.daily.previous + "hrs";
    document.getElementById("socialNow").textContent = data[4].timeframes.daily.current + "hrs";
    document.getElementById("socialPrevious").textContent = "Yesterday - " + data[4].timeframes.daily.previous + "hrs";
    document.getElementById("selfNow").textContent = data[5].timeframes.daily.current + "hrs";
    document.getElementById("selfPrevious").textContent = "Yesterday - " + data[5].timeframes.daily.previous + "hrs";
};

async function weekly() {
    //Function to modify daily data;

    const data = await fetchJSONData();

    document.getElementById("workNow").textContent = data[0].timeframes.weekly.current + "hrs";
    document.getElementById("workPrevious").textContent = "Last Week - " + data[0].timeframes.weekly.previous + "hrs";
    document.getElementById("playNow").textContent = data[1].timeframes.weekly.current + "hrs";
    document.getElementById("playPrevious").textContent = "Last Week - " + data[1].timeframes.weekly.previous + "hrs";
    document.getElementById("studyNow").textContent = data[2].timeframes.weekly.current + "hrs";
    document.getElementById("studyPrevious").textContent = "Last Week - " + data[2].timeframes.weekly.previous + "hrs";
    document.getElementById("exerciseNow").textContent = data[3].timeframes.weekly.current + "hrs";
    document.getElementById("exercisePrevious").textContent = "Last Week - " + data[3].timeframes.weekly.previous + "hrs";
    document.getElementById("socialNow").textContent = data[4].timeframes.weekly.current + "hrs";
    document.getElementById("socialPrevious").textContent = "Last Week - " + data[4].timeframes.weekly.previous + "hrs";
    document.getElementById("selfNow").textContent = data[5].timeframes.weekly.current + "hrs";
    document.getElementById("selfPrevious").textContent = "Last Week - " + data[5].timeframes.weekly.previous + "hrs";
};

async function monthly() {
    //Function to modify daily data;

    const data = await fetchJSONData();

    document.getElementById("workNow").textContent = data[0].timeframes.monthly.current + "hrs";
    document.getElementById("workPrevious").textContent = "Last Month - " + data[0].timeframes.monthly.previous + "hrs";
    document.getElementById("playNow").textContent = data[1].timeframes.monthly.current + "hrs";
    document.getElementById("playPrevious").textContent = "Last Month - " + data[1].timeframes.monthly.previous + "hrs";
    document.getElementById("studyNow").textContent = data[2].timeframes.monthly.current + "hrs";
    document.getElementById("studyPrevious").textContent = "Last Month - " + data[2].timeframes.monthly.previous + "hrs";
    document.getElementById("exerciseNow").textContent = data[3].timeframes.monthly.current + "hrs";
    document.getElementById("exercisePrevious").textContent = "Last Month - " + data[3].timeframes.monthly.previous + "hrs";
    document.getElementById("socialNow").textContent = data[4].timeframes.monthly.current + "hrs";
    document.getElementById("socialPrevious").textContent = "Last Month - " + data[4].timeframes.monthly.previous + "hrs";
    document.getElementById("selfNow").textContent = data[5].timeframes.monthly.current + "hrs";
    document.getElementById("selfPrevious").textContent = "Last Month - " + data[5].timeframes.monthly.previous + "hrs";
};