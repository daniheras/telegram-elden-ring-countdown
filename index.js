require("dotenv").config();
const Slimbot = require("slimbot");
const barTemplate = require("./elden-ring-bar");
const nodeHtmlToImage = require("node-html-to-image");
const fs = require("fs");
const { Interval, DateTime } = require("luxon");

const slimbot = new Slimbot(process.env.TELEGRAM_BOT_SECRET);

const totalDaysSinceAnnouncementToLaunch = Interval.fromDateTimes(
  DateTime.fromFormat("10/06/2021", "dd/MM/yyyy"),
  DateTime.fromFormat("21/01/2022", "dd/MM/yyyy")
).count("days");
const totalDaysSinceAnnouncement = Interval.fromDateTimes(
  DateTime.fromFormat("10/06/2021", "dd/MM/yyyy"),
  DateTime.now()
).count("days");
const daysLeftSineToday = Interval.fromDateTimes(
  DateTime.now(),
  DateTime.fromFormat("21/01/2022", "dd/MM/yyyy")
).count("days");
const percentageOfDaysCompleted = Math.floor(
  (totalDaysSinceAnnouncement * 100) / totalDaysSinceAnnouncementToLaunch
);

slimbot.on("message", (message) => {
  console.log(message);
  if (
    message.text === "/cuando" ||
    message.text === "cuando sale elden ring" ||
    message.text === "/g2" ||
    message.text === "/bracket" ||
    message.text === "elden ring" ||
    message.text === "boooff" ||
    message.text === "pokemon de coches"
  ) {
    nodeHtmlToImage({
      output: "./image.png",
      html: barTemplate,
      transparent: true,
      content: {
        daysLeft: daysLeftSineToday,
        percentage: percentageOfDaysCompleted,
      },
    }).then((image) => {
      let inputFile = fs.createReadStream(__dirname + "/image.png");
      slimbot.sendPhoto(message.chat.id, inputFile);
    });
  }

  if (message.text === "Danieeeeeeel") {
    slimbot.sendMessage(message.chat.id, "DIOOOOOOOOOOOOOOS");
  }
});

slimbot.startPolling();
