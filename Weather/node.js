const http = require("http");
const fs = require("fs");
const requests = require("requests");
const htmlfile = fs.readFileSync("./home.html", "utf-8");

const changeData = (olddata, newdata) => {
  console.log(newdata);
  let change = olddata
    .replace("{%tempval%}", (newdata.main.temp - 273.15).toFixed(2))
    .replace("{%tempmin%}", (newdata.main.temp_min - 273.15).toFixed(2))
    .replace("{%tempmax%}", (newdata.main.temp_max - 273.15).toFixed(2))
    .replace("{%country%}", newdata.sys.country)
    .replace("{%location%}", newdata.name)
    .replace("{%weather%}", newdata.weather[0].main);
  return change;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=Nepal&appid=226088a93a805aef3b73b16d6d221352"
    )
      .on("data", (chunk) => {
        const arrData = [JSON.parse(chunk)];
        const realTimeData = arrData
          .map((value) => changeData(htmlfile, value))
          .join("");
        res.write(realTimeData);
      })
      .on("end", (error) => {
        if (error) {
          console.log("Connction lost", error);
        }
        res.end();
      });
  }
});
server.listen(3000);
