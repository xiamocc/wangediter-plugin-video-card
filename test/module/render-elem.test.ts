/**
 * @description render elem test
 * @author wangfupeng
 */

import createEditor from '../utils/create-editor'
import renderElemConf from '../../src/module/render-elem'
import { VideoCardElement } from '../../src/index'

describe('video-card render-elem', () => {
  const editor = createEditor()
  const videoCard: VideoCardElement = {
    type: 'video-card',
    videos: '["https://news-bos.cdn.bcebos.com/mvideo/log-news.png"]',
    children: [{ text: '' }],
  }

  it('type', () => {
    expect(renderElemConf.type).toBe('video-card')
  })

  it('render elem', () => {
    const vnode = renderElemConf.renderElem(videoCard, null, editor) as any
    expect(vnode.sel).toBe('div')
    expect(vnode.data.props.contentEditable).toBe(false)

    // const itemVnode = vnode.children[0]
    // expect(itemVnode.text).toBe('["https://news-bos.cdn.bcebos.com/mvideo/log-news.png"]')
  })
})
