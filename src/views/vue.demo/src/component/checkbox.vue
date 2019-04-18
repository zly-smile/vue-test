<template>
  <div>
    <input type="checkbox" :checked="checked" @change="onChange">
  </div>
</template>
<script>
export default {
  name: 'ly-checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Boolean
  },
  methods: {
    onChange (event) {
      console.log(event.target.value, '1234')
      this.$emit('change', event.target.checked)
    }
  }
}
</script>
