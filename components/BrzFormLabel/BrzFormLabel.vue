<template>
  <label>{{ labelText }}</label>
</template>

<script>
export default {
  name: "brz-label",
  props: {
    labelText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
input {
  @apply font-medium text-gray-700;
}
</style>
