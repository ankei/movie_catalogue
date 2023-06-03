import { Lightning } from '@lightningjs/sdk'
import Item from './Item.js'
import { Grid } from '@lightningjs/ui'

export default class PosterMenu extends Lightning.Component {
  static _template() {
    return {
      Contents: {
        x: 30,
      },
      // Content: {
      // Grid: {
      //     type: Grid,
      //     itemType: Item,
      //     x: 90,
      //     y: 200, w: 1740, h: 850,
      //     spacing: 30,
      //     rows: 2,
      // }
      // }
    }
  }

  _setup() {
    this.tag('Contents').add(
      ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4'].map((movie, idx) => {
        return { type: Item, movie, x: idx * 300, mountX: 0.5 }
      }),
    )
  }

  // set contents(v) {
  //     this.tag('Contents').children = v.map((el, idx) => {
  //         return { type: Item, label: el.label, x: idx * 150, mountX: 0.5 }
  //     })
  // }

  get items() {
    return this.tag('Contents').children
  }
}
