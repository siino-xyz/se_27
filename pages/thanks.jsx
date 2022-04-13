import ThankspageLayout from '../layouts/ThankspageLayout'
import InnerLayout from '../layouts/InnerLayout'
import styles from '../styles/pages/thanks.module.scss'
import Image from 'next/image';
import LinkButton from '../components/LinkButton';

export default function Thanks() {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionInner}>
          <div className={styles.noWrapFlex}>
            <div>
              <div className={styles.ttlWrapper}>
                <h3 className={styles.subTitle}>
                  SEND COMPLETED!
                </h3>
              </div>
            </div>
            <div>
              <Image
                src='/thanks/thanks-plane.svg'
                width={335}
                height={148}
                layout='intrinsic'
                alt="send-completed"
              />
            </div>
            <div>
              <p>
              SE-27へお問い合わせいただき、ありがとうございます。1営業日以内に折り返しご連絡致しますので、今しばらくお待ちくださいませ。
              </p>
            </div>
            <div>
              <LinkButton
                button={'トップーページに戻る'}
               />
            </div>
          </div>
      </div>
    </div>
  )
}



Thanks.getLayout = function getLayout(thanks) {
  return (
    <ThankspageLayout>
      <InnerLayout>{thanks}</InnerLayout>
    </ThankspageLayout>
  )
}