import { Lightning } from '@lightningjs/sdk'

export default class Splash extends Lightning.Component {
  static _template() {
    return {
      LoadingText: {
        x: this.width / 2,
        y: this.height / 2,
        mount: 0.5,
        text: { text: 'Loading Movies...', fontFace: 'Regular', textColor: 0xbbffffff },
      },
    }
  }

  // hook called when component is initially attached
  _init() {
    this._pulse = this.tag('LoadingText').animation({
      duration: 5, // in seconds
      repeat: 0, // plays once
      actions: [{ p: 'alpha', v: { 0: 0, 1: 0.5 } }], // alpha property (p), time-value function (v)
    })
    // event listener sends signal to parent on animation completion
    this._pulse.on('finish', () => {
      this.signal('loaded')
    })

    // start the animation
    this._pulse.start()
  }

  _active() {
    this._pulse.start()
  }

  static get width() {
    return 1920
  }

  static get height() {
    return 1080
  }
}
