export default  {
  data() {
    return {
      alert: false,
    }
  },

  methods: {
    toggleAlert() {
      this.alert = !this.alert
    }
  },

  computed: {
    primaryButtonName() {
      return this.alert ? 'Hide message' : 'Show message'
    }
  }
}
