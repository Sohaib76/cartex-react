import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion(props) {
 
  const style = {
    fontSize: "34px",
    padding:"0px",
    margin: "10px",
    borderRadius:"102px",
    "&.Mui-expanded	": {
      color: "#F47521",
      
    },
    "&.MuiAccordionDetails-root": {
      color: "#F47521",
      fontWeight: "bold"
    },
    "&.MuiPaper-root": {
      borderRadius: "12px !important",
      overflow: "hidden",
      margin:"8px"
    },
    // "&.MuiPaper-root-MuiAccordion-root.Mui-expanded": {
    //   margin: "0px !important",
    //   padding:"0px !important"
    // }
    // .css-1xzlyf4-MuiPaper-root-MuiAccordion-root.Mui-expanded
  
  };
  const styling = {
    "&.css-yw020d-MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      color:"#F47521 ",
    },  
  }
  const styles = {
    "&.MuiAccordionDetails-root": {
      background: "#EEEEEE",
    }
  }

  return (
    <div>
      <Accordion  sx={style}>
        <AccordionSummary
           sx={style}
          expandIcon={<ExpandMoreIcon  style={styling} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        
        >
          <div className='font-bold text-[17px]  '>  {props.title}  </div>
          {/* <Typography className='fw-bold' >{props.title}</Typography> */}
        </AccordionSummary >
        <hr/>

        <AccordionDetails sx={styles}>
          <div className='text-[15px]  text-[#707070] bg-[#EEEEEE]'>
            {props.desc}
          </div>
          {/* <Typography  >
            {props.desc}
          </Typography> */}
        </AccordionDetails>
      </Accordion>
 
    </div>
  );
}