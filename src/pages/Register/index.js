import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import Request from "utils/request";
import { useAuthState } from "context/auth";
import { useHistory } from "react-router-dom";
import { TextField } from "formik-material-ui";

import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const LoginSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  email: Yup.string()
    .required("Email is required")
    .email("Must be a valid email address"),
});

export default () => {
  const { isAuthenticated } = useAuthState();
  const history = useHistory();

  if (isAuthenticated) {
    history.push("/");
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box mt={8} display="flex" flexDirection="column" alignItems="center">
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          validateOnBlur
          initialValues={{
            email: "",
            password: "",
            name: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            await Request.post("/auth/register", values);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field
                component={TextField}
                label="Name"
                name="name"
                variant="outlined"
                fullWidth
                required
                margin="normal"
                autoComplete="name"
                autoFocus
              />
              <Field
                component={TextField}
                label="Email"
                name="email"
                type="email"
                variant="outlined"
                fullWidth
                required
                margin="normal"
                autoComplete="email"
                autoFocus
              />
              <Field
                component={TextField}
                label="Password"
                name="password"
                type="password"
                variant="outlined"
                fullWidth
                required
                margin="normal"
                autoComplete="new-password"
              />
              <Field
                component={TextField}
                label="Password Confirmation"
                name="confirmPassword"
                type="password"
                variant="outlined"
                fullWidth
                required
                margin="normal"
              />
              <Box mt={3} mb={2}>
                <Button
                  color="secondary"
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                  fullWidth
                >
                  Sign Up
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};
