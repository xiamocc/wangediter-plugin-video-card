/**
 * @description render elem
 * @author wangfupeng
 */

import Base64 from '../utils/base'
import { h, VNode } from 'snabbdom'
import { VideoCardElement } from './custom-types'
import { PLAYER_PNG } from '../constants/icon-svg'
import { DomEditor, IDomEditor, SlateElement } from '@wangeditor/editor'

function renderVideoCard(elem: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {
  const selected = DomEditor.isNodeSelected(editor, elem) // 当前节点是否选中
  const { videos } = elem as VideoCardElement
  const itemNode: VNode[] = []
  const base = new Base64()
  const videosStr: string = videos ? base.decode(videos) : '[]'
  const videosArr: Array<string> = JSON.parse(videosStr)
  // 循环生成容器
  for (const video of videosArr) {
    const item = h(
      'div',
      {
        props: {
          className: 'w-e-textarea-video-card-item',
        },
        dataset: {
          url: video,
        },
        on: {
          click: e => {
            const url = (e.target as HTMLElement).dataset.url
            editor.emit('clickVideoCard', url)
          },
        },
      },
      h('img', {
        props: {
          src: PLAYER_PNG,
          className: 'w-e-textarea-video-card-item-img',
        },
      })
    )
    itemNode.push(item)
  }
  const style = {
    'justify-items': itemNode.length > 1 ? 'center' : 'start',
  }
  // 主容器
  const vnode = h(
    'div',
    {
      props: {
        contentEditable: false,
        className: 'w-e-textarea-video-card-container',
      },
      style: style,
      dataset: {
        selected: selected ? 'true' : '', // 标记为 选中
      },
      on: {
        mousedown: event => event.preventDefault(),
      },
    },
    itemNode
  )

  return vnode
}

const conf = {
  type: 'video-card', // 节点 type ，重要！！！
  renderElem: renderVideoCard,
}

export default conf
