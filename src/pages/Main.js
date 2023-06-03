import { Lightning } from '@lightningjs/sdk'
import { PosterMenu } from '../components'

export default class Main extends Lightning.Component {
  static _template() {
    return {
      Title: {
        x: window.innerWidth / 2,
        y: 260 / 2,
        mount: 0.5,
        text: { text: 'Movie Catalogue', fontFace: 'Regular', textColor: 0xbbffffff },
      },
      PosterMenu: {
        type: PosterMenu,
        x: 300,
        y: 300,
        mount: 0.5,
      },
    }
  }

  _init() {}

  _handleLeft() {
    // function called when left remote button pressed
  }

  _handleRight() {
    // function called when right remote button pressed
  }
}
