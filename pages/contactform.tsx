import UnderpageLayout from '../layouts/UnderpageLayout'
import InnerLayout from '../layouts/InnerLayout'
import styles from '../styles/pages/contact.module.scss'
import { useForm } from 'react-hook-form';
// import { useState } from 'react';

type formInputs = {
  name: string,
  email: string,
  subject: string,
  message: string,
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<formInputs>();

  const onSubmit = (data: formInputs, e: any) => {
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("email", data.email)
    formData.append("subject", data.subject)
    formData.append("message", data.message)
    fetch('https://getform.io/f/6e829c97-4064-4818-bdb4-1c3b491869c5', {
      method: 'POST',
      body: formData
    })
      .then(() => {
        e.target.reset();
      })
      .catch((error) => {
        alert(error)
        console.error(error)
      });
  }

  return (
    <>
      <div className={styles.sectionContainer}>
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className={styles.formContainer}
        >
         <input 
          {...register('name' , {
            required: true,
            maxLength: 50
          })}
         />
        {errors.name && "名前をご入力下さい"}

         <input 
          {...register('email' , {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '正しいメールアドレスの形式で入力してください。',
            },
          })}
         />
        {errors.email?.type === "required" && "メールアドレスをご入力ください"}
        {errors.email?.type === "pattern" && "正しいメールアドレスの形式でご入力ください。"}


         <input 
          {...register('subject' , {
            required: true,
            maxLength: 50
          })}
         />
        {errors.subject && "用件のタイトルをご入力下さい"}


         <textarea 
          {...register('message' , {
            required: true,
            
          })}
         />
        {errors.message && "用件の内容をご入力ください"}


        <button type="submit">送信</button>

        </form>
      </div>
    </>
  )
}


ContactForm.getLayout = function getLayout(contactform) {
  return (
    <UnderpageLayout>
      <InnerLayout>{contactform}</InnerLayout>
    </UnderpageLayout>
  )
}