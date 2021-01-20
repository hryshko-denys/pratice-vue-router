<template>
  <div class="container">
    <app-alert
      v-if="alert"
      text="It's very important text"
      title="Warning!!!"
      @close="alert = false"
    />
    <div class="card">
      <button class="primary btn" @click="toggleAlert">{{ primaryButtonName }}</button>
    </div>
  </div>
</template>

<script>
import AppAlert from './AppAlert'
import alertMixin from '../alertMixin.js'
export default {
  mixins: [alertMixin],
  components: {AppAlert},
}
</script>
