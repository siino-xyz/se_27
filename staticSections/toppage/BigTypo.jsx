import styles from "../../styles/staticSections/toppage.module.scss";
import Image from "next/image";

export default function Bigtypo() {
  return (
    <section className={styles.sectionContainer}>
      <main className={styles.sectionInner}>
        <div className={styles.bigTypo}>
          <Image
            src="/top/top-largeTypo.svg"
            width={588}
            height={355}
            layout="intrinsic"
            alt="top-largeTypo"
          />

          <div>
            <p>
              大量の情報がめまぐるしいスピードで消化されていく現代ネット社会では、ユーザーが1つのコンテンツに使える時間は限られており、そんなに待ってくれない。
              <br />
              SE-27は、「ユーザーにいちばん伝えたいことをできる限りシンプルに、そして刹那の速さで届ける」というコンセプトのもと、高速で安全なウェブサイトをデザイン・開発します。
            </p>
          </div>
        </div>
      </main>
    </section>
  );
}
