import { Lightning, Utils } from '@lightningjs/sdk'

// this will display a movie poster and some information about the movie
// i.e title, year released, rating
export default class MovieInfo extends Lightning.Component {
  static _template() {
    return {
      Title: {
        x: window.innerWidth / 2,
        y: 260 / 2,
        mount: 0.5,
        text: { text: 'Movie Name', fontFace: 'Regular', textColor: 0xbbffffff },
      },
      Content: {
        w: 500,
        h: 600,
        x: 100,
        y: 300,
        Poster: {
          texture: {
            type: Lightning.textures.ImageTexture,
            src: Utils.asset('images/movie_poster.jpg'),
            resizeMode: { type: 'contain', w: 500, h: 600 },
          },
        },
      },
    }
  }
}
