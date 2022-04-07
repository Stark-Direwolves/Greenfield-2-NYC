import React from 'react';

function Table({ feature }) {
  return (
    <tr>
      <td>x</td>
      <td>
        {feature.feature}
      </td>
      <td>
        {feature.value}
      </td>
      <td>x</td>
    </tr>
  );
}

export default Table;
