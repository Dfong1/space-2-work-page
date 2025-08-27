"use client";

import { Fragment } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup"; // LOCAL CUSTOM COMPONENT

import BoxLink from "../components/box-link"; // GLOBAL CUSTOM COMPONENTS

import { H3 } from "components/Typography";
import { FlexRowCenter } from "components/flex-box";
import fetchData from "utils/fetchData";
import { useRouter, useSearchParams } from "next/navigation";
import usePasswordVisible from "../use-password-visible";
import EyeToggleButton from "../components/eye-toggle-button";

const SetPasswordPageView = () => {
  const { visiblePassword, togglePasswordVisible } = usePasswordVisible();
  const queries = useSearchParams();
  const email = queries.get("email");
  const type = queries.get("type");
  const code = queries.get("code");

  const router = useRouter();

  const initialValues = {
    password: "",
    confirmPassword: "",
  }; // FORM FIELD VALIDATION SCHEMA

  const validationSchema = yup.object().shape({
    password: yup.string().required("La constraseña es requerida"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
      .required("La confirmación de la contraseña es requerida"),
  });
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: async (values) => {
        try {
          const res = null
          if (res.status === 200) {
            router.push("/login");
          }
        } catch (error) {}
      },
    });
  return (
    <Fragment>
      <H3 mb={3} textAlign="center">
        Restablecer contraseña
      </H3>

      {/* FORM AREA */}
      <Box
        onSubmit={handleSubmit}
        component="form"
        display="flex"
        flexDirection="column"
        gap={2}
      >
        <TextField
          fullWidth
          name="password"
          placeholder="*********"
          type={visiblePassword ? "text" : "password"}
          label="Contraseña"
          onBlur={handleBlur}
          value={values.password}
          onChange={handleChange}
          helperText={touched.password && errors.password}
          error={Boolean(touched.password && errors.password)}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={visiblePassword}
                click={togglePasswordVisible}
              />
            ),
          }}
        />
        <TextField
          fullWidth
          name="confirmPassword"
          placeholder="*********"
          type={visiblePassword ? "text" : "password"}
          label="Confirmar contraseña"
          onBlur={handleBlur}
          value={values.confirmPassword}
          onChange={handleChange}
          helperText={touched.confirmPassword && errors.confirmPassword}
          error={Boolean(touched.confirmPassword && errors.confirmPassword)}
          InputProps={{
            endAdornment: (
              <EyeToggleButton
                show={visiblePassword}
                click={togglePasswordVisible}
              />
            ),
          }}
        />

        <Button fullWidth type="submit" color="primary" variant="contained">
          Restablecer
        </Button>
      </Box>

      {/* BOTTOM LINK AREA */}
      {/* <FlexRowCenter mt={3} justifyContent="center" gap={1}>
        Don&apos;t have an account?
        <BoxLink title="Register" href="/register" />
      </FlexRowCenter> */}
    </Fragment>
  );
};

export default SetPasswordPageView;
