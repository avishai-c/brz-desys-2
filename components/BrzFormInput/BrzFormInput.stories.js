import BrzInput from "./BrzFormInput.vue";
import "../tailwind.css";

export default {
  title: "Components/Input",
  component: BrzInput,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["text", "email", "number", "phone", ],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BrzInput },
  template: '<brz-input v-bind="$props" />',
});

export const Text = Template.bind({});
Text.args = {
  type: "text",
};
