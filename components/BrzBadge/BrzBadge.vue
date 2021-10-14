<template>
  <div :class="classes">
    <!-- <span v-if="dot">O</span> -->
    <span>{{ label }}</span>
    <button v-if="removeBtn">X</button>
  </div>
</template>

<script>
export default {
  name: "brz-badge",
  props: {
    label: {
      type: String,
      required: true,
    },
    badgeType: {
      type: String,
      default: "basic",
      validator: function (value) {
        return ["basic", "rounded"].indexOf(value) !== -1;
      },
    },
    dot: {
      type: Boolean,
      default: false,
    },
    removeBtn: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "small",
      validator: function (value) {
        return ["small", "large"].indexOf(value) !== -1;
      },
    },
    theme: {
      type: String,
      default: "gray",
      validator: function (value) {
        return (
          [
            "pink",
            "purple",
            "indigo",
            "blue",
            "green",
            "yellow",
            "red",
            "gray",
          ].indexOf(value) !== -1
        );
      },
    },
  },
  computed: {
    classes() {
      return {
        'brz-badge': true,
        [`bg-${this.theme}-100`]: true,
        [`text-${this.theme}-800`]: true,
      };
    },
  },
};
</script>

<style>
.brz-badge {
  @apply inline-block px-2.5 py-0.5;
}
</style>
