import React from 'react';
import {Drop,DropTitle,Span,Form,FormInput,InputText,InputEmail,Sup,SupTextAria,SupSubmit} from './style.js';
const Contact = () => {
  return (
        <Drop>
            <div className="container">
                <DropTitle><Span>Drop </Span>Me A line</DropTitle>
                <Form action="">
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <Sup type="text" placeholder="Your Subject" />
                    <SupTextAria cols="30" rows="10" placeholder="Your Message"></SupTextAria>
                    <SupSubmit type="submit" value="Send Message" />
                </Form>
            </div>
        </Drop>
  );
}

export default Contact;
