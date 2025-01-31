import { TextField, Button, MenuItem } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { useState } from "react";
import { useFormik } from "formik";
import {
  states,
  referrals,
  timeSpans,
  propertySize,
  appraisalTypes,
} from "../constants";
import * as yup from "yup";

const validationSchema = yup.object({
  Name: yup.string().required("Name is required"),
  Email: yup.string().email().required("Email is required"),
  Address: yup.string().required("Address is required"),
  City: yup.string().required("City is required"),
  ZipCode: yup.number().required("Zip Code is required"),
});

const QuoteForm = ({ handleClose }) => {
  const [value, setValue] = useState("+1");
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
      handleClose();
    },
    validationSchema: validationSchema,
  });

  return (
    <div className="">
      <form
        noValidate
        className="flex flex-col p-10"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="h2 mb-5 text-n-1 mx-auto">Get a Quote</h1>
        <p className="pt-5">Personal Information</p>
        <div className="lg:flex lg:gap-5">
          <TextField
            id="Name"
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            value={formik.values.Name}
            onChange={formik.handleChange}
            error={formik.touched.Name && Boolean(formik.errors.Name)}
            helperText={formik.touched.Name && formik.errors.Name}
            onBlur={formik.handleBlur}
          />
          <TextField
            id="Email"
            label="Email"
            variant="outlined"
            type="email"
            margin="normal"
            value={formik.values.Email}
            onChange={formik.handleChange}
            error={formik.touched.Email && Boolean(formik.errors.Email)}
            helperText={formik.touched.Email && formik.errors.Email}
            onBlur={formik.handleBlur}
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
            id="City"
            label="Street Address"
            variant="outlined"
            margin="normal"
            fullWidth
            error={formik.touched.Address && Boolean(formik.errors.Address)}
            helperText={formik.touched.Address && formik.errors.Address}
            onBlur={formik.handleBlur}
            required
          />
          <TextField
            id="City"
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
            id="ZipCode"
            label="Zip Code"
            variant="outlined"
            margin="normal"
            error={formik.touched.ZipCode && Boolean(formik.errors.ZipCode)}
            helperText={formik.touched.ZipCode && formik.errors.ZipCode}
            onBlur={formik.handleBlur}
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
          <Button type="submit" size="large" variant="contained">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
