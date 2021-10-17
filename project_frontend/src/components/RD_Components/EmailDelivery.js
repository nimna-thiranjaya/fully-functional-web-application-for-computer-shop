import React from 'react';
import emailjs from 'emailjs-com';
import Button from "@material-ui/core/Button";
import EmailIcon from '@material-ui/icons/Email';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
export default function EmailDelivery() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmailMassege', 'template_qir214n', e.target, 'user_xQt0oB5AnDqolw9tK2nQD')
      .then((result) => {
          console.log(result.text);
          toast.success('Send Confirm Email Successfully',{position:toast.POSITION.TOP_CENTER});
      }, (error) => {
          console.log(error.text);
      });
  }
  
  return (
    <div align="center" >
    <div className="pt-3" >
      <div className="card shadow mb-4 w-50">
        <div className="card-header py-3">
          <h1 className="m-0 font-weight-bold text-dark" id="randy">
            Send Delivery Confirmation Email
          </h1>
        </div>
        <div className="card-body" >
          <form className="contact-form text-color" onSubmit={sendEmail}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" name="to_name" className="form-control" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" className="form-control" />
              </div>
              <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows="15" className="form-control"/>
              </div>    
              <div className="form-group">
              <Button variant="contained" className="w-10" style={{background: "#F75D59", width: 100+"%"}} startIcon={<EmailIcon />} disableElevation type="submit">send email</Button>


            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
    
  );
  }
