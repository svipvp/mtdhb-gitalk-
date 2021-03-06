import React from 'react'
import { render } from 'react-dom'
import 'es6-promise/auto'
import GitalkComponent from './gitalk'
import './style/mtdhb.css'

class Gitalk {
  constructor (options = {}) {
    this.options = options
  }

  render (container) {
    let node = null
    container = container || this.options.container

    if (!container) throw new Error(`Container is required: ${container}`)

    if (!(container instanceof HTMLElement)) {
      node = document.getElementById(container)
      if (!node) throw new Error(`Container not found, document.getElementById: ${container}`)
    } else {
      node = container
    }

    return render(<GitalkComponent options={this.options}/>, node)
  }
}

module.exports = Gitalk
