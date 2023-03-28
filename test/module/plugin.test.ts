/**
 * @description plugin test
 * @author wangfupeng
 */

import { DomEditor } from '@wangeditor/editor'
import createEditor from '../utils/create-editor'
import withLinkCard from '../../src/module/plugin'
import { VideoCardElement } from '../../src/index'

describe('video-card plugin', () => {
  const editor = withLinkCard(createEditor())
  const videoCard: VideoCardElement = {
    type: 'video-card',
    videos: '["https://news-bos.cdn.bcebos.com/mvideo/log-news.png"]',
    children: [{ text: '' }],
  }

  it('isVoid', () => {
    expect(editor.isVoid(videoCard)).toBe(true)
  })

  it('如果 video-card 是 editor 最后一个 elem，会追加一个 paragraph', () => {
    editor.insertNode(videoCard)
    const elemLength = editor.children.length
    const lastElem = editor.children[elemLength - 1]
    expect(DomEditor.getNodeType(lastElem)).toBe('paragraph')
  })
})
