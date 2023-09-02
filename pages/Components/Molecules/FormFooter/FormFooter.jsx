import React from "react";
import { Container, Form, Input, TextArea, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "./FormFooter.module.css";

const FormFooter = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      textAd: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      textAd: Yup.string().required(),
    }),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });

  return (
    <div>
      <Container className={styles.Container}>
        <h1>Formulario de footer</h1>
        <Form className={styles.Form} onSubmit={formik.handleSubmit}>
          <Form.Input
            type="text"
            placeholder="Nombre y Apellido"
            name="name"
            onChange={formik.handleChange}
            error={formik.errors.name && true}
            value={formik.values.name}
          />
          <Form.Input
            type="text"
            placeholder="Correo Electronico"
            name="email"
            onChange={formik.handleChange}
            error={formik.errors.email && true}
            value={formik.values.email}
          />
          <Form.Field
            control={TextArea}
            label="About"
            placeholder="Tell us more about you..."
            name="textAd"
            onChange={formik.handleChange}
            error={formik.errors.textAd && true}
            value={formik.values.textAd}
          />
          <Button type="submit">Enviar</Button>
        </Form>
      </Container>
    </div>
  );
};

// formik.handleReset

export default FormFooter;
