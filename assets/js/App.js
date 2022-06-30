'use strict'

import {Title} from './Title.js'

const e = React.createElement


const App = () => {
  return e(
    'section',
    {},
    e(
      Title,
      {'text': 'Les Articles'}
    )
  )
}

const domContainer = document.querySelector('#root')
ReactDOM.render(e(App), domContainer)
