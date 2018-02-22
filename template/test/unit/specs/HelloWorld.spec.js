import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

{{#alacarte}}
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VToolbar,
    transitions
  }{{#theme}},
  theme: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  }{{/theme}}
})
{{else}}
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify{{#theme}}, { theme: {
  primary: '#ee44aa',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}}{{/theme}})
{{/alacarte}}

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    {{#if_eq runner "karma"}}
      expect(vm.$el.querySelector('.hello h1').textContent)
    {{/if_eq}}
    {{#if_eq runner "jest"}}
      expect(vm.$el.textContent)
    {{/if_eq}}
    {{#if_eq runner "karma"}}.to.equal('Welcome to Your Vue.js App'){{/if_eq}}{{#if_eq runner "jest"}}.toContain('First, solve the problem. Then, write the code'){{/if_eq}}
  })
})
