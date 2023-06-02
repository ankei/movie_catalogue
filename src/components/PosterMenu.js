import { Lightning } from '@lightningjs/sdk'
import Item from './Item.js'

export default class Menu extends Lightning.Component {
  static _template() {
    return {
      Contents: {
        x: 30,
      },
    }
  }
  set contents(v) {
    this.tag('Contents').children = v.map((el, idx) => {
      return { type: Item, label: el.label, y: idx * 90 }
    })
  }

  get items() {
    return this.tag('Contents').children
  }
}
