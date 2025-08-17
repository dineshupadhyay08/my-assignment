// import DataTable from "./DataTable";

// export default {
//   title: "Components/DataTable",
//   component: DataTable,
// };

// const columns = [
//   { key: "name", title: "Name", dataIndex: "name", sortable: true },
//   { key: "age", title: "Age", dataIndex: "age", sortable: true },
//   { key: "email", title: "Email", dataIndex: "email" },
// ];

// const data = [
//   { name: "Dinesh", age: 23, email: "dinesh@example.com" },
//   { name: "Ravi", age: 25, email: "ravi@example.com" },
//   { name: "Aman", age: 22, email: "aman@example.com" },
// ];

// const Template = (args) => <DataTable {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   data,
//   columns,
// };

// // This component displays tabular data. Supports loading, empty state and selectable rows.

// export const Loading = Template.bind({});
// Loading.args = {
//   data: [],
//   columns,
//   loading: true,
// };

// export const Empty = Template.bind({});
// Empty.args = {
//   data: [],
//   columns,
// };

// export const Selectable = Template.bind({});
// Selectable.args = {
//   data,
//   columns,
//   selectable: true,
// };


import DataTable from "./DataTable";

export default {
  title: "Components/DataTable",
  component: DataTable,
};

const columns = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
  { key: "email", title: "Email", dataIndex: "email" },
];

const data = [
  { name: "Dinesh", age: 23, email: "dinesh@example.com" },
  { name: "Ravi", age: 25, email: "ravi@example.com" },
  { name: "Aman", age: 22, email: "aman@example.com" },
];

const Template = (args) => <DataTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  data,
  columns,
};

export const Loading = Template.bind({});
Loading.args = {
  data: [],
  columns,
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  data: [],
  columns,
};

export const Selectable = Template.bind({});
Selectable.args = {
  data,
  columns,
  selectable: true,
};
