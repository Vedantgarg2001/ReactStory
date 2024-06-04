import React, { useState, useEffect } from 'react';
import CheckboxTable from '../components/CheckboxTable';

export default {
  title: 'Ecommerce/CheckboxTable',
  component: CheckboxTable,
  argTypes: {
    data: { control: 'object' },
  },
};

const Template = (args) => {
  const [tableData, setTableData] = useState(args.data);

  useEffect(() => {
    setTableData(args.data);
  }, [args.data]);

  const handleCheckboxChange = (rowIndex, columnIndex) => {
    const newData = { ...tableData };
    newData.rows[rowIndex][columnIndex] = !newData.rows[rowIndex][columnIndex];
    setTableData(newData);
  };

  return <CheckboxTable data={tableData} onCheckboxChange={handleCheckboxChange} />;
};

export const Default = Template.bind({});
Default.args = {
  data: {
    headers: ['Name', 'Age', 'Active'],
    rows: [
      ['John Doe', '28', true],
      ['Jane Smith', '34', false],
      ['Sam Johnson', '45', true],
    ],
  },
};
