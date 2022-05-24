import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "fit-content",
  maxWidth: "90%",
  bgcolor: "background.paper",
  boxShadow: 34,
  borderRadius: "10px",
  outline: "none",
};

export default function ModalPopup({ modal, setModal, children, widow }) {
  const handleClose = () => setModal(false);
  return (
    <Modal
      open={modal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className="shadow-lg w-[300px]  md:w-[380px]">
        {children}
      </Box>
    </Modal>
  );
}
