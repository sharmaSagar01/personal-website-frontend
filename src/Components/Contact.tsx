import React from "react";
import "../Styles/Contact.css";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:sagaarpkr@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };
  return (
    <div className="app__contact">
      <h4 className="contact__title">Contact </h4>
      <h4 className="contact__sub-title">Feel Free to Contact me</h4>

      <div className="contact__details">
        <h4 className="contact__heading">
          Contact-{" "}
          <span
            style={{
              textDecoration: "underline",
              textDecorationColor: "yellow",
              letterSpacing: "3px",
            }}
          >
            Details
          </span>
        </h4>

        <div className="info">
          <div className="details">
            <PhoneIcon className="icon" />
            <p style={{ fontSize: "1.25rem" }}>+1 (519) 992-8275</p>
          </div>
          <div className="details">
            <EnvelopeIcon className="icon" />
            <p style={{ fontSize: "1.25rem" }}>sagaarpkr@gmail.com</p>
          </div>
          <div className="details">
            <MapPinIcon className="icon" />
            <p style={{ fontSize: "1.25rem" }}>Windsor, ON, Canada</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div style={{ display: "flex" }}>
            <input
              {...register("name")}
              type="text"
              className="contact-input"
              placeholder="Name"
            />
            <input
              {...register("email")}
              type="email"
              className="contact-input"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject")}
            type="text"
            className="contact-input"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            className="contact-input"
            placeholder="Message"
          />
          <button className="contact__btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
