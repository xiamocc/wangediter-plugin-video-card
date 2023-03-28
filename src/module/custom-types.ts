/**
 * @description link-card element
 * @author wangfupeng
 */

import { SlateText } from '@wangeditor/editor'

type EmptyText = {
  text: ''
}
export type VideoCardElement = {
  type: 'video-card'
  videos?: string
  children: EmptyText[] // void 元素必须有一个空 text
}
