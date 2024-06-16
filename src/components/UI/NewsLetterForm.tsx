import React, { useEffect, useState } from "react";
import Button from "./Button";
import "./NewsLetterForm.css";

const NewsLetterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEmailValid) {
      setIsSubmitted(true);
      setEmail("");
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  useEffect(() => {
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  }, [isSubmitted]);

  return (
    <div className="newsletter">
      <form className="form" aria-label="newsletter" onSubmit={submitHandler}>
        <input
          type="email"
          placeholder="Type your email here"
          aria-label="Email"
          value={email}
          onChange={handleEmailChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={!isEmailValid ? "invalid" : ""}
        />
        <Button disabled={!isEmailValid} className="newsletter-submit-button">
          Sign up
        </Button>
        {!isEmailValid && isFocused && (
          <span className="message error">Enter a valid email</span>
        )}
        {isSubmitted && (
          <span className="message success">
            Thank you for your subscription!
          </span>
        )}
      </form>
    </div>
  );
};

export default NewsLetterForm;
