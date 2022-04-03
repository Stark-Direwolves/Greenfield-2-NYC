import React from 'react';

function Size({ sku, sku_id }) {
  return (
    <option value={sku_id}>{sku.size}</option>
  );
}

export default Size;