import { App } from 'vue'

const modules = import.meta.globEager('./*/*.vue')
console.log(modules)

function getComponentName(path: string) {
  const re = new RegExp(/.*?components[/\\](\w+)[/\\](.+)?.vue$/g)
  const result = re.exec(path)
  return result ? `${result[1]}${result[2] === 'index' ? '' : `-${result[2]}`}` : null
}

export default function(app: App, options: object) {
  Object.keys(modules).forEach(path => {
    const component = modules[path].default
    if (!component) return
    const componentName = getComponentName(component.__file)
    if (!componentName) return
    app.component(componentName, component)
  })
}
