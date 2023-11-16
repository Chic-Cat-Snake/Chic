import React from 'react';

const Outfit = (props) => {
  const { aws_image, description, casual, smart_casual, business_attire, formal, athleisure } = props.outfitData;

  const categoryNames = [];
  if (casual) categoryNames.push('Casual');
  if (smart_casual) categoryNames.push('Smart Casual');
  if (business_attire) categoryNames.push('Business Attire');
  if (formal) categoryNames.push('Formal');
  if (athleisure) categoryNames.push('Athleisure');

  return (
    <div id='outfit'>
      <img className='outfitsImg' src={'outfits/uploads/' + aws_image}
        alt="outfitImage prop" />
      <h3>{description}</h3>
      {categoryNames.length > 0 && (
        <div>
          <h4>Categories:</h4>
          {categoryNames.map((category, idx) => (
            <div key={idx}>
              {category}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Outfit;