import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import Request from "utils/request";
import { useAuthState } from "context/auth";
import { useHistory } from "react-router-dom";
import { setToken } from "utils/auth";
import { TextField } from "formik-material-ui";

import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  email: Yup.string().email("Must be a valid email address"),
});

export default () => {
  const { updateAuthState } = useAuthState();
  const history = useHistory();

  return (
    <Container component="main" maxWidth="xs">
      <Box mt={8} display="flex" flexDirection="column" alignItems="center">
        <Avatar>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Formik
          validateOnBlur
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            const response = await Request.post("/auth/login", {
              email: values.email,
              password: values.password,
            });

            setToken(response.data.token);

            updateAuthState();
            history.push("/");
          }}
        >
          {({ isSubmitting }) => (
            <Form>
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
                autoComplete="current-password"
              />
              <Button
                color="secondary"
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                fullWidth
              >
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};
