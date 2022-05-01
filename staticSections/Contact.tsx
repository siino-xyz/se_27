import styles from "../styles/staticSections/contact.module.scss";
import { GetForm } from "../hooks/getForm";

export const Contact = () => {
  const { register, handleSubmit, onSubmit, errors } = GetForm();

  return (
    <>
      <main className={styles.sectionContainer}>
        <div className={styles.sectionTitle}>
          <h2 className={styles.h2}>Contact</h2>
          <h2 className={styles.subscript}>お問い合わせフォーム</h2>
        </div>

        <p>
          以下のフォームをご入力のうえ、今しばらくお待ちくださいませ。（全項目必須）
        </p>
        <p>原則2営業日以内に折り返しご連絡いたします。</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.formContainer}
        >
          <div className={styles.inputItem}>
            <label className={styles.inputLabel} htmlFor="お名前:name">
              お名前
            </label>
            <input
              {...register("name", {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.name && (
              <label
                className={styles.validationMessage}
                htmlFor="名前を入力してください"
              >
                名前を入力してください
              </label>
            )}
          </div>

          <div className={styles.inputItem}>
            <label
              className={styles.inputLabel}
              htmlFor="メールアドレス:emailAddress"
            >
              メールアドレス
            </label>
            <input
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "正しいメールアドレスの形式で入力してください。",
                },
              })}
            />
            {errors.email?.type === "required" && (
              <label
                className={styles.validationMessage}
                htmlFor="メールアドレスが空欄です"
              >
                メールアドレスが空欄です
              </label>
            )}
            {errors.email?.type === "pattern" && (
              <label
                className={styles.validationMessage}
                htmlFor="正しいメールアドレスの形式で入力してください。"
              >
                正しいメールアドレスの形式で入力してください。
              </label>
            )}
          </div>

          <div className={styles.inputItem}>
            <label className={styles.inputLabel} htmlFor="用件のタイトル:Title">
              用件のタイトル
            </label>
            <input
              {...register("subject", {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.subject && (
              <label
                className={styles.validationMessage}
                htmlFor="用件のタイトルが空欄です"
              >
                用件のタイトルが空欄です
              </label>
            )}
          </div>

          <div className={styles.inputItem}>
            <label className={styles.inputLabel} htmlFor="用件の本文:Body">
              用件の本文
            </label>
            <textarea
              {...register("message", {
                required: true,
              })}
            />
            {errors.message && (
              <label
                className={styles.validationMessage}
                htmlFor="用件の本文が空欄です。"
              >
                用件の本文が空欄です。
              </label>
            )}
          </div>

          <button className={styles.linkBtn} type="submit">
            上記の内容で送信する
          </button>
        </form>
      </main>
    </>
  );
};

export default Contact;
