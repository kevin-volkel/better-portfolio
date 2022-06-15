import React, { useState } from "react";
const emailReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g

const EmailForm = () => {

  const [valid, setValid] = useState(false)
  const [loading, setLoading] = useState(false)

  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    body: "",
  });

  const { name, email, body } = formInfo;

  const validateInfo = (formData) => {
    setLoading(true)

    const {name, email, body} = formData;
    
    setValid(true)
    if(!name || !body || !email) {
      setValid(false)
      console.log('All fields must be filled')
    }
    const emailTest = email.match(emailReg)

    if(emailTest === null) {
      setValid(false)
      console.log('Wrong Email')
    }

    setLoading(false)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newInfo = {
      ...formInfo,
      [name]: value,
    }
    setFormInfo(newInfo);

    validateInfo(newInfo)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // if(valid) {
    //   console.log('sent email')
    // }
  };

  return (
    <>
      <form className="email-form" onSubmit={handleSubmit}>
        <div className="form-header">Email Me</div>
        <input
          placeholder="Name"
          value={name}
          name="name"
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <textarea
          placeholder="Body"
          value={body}
          name="body"
          onChange={handleChange}
          style={{
            width: '90%',
            height: '15rem'
          }}
        />
        <button disabled={!valid || loading} type="submit" className={(!valid || loading) && 'disabled'}>NOT FUNCTIONAL</button>
      </form>
    </>
  );
};

export default EmailForm;
