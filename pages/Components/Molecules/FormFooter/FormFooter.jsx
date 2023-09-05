import React, { useState } from "react";
import { Container, Form, TextArea, Button } from "semantic-ui-react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";

import "react-toastify/dist/ReactToastify.css";
import styles from "./FormFooter.module.css";

const FormFooter = (contact) => {
  const [serverState, setServerState] = useState(true, "");
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
    if (serverState && !serverState.ok) {
      toast(msg);
    } else {
      toast(msg);
    }
  };

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
    onSubmit: (formData, actions) => {
      axios({
        method: "POST",
        url: "https://formspree.io/f/mgejynwb",
        data: formData,
      })
        .then((response) => {
          actions.setSubmitting(false);
          actions.resetForm();
          handleServerResponse(true, contact.contact.msgSuccess);
        })
        .catch((error) => {
          actions.setSubmitting(false);
          handleServerResponse(false, contact.contact.msgError);
        });
    },
  });

  return (
    <div>
      <Container className={styles.Container}>
        <h3 className={styles.description}>{contact.contact.description}</h3>
        <Form
          className={styles.Form}
          onSubmit={formik.handleSubmit}
          action="https://formspree.io/f/mgejynwb"
          method="POST"
        >
          <Form.Input
            id="name"
            className={styles.inputArea}
            type="text"
            placeholder={contact.contact.label1Name}
            name="name"
            onChange={formik.handleChange}
            error={formik.errors.name && true}
            value={formik.values.name}
          />
          <Form.Input
            id="email"
            className={styles.inputArea}
            type="text"
            placeholder={contact.contact.label2Email}
            name="email"
            onChange={formik.handleChange}
            error={formik.errors.email && true}
            value={formik.values.email}
          />
          <Form.Field
            id="message"
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
