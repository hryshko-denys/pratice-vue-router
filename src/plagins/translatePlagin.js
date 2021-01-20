export default {
  install(app) {
    app.config.globalProperties.$alert = text => {
      window.alert(text)
    }
  }
}