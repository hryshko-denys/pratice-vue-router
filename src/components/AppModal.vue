<template>
  <div class="modal-backdrop" @click="$emit('close-modal')"></div>
  <div class="modal">
    <h3>This is heading of modal window</h3>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo et modi omnis dolores architecto maiores praesentium? Eos commodi laborum ipsam?</p>
  </div>
</template>

<script>
export default {
  emits: ['close-modal'],
};
</script>