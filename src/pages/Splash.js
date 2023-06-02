import { Lightning } from '@lightningjs/sdk'

export default class Splash extends Lightning.Component {
  static _template() {
    return {
      LoadingText: { text: 'Loading Movies..', fontFace: 'Regular', textColor: 0xbbffffff },
    }
  }

  // hook called when component is initially attached
  _init() {
    this._pulse = this.tag('LoadingText').animation({
      duration: 10, // in seconds
      repeat: 0, // plays once
      actions: [{ p: 'alpha', v: { 0: 0, 1: 0.5, 2: 0, 3: 0.5, 4: 0 } }], // alpha property (p), time-value function (v)
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
}
