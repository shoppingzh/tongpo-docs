import VueCompositionAPI from '@vue/composition-api'
import Antd from 'ant-design-vue'
import { init } from 'tongpo/lib/amap'
import 'ant-design-vue/dist/antd.css'

export default ({
  Vue,
  isServer
}) => {
  Vue.use(VueCompositionAPI)
  Vue.use(Antd)

  init({
    key: '7a7fffcc3950edbb3b59fa916211d010'
  })
}
