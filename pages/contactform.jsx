import UnderpageLayout from '../layouts/UnderpageLayout'
import InnerLayout from '../layouts/InnerLayout'
import styles from '../styles/pages/contact.module.scss'

export default function ContactForm() {
  return (
    <>

    <div className={styles.sectionContainer}>
    {/* <!-- class, action, methodを変更しないでください --> */}
      <form  action="https://form.run/api/v1/r/sskm17wkftlu48frlce0axxw" method="post">
        {/* <!-- ↓自由に要素を追加・編集することができます --> */}
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

        <div>
          <label>個人情報利用同意 [必須]</label>
          <input type="checkbox" name="個人情報利用同意" data-formrun-required />
          <div data-formrun-show-if-error="個人情報利用同意">同意してください</div>
        </div>

        {/* <!-- ボット投稿をブロックするためのタグ --> */}
        {/* <div >
          <style media="screen">._formrun_gotcha </style>
          <label for="_formrun_gotcha">If you are a human, ignore this field</label>
          <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabindex="-1" />
        </div> */}

        <button type="submit" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信</button>
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