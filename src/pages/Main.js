import { Lightning } from '@lightningjs/sdk'
import { Grid } from '@lightningjs/ui'
import Item from '../components/Item'
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
        x: 600,
        y: 400,
        type: PosterMenu,
        contents: [{ label: 'Movie 1' }, { label: 'Movie 2' }],
      },
    }
  }
  set contents(v) {
    this.tag('Contents').children = v.map((el, idx) => {
      return { type: Item, label: el.label, y: idx * 90 }
    })
  }

  get contents() {
    return this.tag('Contents').children
  }

  _init() {}

  _handleLeft() {
    // function called when left remote button pressed
  }

  _handleRight() {
    // function called when right remote button pressed
  }
}
