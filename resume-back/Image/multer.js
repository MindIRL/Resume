const multer = require('multer');
const storage = multer.memoryStorage(); // เก็บไว้ใน memory ก่อนใส่เข้า MongoDB
const upload = multer({ storage });


module.exports = upload;