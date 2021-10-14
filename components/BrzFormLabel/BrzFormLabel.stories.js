import BrzLabel from "./BrzFormLabel.vue";
import "../tailwind.css";

export default {
  title: "Components/Label",
  component: BrzLabel,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BrzLabel },
  template: '<brz-label v-bind="$props" />',
});

export const Text = Template.bind({});
Text.args = {
  labelText: "I'm a label",
};
