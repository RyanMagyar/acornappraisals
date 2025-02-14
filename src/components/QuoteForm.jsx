import { TextField, Button, MenuItem } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { useFormik } from "formik";
import {
  states,
  referrals,
  timeSpans,
  propertySize,
  appraisalTypes,
} from "../constants";
import * as yup from "yup";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const validationSchema = yup.object({
  Name: yup.string().required("Name is required"),
  Email: yup.string().email().required("Email is required"),
  Phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid add +1 for US numbers")
    .required("Phone number is required")
    .min(15, "Phone number is not valid add +1 for US numbers")
    .max(15, "Phone number is not valid add +1 for US numbers")
    .trim(),
  Address: yup.string().required("Street Address is required"),
  City: yup.string().required("City is required"),
  ZipCode: yup
    .string()
    .required("Zip Code is required")
    .min(5, "Must be exactly 5 digits")
    .max(5, "Must be exactly 5 Digits")
    .matches(/^[0-9]+$/, "Must be only digits"),
  Type: yup.string().required("Appraisal Type is required"),
  Size: yup.string().required("Property Size is required"),
  Time: yup.string().required("Appraisal Time Needed is required"),
  FindUs: yup.string().required("How did you find us is required"),
});

const QuoteForm = ({ QuoteType, handleClose }) => {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Phone: "+1",
      Address: "",
      City: "",
      ZipCode: "",
      Type: QuoteType ? QuoteType : "",
      Size: "",
      Time: "",
      FindUs: "",
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
        className="flex flex-col pl-10 pr-10 pt-5 pb-5"
        onSubmit={formik.handleSubmit}
        name="Quote"
        method="POST"
        data-netlify="true"
      >
        <h1 className="h2 text-color-5 mx-auto">Get a Quote</h1>
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
            required
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
            id="Phone"
            label="Phone Number"
            variant="outlined"
            value={formik.values.Phone}
            onChange={formik.handleChange("Phone")}
            error={formik.touched.Phone && Boolean(formik.errors.Phone)}
            helperText={formik.touched.Phone && formik.errors.Phone}
            onBlur={formik.handleBlur("Phone")}
            className="lg:w-1/2 flex-grow width-full mt-5"
            fullWidth
            required
          />
          <div className="hidden lg:block w-1/2 "></div>
        </div>
        <p className="pt-5">Property to be Appraised Address</p>
        <div className="lg:flex lg:gap-5">
          <TextField
            id="Address"
            label="Street Address"
            variant="outlined"
            margin="normal"
            value={formik.values.Address}
            onChange={formik.handleChange}
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
            value={formik.values.City}
            error={formik.touched.City && Boolean(formik.errors.City)}
            helperText={formik.touched.City && formik.errors.City}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
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
            value={formik.values.ZipCode}
            onChange={formik.handleChange("ZipCode")}
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
            id="Type"
            label="Appraisal Type"
            select
            defaultValue=""
            variant="outlined"
            margin="normal"
            value={formik.values.Type}
            onChange={formik.handleChange("Type")}
            error={formik.touched.Type && Boolean(formik.errors.Type)}
            helperText={formik.touched.Type && formik.errors.Type}
            onBlur={formik.handleBlur("Type")}
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
            id="Size"
            label="Property Size"
            select
            defaultValue=""
            variant="outlined"
            margin="normal"
            value={formik.values.Size}
            onChange={formik.handleChange("Size")}
            error={formik.touched.Size && Boolean(formik.errors.Size)}
            helperText={formik.touched.Size && formik.errors.Size}
            onBlur={formik.handleBlur("Size")}
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
            id="Time"
            label="Appraisal Needed Time"
            select
            defaultValue=""
            variant="outlined"
            margin="normal"
            value={formik.values.Time}
            onChange={formik.handleChange("Time")}
            error={formik.touched.Time && Boolean(formik.errors.Time)}
            helperText={formik.touched.Time && formik.errors.Time}
            onBlur={formik.handleBlur("Time")}
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
            id="FindUs"
            label="How Did You Find Us?"
            select
            defaultValue=""
            variant="outlined"
            margin="normal"
            value={formik.values.FindUs}
            onChange={formik.handleChange("FindUs")}
            error={formik.touched.FindUs && Boolean(formik.errors.FindUs)}
            helperText={formik.touched.FindUs && formik.errors.FindUs}
            onBlur={formik.handleBlur("FindUs")}
            required
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
          <Button type="submit" size="large" variant="contained">
            Submit
          </Button>
          <Button
            onClick={handleClose}
            size="large"
            color="error"
            variant="contained"
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
