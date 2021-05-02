const templates = {
  pdf: [
    {
      id: 1,
      location: 't2.pdf',
      type: 'pdf',
      text: [
        {
          title: 'Abhishek Kumar',
          x: 220,
          y: 360,
          size: 50
        }
      ]
    }
  ],
  png: [
    {
      id: 2,
      location: 'template/t1.png',
      type: 'png',
      text: [
        {
          title: 'Field 1',
          x: 289,
          y: 200,
          size: 37
        },
        {
          title: 'Field 2',
          x: 289,
          y: 440,
          size: 18
        },
        {
          title: 'Field 3',
          x: 542,
          y: 440,
          size: 18
        }
      ]
    }
  ]
}

export default templates
