import React from "react";
import { Box, FormField, TextInput } from "grommet";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import Request from "utils/request";

const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
  email: Yup.string().email("Must be a valid email address"),
  name: Yup.string().required(),
});

export default () => {
  return (
    <Box align="center" fill>
      <Box width="medium" margin="large">
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={LoginSchema}
          onSubmit={async (values) => {
            await Request.post("/auth/register", values);
          }}
          validateOnBlur
        >
          {({ values, errors, handleChange }) => (
            <Form>
              <FormField label="Name" error={errors.name}>
                <TextInput
                  name="name"
                  value={values.name || ""}
                  onChange={handleChange}
                  autoFocus
                />
              </FormField>
              <FormField label="Email" error={errors.email}>
                <TextInput
                  name="email"
                  value={values.email || ""}
                  onChange={handleChange}
                  type="email"
                />
              </FormField>
              <FormField label="Password" error={errors.password}>
                <TextInput
                  type="password"
                  name="password"
                  value={values.password || ""}
                  onChange={handleChange}
                  autoComplete="new-password"
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
