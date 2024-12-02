import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./add.css"
import { Helmet } from 'react-helmet-async';

function AddPage() {

    const rule = Yup.object({
        title: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
          description: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
          price: Yup.number().required('Required'),
      })

 
    return (
    <>
        <Helmet><title>Add Page </title></Helmet>
    <div className="formikcontainer">
    <Formik
       initialValues={{ title: '', description: '', price: '' }}
       validationSchema={rule}

       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           console.log(values);
           
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="title">Title</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
 
         <label htmlFor="description">Description</label>
         <Field name="description" type="text" />
         <ErrorMessage name="description" />
 
         <label htmlFor="price">Price</label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
 
         <button className='simplebutton' type="submit">Submit</button>
       </Form>
     </Formik></div>
    </>
  )
}

export default AddPage