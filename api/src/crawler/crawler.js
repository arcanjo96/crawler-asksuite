const puppeteerCore = require('puppeteer-core');
const executablePath = require('./getExecutablePath');


async function crawler(checkIn, checkOut) {
  const browser = await puppeteerCore.launch({
    executablePath,
    headless: true
  });
  const page = await browser.newPage();
  await page.goto(`
    https://myreservations.omnibees.com/default.aspx?q=5462&version=MyReservation&sid=c28a9923-7df6-4c05-8ff2-a0dd6794a20e#/&diff=false&CheckIn=${checkIn}&CheckOut=${checkOut}&Code=&group_code=&loyality_card=&NRooms=1&ad=1&ch=0&ag=-`,
    {
      timeout: 0,
      waitUntil: 'networkidle2'
    }
  );

  const rooms = await page.evaluate(body => {
    const roomsData = [];
    const findedRooms = document.querySelectorAll('.maintable tr.roomName');
    findedRooms.forEach(room => {
      const data = {
        thumbs: []
      };
      //thumbs
      room.querySelectorAll('.thumb div.slide a img').forEach(item => {
        data["thumbs"].push(item.src);
      });

      //title
      room.querySelectorAll('.excerpt h5 a').forEach(item => {
        data["title"] = item.innerHTML;
      });

      //description
      room.querySelectorAll('.excerpt p a').forEach(item => {
        data["description"] = item.innerHTML;
      });

      //price
      room.querySelectorAll('.soldOut h6 a').forEach(item => {
        data["price"] = item.innerHTML;
      });

      roomsData.push(data);
    });
    return roomsData;
  });

  await browser.close();
  return rooms;
};

module.exports = crawler;