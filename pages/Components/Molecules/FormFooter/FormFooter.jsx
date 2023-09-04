import React from "react";
import { Container, Form, Input, TextArea, Button } from "semantic-ui-react";
import { useFormik } from "formik";
import * as Yup from "yup";

import styles from "./FormFooter.module.css";

const FormFooter = (contact) => {
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
        <h3 className={styles.description}>{contact.contact.description}</h3>
        <Form className={styles.Form} onSubmit={formik.handleSubmit}>
          <Form.Input
            className={styles.inputArea}
            type="text"
            placeholder={contact.contact.label1Name}
            name="name"
            onChange={formik.handleChange}
            error={formik.errors.name && true}
            value={formik.values.name}
          />
          <Form.Input
            className={styles.inputArea}
            type="text"
            placeholder={contact.contact.label2Email}
            name="email"
            onChange={formik.handleChange}
            error={formik.errors.email && true}
            value={formik.values.email}
          />
          <Form.Field
            className={styles.inputTArea}
            style={{ minHeight: 200 }}
            control={TextArea}
            placeholder={contact.contact.message}
            name="textAd"
            onChange={formik.handleChange}
            error={formik.errors.textAd && true}
            value={formik.values.textAd}
          />
          <Button className={styles.btnSend} type="submit">
            {contact.contact.buttonSend}
          </Button>
        </Form>
      </Container>
    </div>
  );
};

// formik.handleReset

export default FormFooter;
