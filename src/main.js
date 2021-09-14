import Vue from 'vue'
import App from './Demo.vue'
import rightMenu from './index.js'
import { name, version } from '../package.json'

Vue.config.productionTip = false
Vue.use(rightMenu, (event, options) => {
  return [
    ...options,
    { type: 'hr' },
    {
      type: 'ul',
      text: '关于',
      children: [
        {
          type: 'li',
          text: `${name} ${version}`,
          disabled: true
        },
        { type: 'hr' },
        {
          type: 'li',
          text: 'Github 仓库',
          callback: () => window.open('https://github.com/buuing/vue-right-menu')
        },
        {
          type: 'li',
          text: 'Bug 反馈',
          callback: () => window.open('https://github.com/buuing/vue-right-menu/issues/new')
        },
        { type: 'hr' },
        {
          type: 'li',
          text: '入门教程',
          disabled: true
        },
        {
          type: 'li',
          text: '高级配置',
          disabled: true
        },
        { type: 'hr' },
        {
          type: 'li',
          text: '查看历史更新',
          disabled: true
        },
        { type: 'hr' },
        {
          type: 'li',
          text: '📋 开源协议 License MIT',
          callback: () => window.open('https://github.com/buuing/vue-right-menu/blob/master/LICENSE')
        }
      ]
    }
  ]
})

new Vue({
  render: h => h(App)
}).$mount('#app')
