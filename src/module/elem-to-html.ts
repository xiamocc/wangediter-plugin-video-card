/**
 * @description elem to html
 * @author wangfupeng
 */

import { SlateElement } from '@wangeditor/editor'
import { VideoCardElement } from './custom-types'
// 生成 html 的函数
function videoCardToHtml(elem: SlateElement, childrenHtml: string): string {
  const { videos = '' } = elem as VideoCardElement
  const html = `<div data-w-e-type="video-card" data-w-e-is-void data-videos="${videos}"></div>`
  return html
}

// 配置
const conf = {
  type: 'video-card', // 节点 type ，重要！！！
  elemToHtml: videoCardToHtml,
}

export default conf
