import Image from "next/image";
import TextAndButtonBlock from "@components/organisms/textAndButtonBlock/TextAndButtonBlock";
import SectionTitle from "@components/atoms/sectionTitle/SectionTitle";
import { sprinkles } from "@css-utils/sprinkles.css";
import StaticContentUtilBlock from "@components/organisms/staticContentUtilBlock/StaticContentUtilBlock";

const JamstackDetail = () => {
  return (
    <>
      <main>
        {/* <div className={styles.eyeCatch}>
          <Image
            src="/jamstack/eyeCatch.svg"
            width={1120}
            height={554}
            layout="intrinsic"
            alt="jamstackざっくり解説"
          />
        </div> */}

        <section>
          <SectionTitle
            largeText="What's Jamstack?"
            smallText="Jamstackとはなにか"
          />
          <StaticContentUtilBlock
            title={null}
            para="Jamstackとは、JavaScript・API・Markup(HTML/CSS)の3つの技術をベースとした、ウェブサイトを構築するアーキテクチャのひとつです。  表示速度が高速かつ、高セキュリティなウェブサイトが簡単に作れることから、近年注目を集めています。このページでは、従来のウェブサイトとJamstackで作られたウェブサイトの違い、Jamstackがどういったケースに向いているのかの2点について解説しています。まずはJamstackの特徴を簡単にご紹介します。"
            src="/jamstack/jamstackLogo.svg"
            width={383}
            height={129}
            layout="intrinsic"
            alt="jamstackLogo"
            url={null}
            text={null}
            buttonDisplay="none"
          />
          <div>
            <span>Feature 1</span>
            <h3>表示速度が高速</h3>
          </div>
          <div>
            <p>
              Jamstackは、すべてのページがあらかじめ生成された状態で配信されるという特徴に加え、CDN（コンテンツ・デリバリー・ネットワーク）経由でのホスティングを行うため、コンテンツの表示速度が高速です。
            </p>
          </div>
          <div>
            <span>Feature 2</span>
            <h3>高セキュリティ</h3>
          </div>
          <div>
            <p>
              Jamstackで構築されたウェブサイトは、ハッカーの攻撃の的となるサーバーやデータベースがウェブページから切り離されているため、従来型のウェブサイトよりもセキュリティホールが圧倒的に少ないというメリットがあります。
            </p>
          </div>

          <div>
            <span>Feature 3</span>
            <h3>スケーラブルな運用が可能</h3>
          </div>
          <div>
            <p>
              Jamstackで構築されたウェブサイトは複雑なバックエンドを持たないため、規模の変化に強いというメリットがあります。
              <br />
              たとえば、運用フェーズにおいて「アクセスが増えてきたので使用量を増やしたい」「新しい機能を実装したい」と言ったニーズが出てきた場合にも柔軟に拡張していくことができます。
            </p>
          </div>
        </section>

        <section>
          <SectionTitle largeText="Difference?" smallText="従来との違い" />
          <p>
            導入で
            <span>
              「Jamstackは、表示が高速で高セキュリティなサイトを作るの向いている」
            </span>
            という話をしましたが、現在主流のウェブサイトとは具体的にどのような部分が異なるのでしょうか？
          </p>
          <p>
            現在主流のウェブサイトとJamstackで大きく異なるのは、ウェブページの配信方法です。それぞれの違いを図にして見てみましょう。
          </p>
          <ul>
            <li>
              <p>
                ここで言う「ウェブページ配信」というのは、ウェブサイトをユーザーに届けるまでの方法のことを指します。
              </p>
            </li>
            <li>
              <p>
                実際のところ、ウェブページ配信の手法は多岐にわたり、シンプルなものから複雑なものまで様々です。ここでは比較的小規模なウェブサイトでよく採用されている配信方法について言及しています。
              </p>
            </li>
          </ul>

          <div>
            <div>
              <h3>現在主流のウェブサイト配信</h3>
            </div>
            <div>
              <div>
                <p>
                  最も一般的であろうウェブサイトの配信スタイルを図で示しました。具体的な例を挙げると、国内のレンタルサーバなどを借りて配信する方法がこれにあたります。WordPressで構築されているサイトはほとんどこのスタイルです。
                </p>
                <p>この配信方法には2つのネックがあります。</p>
                <ul>
                  <li>
                    サーバがデータを取得してコンテンツが表示されるまでの間、ユーザーは待たされる。
                  </li>
                  <li>
                    サーバやデータベースに脆弱性がある場合、簡単にハッキングされてしまう。
                  </li>
                </ul>

                <p>
                  パフォーマンスチューニングやセキュリティ施策を正しく行っていれば基本的には問題ありませんが、維持管理のリソース不足やコストの問題もあり、十分な対策が行えていないウェブサイトも少なくありません。
                </p>
              </div>
              <div>
                <Image
                  src="/jamstack/lampStack-io.png"
                  width={456}
                  height={497}
                  layout="intrinsic"
                  alt="lanpstack"
                />
              </div>
            </div>

            <div>
              <h3>Jamstackのウェブサイト配信</h3>
            </div>
            <div>
              <div>
                <div>
                  <p>
                    現在主流のウェブサイト配信と大きく異なるのは、事前にすべてのページを構築してしまい、それをCDN経由で配信している点です。
                  </p>
                  <ul>
                    <li>
                      <p>
                        ここで登場しているCDN（コンテンツ・デリバリー・ネットワーク）とは、より効率的にコンテンツを配信するためのシステムです。
                      </p>
                    </li>
                    <li>
                      <p>
                        CDNは、世界中に配置されたキャッシュサーバを利用して、効率的にコンテンツを配信することを実現しています。
                        従来型のレンタルサーバに比べレスポンスが早くなること、負荷を分散できるので大量のアクセスに強いというメリットがあります。
                      </p>
                    </li>
                  </ul>

                  <p>
                    また、Jamstackでは、ウェブページがサーバやデーターベースが切り離された状態で運用されるため、セキュリティホールが少ないという強みがあります。
                  </p>
                  <p>
                    上記のような特徴から、Jamstackは低コストで効率的・安全にウェブサイトを配信する方法として注目が集まっています。
                  </p>
                </div>
              </div>
              <div>
                <Image
                  src="/jamstack/serverLessStack.svg"
                  width={455}
                  height={497}
                  layout="intrinsic"
                  alt="lanpstack"
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <SectionTitle
            largeText="When to use Jamstack?"
            smallText="Jamstackを導入すべきか"
          />

          <p>
            すべてのウェブサイトをJamstackで作るべきかと言われれば、答えはNOです。以下では、Jamstackが向いている場合とそうでない場合の一例を紹介しています。
          </p>
          <div>
            <div>
              <div>
                <div>
                  <h3>Jamstackが向いているケース</h3>
                </div>
                <p>
                  一般的にJamstackは、以下のようなウェブサイトを構築するのに向いています。
                </p>

                <ul>
                  <li>コーポレートサイト</li>
                  <li>メディアサイト・ブログサイト</li>
                  <li>ランディングページ</li>
                </ul>
              </div>
              <div></div>
            </div>
            <div>
              <div>
                <div>
                  <h3>Jamstackが向いていないケース</h3>
                </div>

                <p>
                  CDNのキャッシュサーバに一時的にデータを保存して配信するという構造は効率的である反面、即座な情報更新が難しいというデメリットがあります。そのため、以下のようなケースではJamstackを採用しにくいです。
                </p>

                <ul>
                  <li>即時に情報を更新したいサービス（ニュース速報など）</li>
                  <li>ユーザ側で記事の投稿などを行うウェブサービス</li>
                  <li>会員制サイトなど、動的な要件の多いウェブサイト</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <TextAndButtonBlock
          paragraph="より詳しい制作の流れを知りたい、気になることがあれば、お気軽にお問い合わせください。"
          buttonDisplay="block"
          buttonText="More Details"
          url="/contact"
        />
      </main>
    </>
  );
};

export default JamstackDetail;
