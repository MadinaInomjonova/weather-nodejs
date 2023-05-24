import chalk from "chalk";
import dedent from "dedent-js";

const printError = (err) => {
  console.log(chalk.bgRed("ERROR") + " " + err);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen("SUCCESS") + " " + message);
};

const printHelp = () => {
  console.log(dedent`
        ${chalk.bgCyan("HELP")}
        -s [CITY] for install city
        -h for help
        -t [API_KEY] for saving token
    `);
};

const printWeather = (res, icon) => {
  console.log(dedent`
    ${chalk.bgYellowBright("WEATHER")} City weather ${res.name}
    ${icon} ${res.weather[0].description}
    Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
    Humidity: ${res.main.humidity}%
    Wind speed: ${res.wind.speed}
  `);
};

export { printError, printSuccess, printHelp, printWeather };
