import Widget from './src/index'

Widget.install = Vue => Vue.component(Widget.name, Widget)

export default Widget