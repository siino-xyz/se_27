import styles from "../../styles/staticSections/contact.module.scss";
import { useForm } from "react-hook-form";

type formInputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formInputs>();

  const onSubmit = (data: formInputs, e: any) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("subject", data.subject);
    formData.append("message", data.message);
    fetch("https://getform.io/f/6e829c97-4064-4818-bdb4-1c3b491869c5", {
      method: "POST",
      body: formData,
    })
      .then(() => {
        e.target.reset();
      })
      .catch((error) => {
        alert(error);
        console.error(error);
      });
  };

  return (
    <>
      <div className={styles.sectionContainer}>
        <div className={styles.ttlWrapper}>
          <h2 className={styles.sectionTitle}>
            Contact
            <br />
            <div className={styles.subscriptJp}>お問い合わせ</div>
          </h2>
        </div>
        <p>
          お気軽にお問い合わせ下しあ。原則２営業日以内に折り返しご連絡いたします。
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.formContainer}
        >
          <div className={styles.inputBox}>
            <p>
              <span className={styles.must}>*</span>お名前
            </p>
            <input
              {...register("name", {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.name && (
              <div className={styles.validation}>*お名前をご入力下さい。</div>
            )}
          </div>

          <div className={styles.inputBox}>
            <p>
              <span className={styles.must}>*</span>メールアドレス
            </p>
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
              <div className={styles.validation}>
                *メールアドレスを入力して下さい
              </div>
            )}
            {errors.email?.type === "pattern" && (
              <div className={styles.validation}>*お名前をご入力下さい。</div>
            )}
          </div>

          <div className={styles.inputBox}>
            <p>
              <span className={styles.must}>*</span>ご用件
            </p>
            <input
              {...register("subject", {
                required: true,
                maxLength: 50,
              })}
            />
            {errors.subject && (
              <div className={styles.validation}>
                *用件のタイトルを入力して下さい
              </div>
            )}
          </div>
          <div className={styles.textAreaBox}>
            <p>
              <span className={styles.must}>*</span>ご用件の内容
            </p>
            <textarea
              {...register("message", {
                required: true,
              })}
            />
            {errors.message && (
              <div className={styles.validation}>*要件の内容をご記入下さい</div>
            )}
          </div>

          <button className={styles.linkBtnWrapper} type="submit">
            送信
          </button>
        </form>
      </div>
    </>
  );
}
