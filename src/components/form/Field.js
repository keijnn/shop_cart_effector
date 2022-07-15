import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'

export const FormField = () => (
  <div className="h-10">
    <Formik
      initialValues={{ name: '', email: '', phone: '', address: '' }}
      validate={(values) => {
        const errors = {}
        if (!values.email) {
          errors.email = 'Required'
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address'
        }
        if (!values.phone) {
          errors.phone = 'Required'
        }

        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="mt-14">
            Name:
            <Field type="name" name="name" className="bg-stone-200" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className="mt-14">
            Email:
            <Field type="email" name="email" className="bg-stone-200" />
            <ErrorMessage name="email" component="div" className="font-semibold text-[red]" />
          </div>
          <div className="mt-14">
            Phone:
            <Field type="phone" name="phone" className="bg-stone-200" />
            <ErrorMessage name="phone" component="div" className="font-semibold text-[red]" />
          </div>
          <div className="mt-14">
            Address:
            <Field type="address" name="address" className="bg-stone-200" />
          </div>
        </Form>
      )}
    </Formik>
  </div>
)