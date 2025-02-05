import { TextField, Button } from "@mui/material";
import { MuiTelInput } from "mui-tel-input";
import { useFormik } from "formik";
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

const ContactForm = ({ handleClose }) => {
  const formik = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Phone: "+1",
      Address: "",
      City: "",
      ZipCode: "",
      Type: "",
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
        className="flex flex-col p-10"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="h2 mb-5 text-n-1 mx-auto">Contact Us</h1>
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

export default ContactForm;
