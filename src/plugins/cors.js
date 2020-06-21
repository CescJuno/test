import co from 'cors'

// insert all your cors logic here

export const cors = co

export default {
  install (Vue, options) {
    Vue.prototype.$cors = co
  }
}
