import axios from "axios";
import { baseURL } from "../../util/auth";
import React, { useState } from "react";
const emailReg =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

const EmailForm = () => {
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    body: "",
  });

  const { name, email, body } = formInfo;

  const validateInfo = (formData) => {
    setLoading(true);

    const { name, email, body } = formData;

    setValid(true);
    if (!name || !body || !email) {
      setValid(false);
      console.log("All fields must be filled");
    }
    const emailTest = email.match(emailReg);

    if (emailTest === null) {
      setValid(false);
      console.log("Wrong Email");
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newInfo = {
      ...formInfo,
      [name]: value,
    };
    setFormInfo(newInfo);

    validateInfo(newInfo);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (valid) {
      axios
        .post(`http://${baseURL}/api/email`, { body, name, email })
        .then((res) => {
          alert("Sent Email");
          setFormInfo({ name: "", body: "", email: "" });
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <>
      <form className="email-form" onSubmit={handleSubmit}>
        <div className="form-header">Email Me</div>
        <p>volkelkevin9@gmail.com</p>
        <input
          placeholder="Name"
          value={name}
          name="name"
          onChange={handleChange}
          disabled
        />
        <input
          placeholder="Email"
          value={email}
          name="email"
          onChange={handleChange}
          disabled
        />
        <textarea
          placeholder="Body"
          value={body}
          name="body"
          onChange={handleChange}
          style={{
            width: "90%",
            height: "15rem",
          }}
          disabled
        />
        <button
          disabled={!valid || loading}
          type="submit"
          className={(!valid || loading) && "disabled"}
        >
          NOT FUNCTIONAL
        </button>
      </form>
    </>
  );
};

export default EmailForm;
