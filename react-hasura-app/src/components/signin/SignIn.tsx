import { MutationResult } from "@apollo/client";
import { Box, Button, TextField, Typography } from "@material-ui/core";
import { Formik } from "formik";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  SignInMutation,
  SignInMutationVariables,
  useSignInMutation,
} from "../../generated/graphql";
import { authContext } from "../auth/AuthContext";

interface Props {}

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("It should be an email")
    .required("This field is required"),
  password: Yup.string().required("This field is required"),
});

export const SignIn = (props: Props) => {
  const [signin, { loading }] = useSignInMutation();
  const context = useContext(authContext);
  const navigate = useNavigate();
  const signinHandler = (values: SignInMutationVariables) => {
    signin({ variables: values })
      .then(({ errors, data }) => {
        return errors ? console.error(errors) : userLoggedInHandler(data);
      })
      .catch(console.error);
  };

  const userLoggedInHandler = (
    data: MutationResult<SignInMutation>["data"]
  ) => {
    if (data?.login) {
      localStorage.setItem("user_token", data.login.accessToken);
      context?.setIsUserSignedIn(true);
      navigate(`/profile/${data.login.id}`);
    }
  };
  return (
    <Box width={300} margin="30px auto">
      <Typography variant="h6">Sign In</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={signinHandler}
      >
        {({
          values,
          touched,
          errors,
          isValid,
          handleChange,
          handleBlur,
          handleSubmit,
          isInitialValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
              error={!!(errors.email && touched.email)}
              helperText={errors.email && touched.email && errors.email}
              margin="normal"
            />
            <TextField
              label="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              type="password"
              fullWidth
              error={!!(errors.password && touched.password)}
              helperText={
                errors.password && touched.password && errors.password
              }
              margin="normal"
            />

            <Button
              variant="contained"
              fullWidth
              type="submit"
              disabled={!isValid || !!isInitialValid || loading}
            >
              Sign In
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
};
