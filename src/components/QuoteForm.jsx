import { TextField, Button, MenuItem } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
const QuoteForm = ({ handleClose }) => {
  const [value, setValue] = useState("");
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const states = [
    {
      value: "Michigan",
      label: "Michigan",
    },
  ];

  const appraisalTypes = [
    {
      value: "Prelisting",
      label: "Prelisting",
    },
    {
      value: "Estate Tax/Date of Death",
      label: "Estate Tax/Date of Death",
    },
    {
      value: "Real Estate Assessor",
      label: "Real Estate Assessor",
    },
    {
      value: "Divorce",
      label: "Divorce",
    },
    {
      value: "Financial Planning/Trusts",
      label: "Financial Planning/Trusts",
    },
    {
      value: "PMI",
      label: "PMI",
    },
    {
      value: "Bankruptcy",
      label: "Bankruptcy",
    },
  ];

  return (
    <div className="">
      <form className="flex flex-col p-10">
        <h1 className="h2 mb-5 text-n-1 mx-auto">Get a Quote</h1>
        <p className="pt-5">Personal Information</p>
        <div className="lg:flex lg:gap-5">
          <TextField
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            margin="normal"
            fullWidth
            required
          />
        </div>
        <div className="lg:flex flex-grow lg:gap-5">
          <MuiTelInput
            label="Phone Number"
            variant="outlined"
            value={value}
            onChange={handleChange}
            className="lg:w-1/2 flex-grow width-full mt-5"
            fullWidth
            required
          />
          <div className="hidden lg:block w-1/2 "></div>
        </div>
        <p className="pt-5">Property to be Appraised Address</p>
        <div className="lg:flex lg:gap-5">
          <TextField
            label="Street Address"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            label="City"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
        </div>
        <div className="lg:flex lg:gap-5">
          <TextField
            label="State"
            select
            defaultValue="Michigan"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          >
            {states.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Zip Code"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
        </div>
        <p className="pt-5">Additional Information</p>
        <div className="lg:flex lg:gap-5">
          <TextField
            label="Appraisal Type"
            select
            defaultValue="Appraisal Type"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          >
            {appraisalTypes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            margin="normal"
            fullWidth
            required
          />
        </div>
        <Button onClick={handleClose} variant="contained">
          Close
        </Button>
      </form>
    </div>
  );
};

export default QuoteForm;
