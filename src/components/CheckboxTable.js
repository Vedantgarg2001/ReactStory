import React from 'react';
import PropTypes from 'prop-types';
import './CheckboxTable.css';

const CheckboxTable = ({ data, onCheckboxChange }) => {
  const handleCheckboxChange = (rowIndex, columnIndex) => {
    onCheckboxChange(rowIndex, columnIndex);
  };

  return (
    <table className="checkbox-table">
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, columnIndex) => (
              <td key={columnIndex}>
                {typeof cell === 'boolean' ? (
                  <input
                    type="checkbox"
                    checked={cell}
                    onChange={() => handleCheckboxChange(rowIndex, columnIndex)}
                  />
                ) : (
                  cell
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

CheckboxTable.propTypes = {
  data: PropTypes.shape({
    headers: PropTypes.arrayOf(PropTypes.string).isRequired,
    rows: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
      )
    ).isRequired,
  }).isRequired,
  onCheckboxChange: PropTypes.func.isRequired,
};

export default CheckboxTable;
