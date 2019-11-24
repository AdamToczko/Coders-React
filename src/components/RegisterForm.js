// "stwórz formularz do rejestracji usera"

// Część 1
// formularz ma posiadać 4 inputy o nazwach odpowiednio:
// - email, password, confirm-password oraz agreement
// o typach odpowiednio:
// - email, password, password, checkbox
// komponent RegisterForm ma zawierać 1 metodę do zmiany stanu w do obu komponentów

// Część 2 
// komponent RegisterForm ma zawierać metodę onSubmit, która dokonuje walidacji:
// - email - email
// - password/confirm-password - jest dłuższe niż 8 znaków 
// - inputy na hasła mają taką samą wartość
// - agreement musi mieć wartość true

// Część 3
// jeśli walidacja nie przejdzie, trzeba wyświetlić komunikat błędu "ValidationError"
// jeśli walidacja się powiedzie, trzeba wyświeltić komunikat "User created"

// class RegisterForm extends React.Component{
//     // ...
// }



import React from "react";
import { Formik } from "formik";
import { Input, Checkbox } from "semantic-ui-react";
import * as Yup from "yup";


const accountFormSchema = Yup.object().shape({
  email: Yup.string()
    .max(30, "Too long buddy")
    .email("Wrong email!")
    .required("Required!"),
  password: Yup.string()
    .min(8, "Too short! Min 8 chars"),
    // .matches(new RegExp(/[a-zA-Z]\d\s/g), "Wrong password format."),
    confirmPassword: Yup.string()
    .required()
    .test('passwords-match', 'Passwords must match you fool', function(value) {
      return this.parent.password === value;
    }),
  agreeToTerms: Yup.boolean()
    .test(
      'is-true',
      'Must agree to terms to continue',
      value => value === true
    ),
});

const TextInput = props => {
  const { name, errors, touched, agreedTerms } = props;
  return (
    <div>
      <Input {...props} error={errors[name] && touched[name]} />
      <div>{errors[name] && touched[name] && errors[name]}</div>
    </div>
  );
};

const RegisterForm = () => (
  <div>
    <h1>Register form</h1>
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        agreedTerms: false,
      }}
      validationSchema={accountFormSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 2000);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <TextInput
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            touched={touched}
            errors={errors}
          />
          <TextInput
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            touched={touched}
            errors={errors}
          />
          <TextInput
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            touched={touched}
            errors={errors}
          />
          <Checkbox
            label="Agree to Terms"
            type="checkbox"
            name="agreedTerms"
            checked={values.agreedTerms}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  </div>
);

export default RegisterForm;