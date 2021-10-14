<template>
  <input :type="type" />
</template>

<script>
export default {
  name: "brz-input",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
input {
  @apply border border-gray-700;
}
</style>
