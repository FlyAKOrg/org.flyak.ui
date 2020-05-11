import React from "react";
import { Box, FormField, TextInput } from "grommet";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Request from "utils/request";
import { useAuthState } from "context/auth";
import { useHistory } from "react-router-dom";
import { setToken } from "utils/auth";

const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  email: Yup.string().email("Must be a valid email address"),
});

export default () => {
  const { updateAuthState } = useAuthState();
  const history = useHistory();

  return (
    <Box align="center" fill>
      <Box width="medium" margin="large">
        <Formik
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
          {({ values, errors, handleChange }) => (
            <Form>
              <FormField label="Email" error={errors.email}>
                <TextInput
                  name="email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
              </FormField>
              <FormField label="Password" error={errors.password}>
                <TextInput
                  type="password"
                  name="password"
                  value={values.password || ""}
                  onChange={handleChange}
                />
              </FormField>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};
