import { Lightning, Utils } from '@lightningjs/sdk'

export default class Item extends Lightning.Component {
  static _template() {
    return {
      content: {
        w: Item.width,
        h: Item.height,
        Poster: {
          texture: {
            type: Lightning.textures.ImageTexture,
            src: Utils.asset('movie_poster.jpg'),
            resizeMode: { type: 'contain', w: Item.width, h: Item.height },
          },
        },
        Title: {
          text: {
            text: 'Movie Title',
            fontFace: 'Regular',
            fontSize: 30,
            textColor: 0xbbffffff,
          },
        },
      },
    }
  }
  static get width() {
    return 265
  }

  static get height() {
    return 328
  }

  set label(v) {
    this.text.text = v
  }
}