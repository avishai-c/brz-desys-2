import BrzBadge from "./BrzBadge.vue";
import '../tailwind.css'

export default {
  title: "Components/Badge",
  component: BrzBadge,
  argTypes: {
    badgeType: { control: { type: "select", options: ["basic", "rounded"] } },
    size: { control: { type: "select", options: ["small", "large"] } },
    theme: {
      control: {
        type: "select",
        options: [
          "pink",
          "purple",
          "indigo",
          "blue",
          "green",
          "yellow",
          "red",
          "gray",
        ],
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BrzBadge },
  template: '<brz-badge v-bind="$props" />',
});

export const Basic = Template.bind({});
Basic.args = {
  badgeType: "basic",
  label: 'Badge',
};
