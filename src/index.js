function updateTime() {
  let losangelesElement = document.querySelector("#los-angeles");
  if (losangelesElement) {
    let losangelesDateElement = losangelesElement.querySelector(".date");
    let losangelesTimeElement = losangelesElement.querySelector(".time");
    let losangelesTime = moment().tz("America/Los_Angeles");

    losangelesDateElement.innerHTML = losangelesTime.format("MMMM Do YYYY");
    losangelesTimeElement.innerHTML = losangelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let londonElement = document.querySelector("#london");
  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

let interval;

function updateCity(event) {
  clearInterval(interval);

  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  let cityTime = moment().tz(cityTimeZone);

  interval = setInterval(() => {
    citiesElement.innerHTML = `(
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <p class="date">${cityTime.format("MMMM Do YYYY")}</p>
        </div>
        <p class="time">
          ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
        </p>
      </div>
    )`;
    cityTime.add(1, "second");
  }, 1000);
}

let citiesSelectElement = document.querySelector("#select-city");
citiesSelectElement.addEventListener("change", updateCity);
updateTime();
setInterval(updateTime, 1000);
