import { Lightning, Utils } from '@lightningjs/sdk'
import { Splash, Main } from './pages'

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
      Main: {
        type: Main,
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
        // shows and hides Splash when entering/exiting state
        $enter() {
          this.tag('Splash').setSmooth('alpha', 1)
        }
        $exit() {
          this.tag('Splash').setSmooth('alpha', 0)
        }
        // function called when loaded signal sent by component
        loaded() {
          this._setState('Main')
        }
      },
      class Main extends this {
        $enter() {
          // patching changes properties of an existing element in the template
          this.tag('Main').patch({
            smooth: { alpha: 1, y: 0 },
          })
        }
        $exit() {
          this.tag('Main').patch({
            smooth: { alpha: 0, y: 100 },
          })
        }
        // makes the Main component the "active" component and handles key events
        _getFocused() {
          return this.tag('Main')
        }
      },
    ]
  }

  _init() {}
}
