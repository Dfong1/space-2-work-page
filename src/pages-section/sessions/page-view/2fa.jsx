"use client";

import { Fragment, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/lab/LoadingButton";
import BoxLink from "../components/box-link"; // GLOBAL CUSTOM COMPONENTS
import { H3, Paragraph } from "components/Typography";
import { FlexRowCenter } from "components/flex-box";
import fetchData from "utils/fetchData";
import "../styles/2fa.css";

import AuthCode from "react-auth-code-input";
import { useRouter, useSearchParams } from "next/navigation";
import BoxNoLink from "../components/box-no-link";

const Set2faPageView = ({ last_time_updated }) => {
  const queries = useSearchParams();
  const email = queries.get("email");
  const type = queries.get("type");
  const label =
    type === "recovery_code" ? "Recuperar contraseña" : "Confirmar correo";
  const router = useRouter();
  //time in seconds
  const remainingInitTime = Math.ceil(
    (new Date(last_time_updated).getTime() + 120000 - new Date().getTime()) /
      1000
  );

  const [remainingTime, setRemainingTime] = useState(remainingInitTime);
  const [allowResend, setAllowResend] = useState(false);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCodeChange = (code) => {
    setCode(code);
    if (code.length === 6) {
      validateCode(code);
    }
  };

  useEffect(() => {
    let interval;
    if (!allowResend && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (allowResend) {
      setRemainingTime(0);
    }

    return () => clearInterval(interval);
  }, [allowResend, remainingTime]);

  const validateCode = async (code) => {
    try {
      setLoading(true);
      const res = null
      if (res.status === 200 && type === "recovery_code") {
        router.push(
          "/recovery?email=" +
            email +
            "&type=" +
            "recovery_code" +
            "&code=" +
            code
        );
      } else if (res.status === 200 && type === "confirm_code") {
        //validate email
        const res_valid = null
        if (res_valid.status === 200) {
          router.push("/login");
        }
      }
    } catch (error) {}
    setLoading(false);
  };

  const handleResendCode = async () => {
    try {
      const res = null
      if (res.status === 200) {
        setRemainingTime(120);
        setAllowResend(false);
      }
    } catch (error) {}
  };

  return (
    <Fragment>
      <H3 mb={3} textAlign="center">
        {label}
      </H3>

      {/* FORM AREA */}
      <Box display="flex" flexDirection="column" gap={2}>
        <AuthCode
          length={6}
          onChange={handleCodeChange}
          inputClassName="input-2fa"
          containerClassName="container-2fa"
        />
        <Button
          loading={loading}
          fullWidth
          type="button"
          color="primary"
          variant="contained"
          onClick={() => {
            validateCode(code);
          }}
        >
          {type === "recovery_code" ? "Recuperar" : "Confirmar"}
        </Button>
      </Box>

      {/* BOTTOM LINK AREA */}
      <FlexRowCenter
        mt={3}
        justifyContent="center"
        flexDirection="column"
        gap={1}
      >
        <BoxNoLink
          title="Reenviar código"
          onClick={handleResendCode}
          disabled={remainingTime > 1}
        />
        <Paragraph color="grey" fontSize={14}>
          {remainingTime < 1
            ? ""
            : `Reenviar código en ${remainingTime} segundos`}
        </Paragraph>
      </FlexRowCenter>
      {/* <FlexRowCenter mt={3} justifyContent="center" gap={1}>
        ¿No tienes cuenta?
        <BoxLink title="Registrarse" href="/register" />
      </FlexRowCenter> */}
    </Fragment>
  );
};

export default Set2faPageView;
