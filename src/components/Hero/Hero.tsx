import React, { FC, useState, ChangeEvent, FormEvent } from 'react';
import Container from '../Container/Container';
import * as styles from './Hero.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import emailValidator from 'email-validator';

const Hero: FC = () => {
  const [email, setEmail] = useState<string>();
  const [emailError, setEmailError] = useState<string>();

  const validateEmail = (email?: string): boolean => {
    const valid = email ? emailValidator.validate(email) : false;

    if (!valid) {
      setEmailError('Please enter a valid email address')
    } else {
      setEmailError(undefined);
    }

    return valid;
  }

  const onInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const valid = validateEmail(value);

    if (valid) {
      setEmail(event.target.value);
    }
  }

  const encodeFormData = (data: any) => {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const onHandleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValid = validateEmail(email);

    if (isValid) {
      fetch('/', {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({
          'form-name': 'betaList',
          email
        }),
      })
    }
  }

  return (
    <Container className={styles.hero}>
      <h1 className={styles.heading}>All-In-One Client Management Solution</h1>

      <form
        name="betaList"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className={styles.form}
        method="POST"
        onSubmit={onHandleSubmit}
      >
        <div className={styles.inputWrap}>
          <input
            name="email"
            id="email"
            type="text"
            placeholder="Sign up for the beta..."
            className={styles.input}
            value={email}
            onChange={onInput}
          />

          {emailError && (
            <span className={styles.errorMessage}>{emailError}</span>
          )}

          <button
            className={styles.submitButton}
            type="submit"
          >
            <img
              alt=""
              src={require('../../assets/icons/arrow-right-circle.png').default}
            />
          </button>
        </div>
      </form>

      <StaticImage
        src="../../assets/images/activity-tracker.svg"
        alt=""
        placeholder="blurred"
        className={styles.image}
      />
    </Container>
  )
};

export default Hero;