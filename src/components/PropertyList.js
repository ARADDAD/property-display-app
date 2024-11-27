import React, { useState, useEffect } from 'react';
import SpaceList from './SpaceList';
import { fetchProperties } from '../services/apiService';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const data = await fetchProperties();
        setProperties(data);
      } catch (error) {
        console.error("Failed to load properties:", error);
      }
    };

    loadProperties();
  }, []);

  return (
    <div>
      <h1>Properties</h1>
      {properties.map((property, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{property.propertyName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <strong>Features:</strong> 
              {Array.isArray(property.features) ? property.features.join(", ") : 'No features available'}
            </Typography>
            <Typography>
              <strong>Highlights:</strong> 
              {Array.isArray(property.highlights) ? property.highlights.join(", ") : 'No highlights available'}
            </Typography>
            <Typography>
              <strong>Transportation:</strong> 
              {Array.isArray(property.transportation) ? property.transportation.join(", ") : 'No transportation details available'}
            </Typography>
            <SpaceList spaces={property.spaces} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default PropertyList;
