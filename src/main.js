import App from './components/app'
//import {MdSwitch,MdButton,MdInput,MdField} from 'vue-material/dist/components'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Vue from 'vue'

// Vue.use(MdSwitch)
// Vue.use(MdButton)
// Vue.use(MdField)
// Vue.use(MdInput)
Vue.use(VueMaterial)

new App({
    el:'#app'
})