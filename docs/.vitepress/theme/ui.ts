import { App } from 'vue'
import { Button, Tag, Input, DatePicker, Alert, Modal, Row, Col, } from 'ant-design-vue'
import 'ant-design-vue/lib/button/style/index.css'
import 'ant-design-vue/lib/tag/style/index.css'
import 'ant-design-vue/lib/input/style/index.css'
import 'ant-design-vue/lib/date-picker/style/index.css'
import 'ant-design-vue/lib/alert/style/index.css'
import 'ant-design-vue/lib/modal/style/index.css'
import { init } from 'tongpo/lib/amap'

const components = [
  Button,
  Tag,
  Input,
  DatePicker,
  Alert,
  Modal,
  Row,
  Col
]

init({
  key: '7a7fffcc3950edbb3b59fa916211d010'
})

export default function(app: App) {
  components.forEach(component => {
    app.use(component)
  })
}
