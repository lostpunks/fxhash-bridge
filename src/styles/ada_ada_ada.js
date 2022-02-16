// Ada Ada Ada
// Status: WIP // "WIP", "Ready"
// Twitter: @ada_ada_ada_art
// Fxhash: https://www.fxhash.xyz/u/Ada%20Ada%20Ada
// Wallet: tz1VvQf92Ni54LbTqJdCn2P9wQjS3LDHycbk

import Style from './style'

const fettepalette = (() => { const y = Object.defineProperty; const C = Math.pow; const I = e => y(e, '__esModule', { value: !0 }); const F = (e, r) => { I(e); for (const o in r)y(e, o, { get: r[o], enumerable: !0 }) }; const O = {}; F(O, { generateRandomColorRamp: () => G, generateRandomColorRampParams: () => N, hsv2hsl: () => R, hsv2hsx: () => c, pointOnCurve: () => M }); var R = (e, r, o, t = o - o * r / 2, p = Math.min(t, 1 - t)) => [e, p ? (o - t) / p : 0, t]; var c = (e, r, o, t) => t === 'hsl' ? R(e, r, o) : [e, r, o]; var M = (e, r, o, t, p = [0, 0], m = [1, 1]) => { const x = Math.PI / 2; const u = x / o; const s = r / o; let a = 0; let n = 0; if (e === 'lam\xE9') { const l = s * x; const i = 2 / (2 + 20 * t); const h = Math.cos(l); const f = Math.sin(l); a = Math.sign(h) * C(Math.abs(h), i), n = Math.sign(f) * C(Math.abs(f), i) } else if (e === 'arc')n = Math.cos(-Math.PI / 2 + r * u + t), a = Math.sin(Math.PI / 2 + r * u - t); else if (e === 'pow')a = Math.pow(1 - s, 1 - t), n = Math.pow(s, 1 - t); else if (e === 'powY')a = Math.pow(1 - s, t), n = Math.pow(s, 1 - t); else if (e === 'powX')a = Math.pow(s, t), n = Math.pow(s, 1 - t); else if (typeof e === 'function')a = e(s)[0], n = e(s)[1]; else throw new Error(`pointOnCurve() curveAccent parameter is expected to be "lam\xE9" | "arc" | "pow" | "powY" | "powX" or a function but \`${e}\` given.`); return a = p[0] + Math.min(Math.max(a, 0), 1) * (m[0] - p[0]), n = p[1] + Math.min(Math.max(n, 0), 1) * (m[1] - p[1]), [a, n] }; function G ({ total: e = 3, centerHue: r = 0, hueCycle: o = 0.3, offsetTint: t = 0.1, offsetShade: p = 0.1, curveAccent: m = 0, tintShadeHueShift: x = 0.1, curveMethod: u = 'arc', offsetCurveModTint: s = 0.03, offsetCurveModShade: a = 0.03, minSaturationLight: n = [0, 0], maxSaturationLight: l = [1, 1], colorModel: i = 'hsl' } = {}) { const h = []; const f = []; const w = []; for (let b = 1; b < e + 1; b++) { const [S, T] = M(u, b, e + 1, m, n, l); const d = (360 + (-180 * o + (r + b * (360 / (e + 1)) * o))) % 360; const k = c(d, S, T, i); h.push(k); const [P, X] = M(u, b, e + 1, m + s, n, l); const V = c(d, P, X, i); f.push([(d + 360 * x) % 360, V[1] - t, V[2] + t]); const [Y, H] = M(u, b, e + 1, m - a, n, l); const g = c(d, Y, H, i); w.push([(360 + (d - 360 * x)) % 360, g[1] - p, g[2] - p]) } return { light: f, dark: w, base: h, all: [...f, ...h, ...w] } } var N = { curveMethod: { default: 'lam\xE9', props: { options: ['lam\xE9', 'arc', 'pow', 'powY', 'powX'] } }, curveAccent: { default: 0, props: { min: -0.095, max: 1, step: 0.001 } }, total: { default: 9, props: { min: 3, max: 35, step: 1 } }, centerHue: { default: 0, props: { min: 0, max: 360, step: 0.1 } }, hueCycle: { default: 0.3, props: { min: -1.25, max: 1.5, step: 0.001 } }, offsetTint: { default: 0.01, props: { min: 0, max: 0.4, step: 0.001 } }, offsetShade: { default: 0.01, props: { min: 0, max: 0.4, step: 0.001 } }, tintShadeHueShift: { default: 0.01, props: { min: 0, max: 1, step: 0.001 } }, offsetCurveModTint: { default: 0.03, props: { min: 0, max: 0.4, step: 1e-4 } }, offsetCurveModShade: { default: 0.03, props: { min: 0, max: 0.4, step: 1e-4 } }, minSaturation: { default: 0, props: { min: 0, max: 1, step: 0.001 } }, minLight: { default: 0, props: { min: 0, max: 1, step: 0.001 } }, maxSaturation: { default: 1, props: { min: 0, max: 1, step: 0.001 } }, maxLight: { default: 1, props: { min: 0, max: 1, step: 0.001 } } }; return O })()
console.log(fettepalette)

const words = ['BRIDGE', 'PONT', 'BRO', 'BRÜCKE', 'BRUG', 'PUENTE', 'МОСТ', '橋', '다리', 'PONTE', 'पुल']
let word = 'BRIDGE'
let letterCount = 0
const palette = fettepalette.generateRandomColorRamp({
  total: 9,
  centerHue: fxrand() * 360,
  hueCycle: 0.3,
  curveMethod: 'lamé',
  curveAccent: 0,
  offsetTint: 0.01,
  offsetShade: 0.01,
  tintShadeHueShift: 0.01,
  offsetCurveModTint: 0.03,
  offsetCurveModShade: 0.03,
  minSaturationLight: [0, 0],
  maxSaturationLight: [1, 1]
})

export default class AdaAdaAdaStyle extends Style {
  constructor (gridSizeX, gridSizeY, s, projectionCalculator3d, p5) {
    super(gridSizeX, gridSizeY, s, projectionCalculator3d, p5)
    this.far = this._projectionCalculator3d.getProjectedPoint([0, this._gridSizeY, 0]).map(x => x * s)
    const farLeft = this._projectionCalculator3d.getProjectedPoint(
      [-this._gridSizeX / 2, this._gridSizeY, 0]).map(x => x * s)
    this.farSize = this.far[0] - farLeft[0]
    this.focal = [this.far[0], this.far[1] - this.farSize]
    console.log('this.focal', this.focal)
    // const wormhole = Math.floor(p5.random() * 4)
    // const palette = p5.random([0, 0, 0, 1, 2])
    // this.colors = createCols(palettes[palette])
  }

  beforeDraw () {
    this._p5.colorMode(this._p5.HSL, 360, 100, 100)
    // const fetteBg = palette.light[0]
    // const bgColor = this._p5.color(fetteBg[0], fetteBg[1] * 100, fetteBg[2] * 100)
    // this._p5.background(bgColor)
    this._p5.textAlign(this._p5.CENTER, this._p5.CENTER)
    word = this._p5.random(words)

    const sunEdges = Math.floor(this._p5.random(2, 10))
    const bgRadius = this._s * 2
    const bgStroke = bgRadius / 20
    // Draw bg
    this._p5.colorMode(this._p5.HSL, 360, 100, 100)
    this.drawDisc(bgRadius, bgStroke, palette.dark[1], palette.dark[3], sunEdges)

    const circleRadius = this._s / 4
    const circleStroke = 5
    // Draw sun
    this._p5.colorMode(this._p5.HSL, 360, 100, 100)
    this.drawDisc(circleRadius, circleStroke, palette.dark[4], palette.dark[8], sunEdges)
  }

  drawDisc (circleRadius, circleStroke, fetteDiscStart, fetteDiscEnd, edges) {
    this._p5.noFill()
    this._p5.strokeWeight(circleStroke + 2)

    const startColor = this._p5.color(fetteDiscStart[0], fetteDiscStart[1] * 100, fetteDiscStart[2] * 100)
    const endcolor = this._p5.color(fetteDiscEnd[0], fetteDiscEnd[1] * 100, fetteDiscEnd[2] * 100)

    this._p5.colorMode(this._p5.RGB)

    for (let rad = circleRadius; rad >= 0; rad -= circleStroke) {
      const lerpVal = this._p5.map(rad, 0, circleRadius, 0, 1)
      const interColor = this._p5.lerpColor(startColor, endcolor, lerpVal)
      this._p5.stroke(interColor)
      this._p5.beginShape()
      for (let i = 0; i < Math.PI * 2; i += Math.PI / edges) {
        const x = this.focal[0] + (Math.cos(i) * rad)
        const y = this.focal[1] + (Math.sin(i) * rad)
        this._p5.vertex(x, y)
      }
      this._p5.endShape(this._p5.CLOSE)
    }
  }

  drawTile (tilePoints, frontLeftCorner3DCoord, isBorder) {
    this._p5.colorMode(this._p5.HSL, 360, 100, 100)
    const lightestColors = palette.base.slice(3)
    const fetteFill = this._p5.random(lightestColors)
    const fillColor = this._p5.color(fetteFill[0], fetteFill[1] * 100, fetteFill[2] * 100)

    this._p5.fill(fillColor)
    this._p5.noStroke()
    // this._p5.textFont(font)
    this._p5.textSize(5)
    const middleX = tilePoints[0].x + (tilePoints[2].x - tilePoints[0].x) / 2
    const middleY = tilePoints[2].y + (tilePoints[0].y - tilePoints[2].y) / 2
    this._p5.push()
    this._p5.translate(middleX * this._s, middleY * this._s)
    const matrix = [
      1, 0.5 - middleX, // X
      0, 0.5 - middleY, // Y
      0, 0 // Z
    ]
    // this._p5.applyMatrix(matrix)
    const letter = word === 'पुल' ? 'पुल' : word.charAt(letterCount)
    this._p5.text(word, 0, 0)
    this._p5.pop()

    letterCount++
    letterCount = letterCount % word.length
  }

  afterDraw () {}

  static author () { return 'Ada Ada Ada' }

  static name () { return 'Text-to-bridge' }
}
