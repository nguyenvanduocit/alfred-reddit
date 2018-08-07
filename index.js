'use strict';
const alfy = require('alfy');
const path = require('path');
alfy.fetch(alfy.input)
.then(function (response) {
  alfy.output(response.data.children.map(function (item, index) {
    const maxLenght = 50
    const title = item.data.title.length > maxLenght ? `${item.data.title.substr(0, maxLenght)}...` : item.data.title
    return {
      title: title,
      subtitle: `Score: ${item.data.score}\tUps ${item.data.ups}`,
      arg: `https://reddit.com${item.data.permalink}`,
      icon: {
        path: path.resolve(`./icon/number_${index + 1}.png`)
      }
    }
  }))
})

