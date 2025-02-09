import { Dialog } from "@mui/material";
import QuoteForm from "./QuoteForm";
import ContactForm from "./ContactForm";

const ModalDialog = ({ open, isContact, QuoteType, handleClose }) => {
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
        <QuoteForm QuoteType={QuoteType} handleClose={handleClose} />
      )}
    </Dialog>
  );
};

export default ModalDialog;
