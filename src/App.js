import { Lightning, Utils } from '@lightningjs/sdk'
import { Splash } from './pages'

export default class App extends Lightning.Component {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      rect: true,
      color: 0xff000000,
      w: 1920,
      h: 1080,
      Splash: {
        type: Splash,
        signals: { loaded: true }, // tells parent component about event
        alpha: 0,
      },
    }
  }

  _setup() {
    this._setState('Splash')
  }

  static _states() {
    return [
      class Splash extends this {
        $enter() {
          this.tag('Splash').setSmooth('alpha', 1)
        }
        $exit() {
          this.tag('Splash').setSmooth('alpha', 0)
        }
        // refers to the loaded signal in the Splash page
        loaded() {
          this._setState('Main')
        }
      },
    ]
  }

  _init() {}
}
