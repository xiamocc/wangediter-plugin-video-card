/**
 * @description elem-to-html test
 * @author wangfupeng
 */

import elemToHtmlConf from '../../src/module/elem-to-html'
import { VideoCardElement } from '../../src/index'

describe('video-card elem-to-html', () => {
  const videos = '["https://news-bos.cdn.bcebos.com/mvideo/log-news.png"]'
  const VideoCard: VideoCardElement = {
    type: 'video-card',
    videos: '["https://news-bos.cdn.bcebos.com/mvideo/log-news.png"]',
    children: [{ text: '' }],
  }

  it('type', () => {
    expect(elemToHtmlConf.type).toBe('video-card')
  })

  it('elem to html', () => {
    const html = elemToHtmlConf.elemToHtml(VideoCard, '')
    expect(html).toBe(
      `<div data-w-e-type="video-card" class="editer-swiper" data-w-e-is-void data-videos="["https://news-bos.cdn.bcebos.com/mvideo/log-news.png"]">
    <div class="swiper-item">
      <img src="https://news-bos.cdn.bcebos.com/mvideo/log-news.png" />
    </div>
  </div>`
    )
  })
})
