import UnderpageLayout from '../layouts/UnderpageLayout'
import InnerLayout from '../layouts/InnerLayout'
import styles from '../styles/pages/contact.module.scss'
import Script from 'next/script'

export default function ContactForm() {
  return (
    <>
    <Script 
      src="https://sdk.form.run/js/v2/formrun.js"
      strategy='lazyOnLoad'
    />

    <div className={styles.sectionContainer}>
      <div action="https://form.run/api/v1/r/sskm17wkftlu48frlce0axxw" method="post">
        <div>
          <label>お名前</label>
          <input name="お名前" type="text" />
        </div>

        <div>
          <label>メールアドレス [必須]</label>
          <input name="メールアドレス" type="text" data-formrun-type="email" data-formrun-required />
          <div data-formrun-show-if-error="メールアドレス">メールアドレスを正しく入力してください</div>
        </div>

        <div>
          <label>お問い合わせ [必須]</label>
          <textarea name="お問い合わせ" data-formrun-required></textarea>
          <div data-formrun-show-if-error="お問い合わせ">お問い合わせ入力してください</div>
        </div>



        <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信</button>
      </div>

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