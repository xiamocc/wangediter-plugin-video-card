/**
 * @description parse elem html
 * @author wangfupeng
 */

import { DOMElement } from '../utils/dom'
import { IDomEditor, SlateDescendant, SlateElement } from '@wangeditor/editor'
import { VideoCardElement } from './custom-types'

function parseHtml(
  elem: DOMElement,
  children: SlateDescendant[],
  editor: IDomEditor
): SlateElement {
  const videos = elem.getAttribute('data-videos') || ''
  return {
    type: 'video-card',
    videos,
    children: [{ text: '' }], // void node 必须有一个空白 text
  } as VideoCardElement
}

const parseHtmlConf = {
  selector: 'div[data-w-e-type="video-card"]',
  parseElemHtml: parseHtml,
}

export default parseHtmlConf
