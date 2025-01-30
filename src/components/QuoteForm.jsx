import { TextField, Button, MenuItem } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
const QuoteForm = ({ handleClose }) => {
  const [value, setValue] = useState("+1");
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const formik = useFormik({
    initialValues: {
      Name: "a",
      Email: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    },
  });
  const states = [
    {
      value: "Michigan",
      label: "Michigan",
    },
  ];
  const referrals = [
    {
      value: "Google",
      label: "Google",
    },
    {
      value: "Yelp",
      label: "Yelp",
    },
    {
      value: "Facebook",
      label: "Facebook",
    },
    {
      value: "Angi",
      label: "Angi",
    },
    {
      value: "Referral",
      label: "Referral",
    },
  ];
  const timeSpans = [
    {
      value: "Within a Week",
      label: "Within a Week",
    },
    {
      value: "1-2 Weeks",
      label: "1-2 Weeks",
    },
    {
      value: "2-3 Weeks",
      label: "2-3 Weeks",
    },
    {
      value: "3-4 Weeks",
      label: "3-4 Weeks",
    },
    {
      value: "4-6 Weeks",
      label: "4-6 Weeks",
    },
    {
      value: "6-8 Weeks",
      label: "6-8 Weeks",
    },
    {
      value: "2+ Months",
      label: "2+ Months",
    },
  ];

  const propertySize = [
    {
      value: "0-600 sq. ft.",
      label: "0-600 sq. ft.",
    },
    {
      value: "600-1,100 sq. ft.",
      label: "600-1,100 sq. ft.",
    },
    {
      value: "1,100-1,600 sq. ft.",
      label: "1,100-1,600 sq. ft.",
    },
    {
      value: "1,600-2,100 sq. ft.",
      label: "1,600-2,100 sq. ft.",
    },
    {
      value: "2,100-2,600 sq. ft.",
      label: "2,100-2,600 sq. ft.",
    },
    {
      value: "2,600-3,100 sq. ft.",
      label: "2,600-3,100 sq. ft.",
    },
    {
      value: "3,100-3,600 sq. ft.",
      label: "3,100-3,600 sq. ft.",
    },
    {
      value: "3,600-4,100 sq, ft.",
      label: "3,600-4,100 sq, ft.",
    },
    {
      value: "4,100+ sq. ft.",
      label: "4,100+ sq. ft.",
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
    {
      value: "Other",
      label: "Other",
    },
  ];

  return (
    <div className="">
      <form className="flex flex-col p-10" onSubmit={formik.handleSubmit}>
        <h1 className="h2 mb-5 text-n-1 mx-auto">Get a Quote</h1>
        <p className="pt-5">Personal Information</p>
        <div className="lg:flex lg:gap-5">
          <TextField
            id="Name"
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            required
            value={formik.values.Name}
            onChange={formik.handleChange}
          />
          <TextField
            id="Email"
            label="Email"
            variant="outlined"
            type="email"
            margin="normal"
            value={formik.values.Email}
            onChange={formik.handleChange}
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
            defaultValue=""
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
            label="Property Size"
            select
            defaultValue="0-600 sq. ft."
            variant="outlined"
            margin="normal"
            fullWidth
            required
          >
            {propertySize.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="lg:flex lg:gap-5">
          <TextField
            label="Appraisal Needed Time"
            select
            defaultValue=""
            variant="outlined"
            margin="normal"
            fullWidth
            required
          >
            {timeSpans.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="How Did You Find Us? "
            select
            defaultValue="Google"
            variant="outlined"
            margin="normal"
            fullWidth
          >
            {referrals.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="flex gap-5 justify-center">
          <Button
            onClick={handleClose}
            size="large"
            color="error"
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            type="submit"
            size="large"
            variant="contained"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
