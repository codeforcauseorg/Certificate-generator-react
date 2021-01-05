const fs = require('fs')
var express = require('express');
var router = express.Router();
const { createCanvas, loadImage } = require("canvas");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/cert', function (req, res, next) {
  // console.log(req.body)
  // console.log(req.body)
  updateCanvas(req.body).then(buffer => {    
    res.send(req.body.textProps)
  }).catch(e => {
    res.send(e)
  })
})

async function updateCanvas(certificates) {
  const {template, textProps, csv} = certificates
  // console.log(textProps)
  const image = await loadImage(`public/templates/${template}`)
  var canvas = createCanvas(image.width, image.height)
  ctx = canvas.getContext('2d')
  csv.map(async (certificate, index) => {
    // console.log(certificate)
    ctx.drawImage(image, 0, 0)
    textProps.map((drawProperties, i) => {
      const { x, y, size } = drawProperties
      console.log(drawProperties)
      // console.log("x: " + x + "y: " + y + "size: " + size)
      const {title} = certificate[i]
      // console.log(i)
      ctx.fillStyle = "#fff"
      ctx.font = `bold ${size}pt Menlo`
      ctx.fillText(title, x, y)
    })
    const buffer = canvas.toBuffer('image/png')
    fs.writeFileSync(`public/images/imi${index}.png`, buffer)
  })
}

module.exports = router;
