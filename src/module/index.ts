/**
 * @description module entry
 * @author wangfupeng
 */

import { IModuleConf } from '@wangeditor/editor'
import withVideoCard from './plugin'
import renderElemConf from './render-elem'
import elemToHtmlConf from './elem-to-html'
import parseHtmlConf from './parse-elem-html'

const module: Partial<IModuleConf> = {
  editorPlugin: withVideoCard,
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
}

export default module
