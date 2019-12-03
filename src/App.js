import isEmpty from "lodash/isEmpty";
import React, { useState } from "react";
import { Field, Form } from "react-final-form";

import "./App.css";

const App = () => {
  const [formValues, setFormValues] = useState({});

  const getGeneratedPattern = () => {
    if (isEmpty(formValues)) {
      return (
        <p>Please enter in all values then press the "Generate" button.</p>
      );
    }

    const { gaugeStitches, necklineCircumference } = formValues;

    return (
      <ul>
        <li>{`CO ${gaugeStitches * necklineCircumference} stitches`}</li>
        <li>TODO ...</li>
      </ul>
    );
  };

  return (
    <>
      <nav>
        <h1>Raglan Pattern Generator</h1>
        <p>All measurements are in inches.</p>
      </nav>

      <div className="flex-container">
        <section>
          <Form
            initialValues={{
              gaugeStitches: 4,
              gaugeRows: 4,
              necklineCircumference: 14,
              necklineToBust: 6,
              bustCircumference: 52,
              upperarmCircumference: 13.5,
              underarmToWaist: 16,
              underarmToWrist: 22
            }}
            onSubmit={values => {
              setFormValues(values);
            }}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <h2>Gauge</h2>
                <label>Stitches per inch</label>
                <Field name="gaugeStitches" component="input" />

                <label>Rows per inch</label>
                <Field name="gaugeRows" component="input" />

                <h2>Measurements</h2>
                <label>Neckline circumference</label>
                <Field name="necklineCircumference" component="input" />

                <label>Neckline to bust</label>
                <Field name="necklineToBust" component="input" />

                <label>Bust circumference</label>
                <Field name="bustCircumference" component="input" />

                <label>Upperarm circumference</label>
                <Field name="upperarmCircumference" component="input" />

                <label>Underarm to waist</label>
                <Field name="underarmToWaist" component="input" />

                <label>Underarm to wrist</label>
                <Field name="underarmToWrist" component="input" />

                <button type="submit">Generate</button>
              </form>
            )}
          />
        </section>

        <section>
          <h2>Generated Pattern</h2>
          {getGeneratedPattern()}
        </section>
      </div>
    </>
  );
};
export default App;
