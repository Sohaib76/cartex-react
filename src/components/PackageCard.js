import React from "react";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { Grid } from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#d12860",
  },
});

function PackageCard(props) {
  const {
    id,
    name,
    image,
    numberOfItem,
    packagePrice,
    trending,
    price,
    items,
  } = props.packages;


  return (
    <>
      <Grid
        item
        sm={12}
        md={6}
        lg={4}
        style={{
          width: "fit-content",
          maxWidth: "500px",
          margin: "0 auto",
          cursor: "pointer",
        }}
      >
        <div className="border-2 border-solid rounded-xl border-gray-200 	">
          <div className='relative'>
          <div className="absolute flex flex-col gap-2 top-0 mt-2 right-0 mr-2 ">
            <IconButton style={{background:"white", borderRadius:"50%" }} onClick={props.editHandler}>
              <EditIcon className='text-primary '  />
            </IconButton>
            <IconButton style={{background:"white", borderRadius:"50%" }} onClick={props.deleteHandler} >
              <DeleteIcon className='text-primary  ' />
            </IconButton>
          </div>
          </div>
          <div className="p-4 flex flex-col gap-2 ">
            <div className="flex items-center justify-between">
              <p
                className="text-lg font-bold text-primary"
              >
                {name}
              </p>
            </div>
            
              
                <div className="flex items-center justify-start">
              <StyledRating
                name="customized-color"
                value={4.9}
                precision={0.5}
                readOnly
              />
              <p className="font-semibold text-sm ml-4 text-[#2E4765]">
                4 Reviews
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start gap-2 max-w-[300px] flex-wrap">
              </div>
              <p className="text-lg font-bold text-primary whitespace-nowrap">
               dd Pkr
              </p>
            </div>
              
              <div className="flex items-center justify-between">
              <p
                className="text-lg font-bold text-primary"
              >
                dd
              </p>
              <p className="text-lg font-bold text-primary whitespace-nowrap">
                ddf Pkr
              </p>
            </div>
          </div>
        </div>
      </Grid>
    </>
  );
}

export default PackageCard;
