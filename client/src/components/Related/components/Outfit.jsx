import React, { useState } from 'react';
import Container from '../styles/Container.styled';
import AddOutfit from './AddOutfit.jsx';

function Outfit() {
  const [outfits, setOutfits] = useState([]);

  return (
    <div id="outfit">
      <h3>My Outfits</h3>
      <Container>
        <AddOutfit />
      </Container>
    </div>
  );
}
export default Outfit;
