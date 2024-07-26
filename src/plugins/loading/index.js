import Vue from 'vue'
let loadingConstructor = Vue.extend(require('./loading.vue').default), instance
let status = ''

const loading = options => {
  if (typeof options === 'string') {
    options = {
      msg: options
    }
  }
  // 生成组件
  const instance = new loadingConstructor({
    data: options
  })
  // 组件需要挂载在dom元素上
  instance.vm = instance.$mount()
  const loading = document.getElementsByClassName('loading-mask')
  // console.log(document.getElementsByClassName('loading-mask'))
  if (loading&&loading.length){
    // loading[0].style.display = 'flex'
  }else{
    document.body.appendChild(instance.$el) // instance.vm.$el 等价于 instance.$el
  }
  return instance // instance.vm.$el 等价于 instance.$el
}
export default {
  open (options) {
    loading(options).open()
  },
  close (options) {
    loading(options).close()
  }
}
