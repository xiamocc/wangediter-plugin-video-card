/**
 * @description parse elem html test
 * @author wangfupeng
 */

import createEditor from '../utils/create-editor'
import parseHtmlConf from '../../src/module/parse-elem-html'
import { VideoCardElement } from '../../src/module/custom-types'

describe('parse elem html', () => {
  const editor = createEditor()

  it('selector', () => {
    expect(parseHtmlConf.selector).toBe('div[data-w-e-type="video-card"]')
  })

  it('parse html', () => {
    // html 格式
    const videos = '["https://news-bos.cdn.bcebos.com/mvideo/log-news.png"]'
    const linkCardHtml = `<div data-w-e-type="video-card" class="editer-swiper" data-w-e-is-void data-videos="${videos}">
    <div class="swiper-item">
      <img src="https://news-bos.cdn.bcebos.com/mvideo/log-news.png" />
    </div>
  </div>`

    // html 生成 elem
    const div = document.createElement('div')
    div.innerHTML = linkCardHtml
    const elem = div.children[0]

    const linkCard = parseHtmlConf.parseElemHtml(elem, [], editor) as VideoCardElement
    expect(linkCard.type).toBe('video-card')
  })
})
