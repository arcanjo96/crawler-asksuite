const crawler = require('./crawler');

module.exports = {
  async search(req, res) {
    const { checkIn, checkOut } = req.body; 
    const rooms = await crawler(checkIn, checkOut);
    res.json({ rooms });
  }
};