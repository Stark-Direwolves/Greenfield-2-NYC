import React from 'react';
import { CheckIcon } from '@heroicons/react/outline';

function Table({ feature, current, related }) {
  const toggleFeature = (product, features) => {
    for (let i = 0; i < product.length; i += 1) {
      if (product[i].feature === features.feature && product[i].value === features.value) {
        return true;
      }
    }
    return false;
  };

  return (
    <tr>
      <td className="center">{toggleFeature(current, feature) ? <CheckIcon /> : null}</td>
      <td>
        <b>{feature.feature}</b> : {feature.value}
      </td>
      <td className="center">{toggleFeature(related, feature) ? <CheckIcon /> : null}</td>
    </tr>
  );
}

export default Table;
