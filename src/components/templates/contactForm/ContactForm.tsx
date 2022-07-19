import { GetForm } from "../../../hooks/getForm";
import { sprinkles } from "@css-utils/sprinkles.css";
import SectionTitle from "@components/atoms/sectionTitle/SectionTitle";
import {
  InputBlock,
  InputLabel,
  ValidationMessage,
  InputElement,
  TextArea,
  SubmitButton,
} from "./ContactForm.css";

export const ContactForm = () => {
  const { register, handleSubmit, onSubmit, errors } = GetForm();

  return (
    <>
      <SectionTitle largeText="Contact" smallText="お問い合わせフォーム" />
      <p>
        ウェブサイトの制作に関するご相談・ご質問は以下のフォームからお問い合わせ下さい。
      </p>
      <p>原則2営業日以内に折り返しご連絡いたします。</p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className={sprinkles({
          marginX: "size-auto",
          width: { mobile: "size-4/5", desktop: "size-1/3" },
          marginTop: "size-6",
          paddingX: "size-8",
          paddingY: "size-8",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "sub",
          borderRadius: "size-1",
          gap: "size-12",
        })}
      >
        <div className={InputBlock}>
          <label className={InputLabel} htmlFor="お名前:name">
            お名前
          </label>
          <input
            className={InputElement}
            {...register("name", {
              required: true,
              maxLength: 50,
            })}
          />
          {errors.name && (
            <label
              className={ValidationMessage}
              htmlFor="名前を入力してください"
            >
              名前を入力してください
            </label>
          )}
        </div>

        <div className={InputBlock}>
          <label className={InputLabel} htmlFor="メールアドレス:emailAddress">
            メールアドレス
          </label>
          <input
            className={InputElement}
            {...register("email", {
              required: true,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "正しいメールアドレスの形式で入力してください。",
              },
            })}
          />
          {errors.email?.type === "pattern" && (
            <label
              className={ValidationMessage}
              htmlFor="正しいメールアドレスの形式で入力してください。"
            >
              正しいメールアドレスの形式で入力してください。
            </label>
          )}
          {errors.email?.type === "required" && (
            <label
              className={ValidationMessage}
              htmlFor="メールアドレスが空欄です"
            >
              メールアドレスが空欄です
            </label>
          )}
        </div>

        <div className={InputBlock}>
          <label className={InputLabel} htmlFor="用件のタイトル:Title">
            用件のタイトル
          </label>
          <input
            className={InputElement}
            {...register("subject", {
              required: true,
              maxLength: 50,
            })}
          />
          {errors.subject && (
            <label
              className={ValidationMessage}
              htmlFor="用件のタイトルが空欄です"
            >
              用件のタイトルが空欄です
            </label>
          )}
        </div>

        <div className={InputBlock}>
          <label className={InputLabel} htmlFor="用件の本文:Body">
            用件の本文
          </label>
          <textarea
            className={TextArea}
            {...register("message", {
              required: true,
            })}
          />
          {errors.message && (
            <label
              className={ValidationMessage}
              htmlFor="用件の本文が空欄です。"
            >
              用件の本文が空欄です。
            </label>
          )}
        </div>

        <button className={SubmitButton} type="submit">
          上記の内容で送信する
        </button>
      </form>
    </>
  );
};

export default ContactForm;
