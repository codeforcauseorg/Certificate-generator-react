const fs = require('fs')
var express = require('express');
var router = express.Router();
const { createCanvas, loadImage } = require("canvas");
const { error } = require('console');
const { Certificate } = require('crypto');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/cert', function (req, res, next) {
  // console.log(req.body)
  const certificates = req.body.textProps
  updateCanvas(certificates).then(buffer => {    
    res.send(req.body.textProps)
  }).catch(e => {
    res.send(e)
  })
})

async function updateCanvas(certificates) {
  const image = await loadImage('public/templates/t1.png')
  var canvas = createCanvas(image.width, image.height)
  ctx = canvas.getContext('2d')
  certificates.map(async (certificate, index) => {
    ctx.drawImage(image, 0, 0)
    certificate.map(drawProperties => {
      const { title, x, y, size } = drawProperties
      ctx.fillStyle = "#fff"
      ctx.font = `bold ${size}pt Menlo`
      ctx.fillText(title, x, y)
    })
    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync(`public/images/imi${index}.png`, buffer)
  })
}

module.exports = router;
