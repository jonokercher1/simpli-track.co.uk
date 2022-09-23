import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import emailValidator from 'email-validator';
import * as   styles from './Form.module.scss';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Loading from '../Loading';

interface FormData {
  email: string;
}

const Form: FC = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormData>({ mode: 'all' });

  const encodeFormData = (data: any) => {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const onHandleSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const response = await fetch('/', {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({
          'form-name': 'betaList',
          ...data
        }),
      });

      if (!response.ok) throw new Error();

      toast('You\'re on the waiting list!', {
        style: {
          backgroundColor: '#389D63',
          color: '#ffffff'
        }
      });

      setValue('email', '');
    } catch (e) {
      toast('Unable to submit form', {
        style: {
          backgroundColor: '#9D3838',
          color: '#ffffff'
        }
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      name="betaList"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={styles.form}
      method="POST"
      onSubmit={handleSubmit(onHandleSubmit)}
    >
      <div className={styles.inputWrap}>
        <input
          id="email"
          type="text"
          placeholder="ronnie.coleman@gmail.com"
          className={styles.input}
          {...register('email', { validate: emailValidator.validate })}
        />

        {errors.email && (
          <span className={styles.errorMessage}>Please enter a valid email</span>
        )}

        <button
          className={styles.submitButton}
          disabled={loading}
          type="submit"
        >
          {loading ? (
            <Loading />
          ) : (
            <img
              alt=""
              src={require('../../assets/icons/arrow-right.png').default}
            />
          )}
        </button>
      </div>
    </form>
  )
}

export default Form;