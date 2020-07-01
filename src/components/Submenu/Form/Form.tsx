import React, { useContext, useState } from "react";
import { Formik } from "formik";

import { NavigationContext } from "utils/contexts";
import { Button, Wrapper, validationSchema } from ".";

const Form = () => {
  const [open, setOpen] = useState(false);
  const { addNewFlow } = useContext(NavigationContext);

  return (
    <Wrapper>
      <Button type="button" onClick={() => setOpen((val) => !val)}>
        {open ? "Hide the form" : "Add new subcategory to the list"}
      </Button>
      {open && (
        <Formik
          initialValues={{ code: "", name: "" }}
          onSubmit={({ code, name }, { resetForm, setSubmitting }) => {
            addNewFlow({
              code,
              ...(name && { name }),
            }).then(() => {
              setSubmitting(false);
              setOpen(false);
              resetForm();
            });
          }}
          validationSchema={validationSchema}
          validateOnMount
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <label>
                <span>code</span>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.code}
                  name="code"
                />
              </label>
              <label>
                <span>name</span>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.name}
                  name="name"
                />
              </label>
              {props.errors.name && (
                <div id="feedback">{props.errors.name}</div>
              )}
              <button
                type="submit"
                disabled={!props.isValid || props.isSubmitting}
              >
                {props.isSubmitting ? "Please wait, submitting" : "Submit"}
              </button>
            </form>
          )}
        </Formik>
      )}
    </Wrapper>
  );
};

export default Form;
