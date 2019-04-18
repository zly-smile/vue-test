const DEFAULT_OPTIONS = {
  id: uuid(),
  text: 'www.renrenche.com',
  font: '20px Times New Roman',
  rotateDegree: 30 * Math.PI / 180,
  width: 200,
  height: 200,
  preventTamper: false,
  style: {
    'pointer-events': 'none',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    position: 'fixed',
    'z-index': 1000
  }
}

function uuid () {
  return 'RRC-xxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8) // eslint-disable-line
    return v.toString(16)
  })
}

export default class WaterMark {
  constructor (option = {}) {
    this.container = null
    this.backgroundUrl = null
    this.opts = {...DEFAULT_OPTIONS, ...option}
  }

  init (option = {}) {
    this.opts = {...this.opts, ...option}
    this.container = this.createContainer()
    // this.opts.preventTamper && this.initObserve(true) 第一期不考虑
  }

  createImageUrl () {
    let options = this.opts
    let canvas = document.createElement('canvas')
    let text = options.text
    canvas.width = options.width
    canvas.height = options.height
    let ctx = canvas.getContext('2d')
    ctx.shadowOffsetX = 2 // X轴阴影距离，负值表示往上，正值表示往下
    ctx.shadowOffsetY = 2 // Y轴阴影距离，负值表示往左，正值表示往右
    ctx.shadowBlur = 2 // 阴影的模糊程度
    // ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';    //阴影颜色
    ctx.font = options.font
    ctx.fillStyle = 'rgba(0,0,0,0.1)'
    ctx.rotate(options.rotateDegree)
    ctx.translate(options.trax, options.tray)
    ctx.textAlign = 'left'
    ctx.fillText(text, 35, 32) // 实体文字
    return canvas.toDataURL('image/png')
  }

  createContainer (forceCreate) {
    let options = this.opts
    let oldDiv = document.getElementById(options.id)
    if (!forceCreate && oldDiv) {
      return this.container
    }
    let url = this.createImageUrl()
    let div = oldDiv || document.createElement('div')
    div.id = options.id
    let parentEl = options.preventTamper ? document.body : (options.parentEl || document.body)
    if (typeof parentEl === 'string') {
      if (parentEl.startsWith('#')) {
        parentEl = parentEl.substring(1)
        parentEl = document.getElementById(parentEl)
      }
    }
    let rect = parentEl.getBoundingClientRect()
    options.style.left = (options.left || rect.left) + 'px'
    options.style.top = (options.top || rect.top) + 'px'
    div.style.cssText = this.getStyleText(options)
    div.setAttribute('class', '')
    this.backgroundUrl = 'url(' + url + ') repeat top left'
    div.style.background = this.backgroundUrl
    !oldDiv && parentEl.appendChild(div)
    return div
  }

  getStyleText () {
    let ret = ''
    let style = this.opts.style
    Object.keys(style).forEach((k) => {
      ret += k + ': ' + style[k] + ';'
    })
    return ret
  }

  initObserve (_observeBody) {
    const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
    if (!MutationObserver) {
      console.log('不支持 MutationObserver')
    }
    // let options = this.opts
    let config = {
      // 监听属性
      attributes: true,
      // 监听子节点
      childList: true,
      characterData: true,
      // 监听正课数
      subtree: true
    }
    let target = this.container
    let observer = new MutationObserver(() => {
      observer.disconnect()
      this.container = this.createContainer(true)
      observer.observe(target, config)
    })

    observer.observe(target, config)
  }
}
