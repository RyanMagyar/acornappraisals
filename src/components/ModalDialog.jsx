import { Dialog } from "@mui/material";
import QuoteForm from "./QuoteForm";

const ModalDialog = ({ open, handleClose }) => {
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
      <QuoteForm handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;
