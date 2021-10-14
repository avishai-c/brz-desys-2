import BrzFormField from "./BrzFormField.vue";
import "../tailwind.css";

export default {
  title: "Components/Input",
  component: BrzFormField,
  argTypes: {
    inputType: {
      control: {
        type: "select",
        options: ["text", "email", "number", "phone", "password"],
      },
    },
    layout: {
      control: {
        type: "select",
        options: ["vertical", "horizontal"],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BrzFormField },
  template: '<brz-form-field v-bind="$props" />',
});

export const Text = Template.bind({});
Text.args = {
  inputType: "text",
};
