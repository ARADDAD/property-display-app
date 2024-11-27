import React from 'react';
import RentRollList from './RentRollList';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const SpaceList = ({ spaces }) => {
  return (
    <div>
      {spaces.map((space, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{space.SpaceName}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RentRollList rentRoll={space.RentRoll} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default SpaceList;
