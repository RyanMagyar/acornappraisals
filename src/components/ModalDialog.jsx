import { Dialog } from "@mui/material";
import QuoteForm from "./QuoteForm";
import ContactForm from "./ContactForm";

const ModalDialog = ({ open, isContact, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      disableScrollLock={false}
      fullWidth
      maxWidth="lg"
    >
      {isContact ? (
        <ContactForm handleClose={handleClose} />
      ) : (
        <QuoteForm handleClose={handleClose} />
      )}
    </Dialog>
  );
};

export default ModalDialog;
