<template>
  <div class="form-field">
    <brz-label :labelText="label"></brz-label>
    <brz-input :inputType="inputType"></brz-input>
  </div>
</template>

<script>
import BrzInput from "@avishaic/vue-form-input-component";
import BrzLabel from "@avishaic/vue-form-label-component";

export default {
  name: "brz-form-field",
  props: {
    label: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      required: true,
    },
    layout: {
      type: String,
      required: false,
      default: "vertical",
    },
  },
  components: {
    BrzInput,
    BrzLabel,
  },
};
</script>

<style>
.form-field {
  @apply flex;
}
</style>