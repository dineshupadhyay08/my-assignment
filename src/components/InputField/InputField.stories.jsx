import InputField from "./InputField";

export default {
  title: "Components/InputField",
  component: InputField,
  argTypes: {
    variant: { control: "select", options: ["outlined", "filled", "ghost"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    type: { control: "select", options: ["text", "password"] },
  },
};

const Template = (args) => <InputField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Email",
  placeholder: "Enter your email",
  helperText: "We will not share your email",
  variant: "outlined",
  size: "md",
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: "Username",
  placeholder: "Enter username",
  invalid: true,
  errorMessage: "Username is required",
};

// This input component supports validation, disabled state, and password type.

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled",
  placeholder: "Can't type here",
  disabled: true,
};

export const PasswordField = Template.bind({});
PasswordField.args = {
  label: "Password",
  placeholder: "Enter password",
  type: "password",
};
