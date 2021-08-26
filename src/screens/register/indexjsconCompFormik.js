import React from "react";
import { Formik } from "formik";
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

  return (
    <Container>
      <Subtitle>REGISTER FORM</Subtitle>
      <Formik
        initialValues={{
          name: "",
          dni: "",
          phone: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        validationSchema={RegisterSchema}
        validateOnSubmit
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <>
            <ContainerForm onSubmit={handleSubmit}>
              <ContainerInput>
                <StyledInput
                  name="name"
                  placeholder="Nombre"
                  onChange={handleChange("name")}
                  value={values.name}
                  // onBlur={handleBlur("name")}
                />
                {touched.name && errors.name && <Error>{errors.name}</Error>}
              </ContainerInput>
              <ContainerInput>
                <StyledInput
                  name="dni"
                  placeholder="DNI"
                  onChange={handleChange("dni")}
                  value={values.dni}
                  // onBlur={handleBlur("dni")}
                />
                {touched.dni && errors.dni && <Error>{errors.dni}</Error>}
              </ContainerInput>
              <ContainerInput>
                <StyledInput
                  name="phone"
                  placeholder="Numero de telefono"
                  onChange={handleChange("phone")}
                  value={values.phone}
                  // onBlur={handleBlur("phone")}
                />
                {touched.phone && errors.phone && <Error>{errors.phone}</Error>}
              </ContainerInput>
              <ContainerInput>
                <StyledInput
                  name="email"
                  placeholder="Email"
                  onChange={handleChange("email")}
                  value={values.email}
                  // onBlur={handleBlur("email")}
                />
                {touched.email && errors.email && <Error>{errors.email}</Error>}
              </ContainerInput>
              <ContainerInput>
                <StyledInput
                  name="password"
                  placeholder="Contrasenia"
                  onChange={handleChange("password")}
                  value={values.password}
                  type={visible ? "text" : "password"}
                  // onBlur={handleBlur("password")}
                />
                {touched.password && errors.password && (
                  <Error>{errors.password}</Error>
                )}
              </ContainerInput>
              <ContainerInput>
                <StyledInput
                  name="repeatPassword"
                  placeholder="Repetir contrasenia"
                  onChange={handleChange("repeatPassword")}
                  value={values.repeatPassword}
                  type={visible ? "text" : "password"}
                  // onBlur={handleBlur("repeatedPassword")}
                />
                {touched.repeatedPassword && errors.repeatPassword && (
                  <Error>{errors.repeatPassword}</Error>
                )}
              </ContainerInput>
              <Button onClick={() => setVisible(!visible)}>
                {visible ? "Ocultar contrasenia" : "Mostrar contrasenia"}
              </Button>
              <Button type="submit">Register</Button>
            </ContainerForm>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default Register;
