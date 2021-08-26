import React from "react";
import { Formik, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import {
  Button,
  Container,
  ContainerForm,
  ContainerInput,
  Error,
  StyledInput,
  Subtitle,
} from "./styles";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("Este campo es obligatorio")
    .matches(/^[a-zA-Z]+$/, "Solo acepta letras"), // RegEx para solo letras
  dni: Yup.number()
    .required("Este campo es obligatorio")
    .typeError("Este campo debe ser un numero")
    .min(30000000, "El documento debe ser mayor a 30 millones")
    .max(60000000, "El documento debe ser menor a 60 millones"),
  phone: Yup.number().typeError("Este campo debe ser un numero"),
  email: Yup.string()
    .email("Este correo electronico es invalido")
    .required("Este campo es obligatorio"),
  password: Yup.string()
    .required("Este campo es obligatorio")
    .min(8, "Debe contener al menos 8 caracteres")
    .matches(/(?=\w*[A-Z])/, "Debe contener al menos una mayuscula"), // RegEx para al menos 1 mayus
  repeatPassword: Yup.string()
    .required("Este campo es obligatorio")
    .oneOf([Yup.ref("password")], "Las contrasenias no coinciden"), // Comaparar con un campo
});

const Register = () => {
  const [visible, setVisible] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      dni: "",
      phone: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => console.log(values),
  });

  return (
    <Container>
      <Subtitle>REGISTER FORM</Subtitle>
      <ContainerForm onSubmit={formik.handleSubmit}>
        <ContainerInput>
          <StyledInput
            name="name"
            placeholder="Nombre"
            onChange={formik.handleChange}
            value={formik.values.name}
            // onBlur={handleBlur("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <Error>{formik.errors.name}</Error>
          )}
        </ContainerInput>
        <ContainerInput>
          <StyledInput
            name="dni"
            placeholder="DNI"
            onChange={formik.handleChange}
            value={formik.values.dni}
            // onBlur={handleBlur("dni")}
          />
          {formik.touched.dni && formik.errors.dni && (
            <Error>{formik.errors.dni}</Error>
          )}
        </ContainerInput>
        <ContainerInput>
          <StyledInput
            name="phone"
            placeholder="Numero de telefono"
            onChange={formik.handleChange}
            value={formik.values.phone}
            // onBlur={handleBlur("phone")}
          />
          {formik.touched.phone && formik.errors.phone && (
            <Error>{formik.errors.phone}</Error>
          )}
        </ContainerInput>
        <ContainerInput>
          <StyledInput
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            // onBlur={handleBlur("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <Error>{formik.errors.email}</Error>
          )}
        </ContainerInput>
        <ContainerInput>
          <StyledInput
            name="password"
            placeholder="Contrasenia"
            onChange={formik.handleChange}
            value={formik.values.password}
            type={visible ? "text" : "password"}
            // onBlur={handleBlur("password")}
          />
          {formik.touched.password && formik.errors.password && (
            <Error>{formik.errors.password}</Error>
          )}
        </ContainerInput>
        <ContainerInput>
          <StyledInput
            name="repeatPassword"
            placeholder="Repetir contrasenia"
            onChange={formik.handleChange}
            value={formik.values.repeatPassword}
            type={visible ? "text" : "password"}
            // onBlur={handleBlur("repeatedPassword")}
          />
          {formik.touched.repeatedPassword && formik.errors.repeatPassword && (
            <Error>{formik.errors.repeatPassword}</Error>
          )}
        </ContainerInput>
        <Button onClick={() => setVisible(!visible)}>
          {visible ? "Ocultar contrasenia" : "Mostrar contrasenia"}
        </Button>
        <Button type="submit">Register</Button>
      </ContainerForm>
    </Container>
  );
};

export default Register;
