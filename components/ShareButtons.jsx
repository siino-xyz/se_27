import {
  TwitterIcon,
  TwitterShareButton,
  FacebookShareButton,
  FacebookIcon,
  LineIcon,
  LineShareButton,
  PinterestIcon,
  PinterestShareButton,
} from "react-share";
import styles from "../styles/components/shareButton.module.scss";

const ShareButtons = ({ articles }) => {
  return (
    <>
      <div className={styles.shareWrapper}>
        <h4>この記事をシェアする</h4>
        <div className={styles.shareBtns}>
          <div className={styles.item}>
            <TwitterShareButton
              url={[`https://se-27.com/articles/${articles.id}`]}
              title={[articles.title]}
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </div>
          <div className={styles.item}>
            <FacebookShareButton
              url={[`https://se-27.com/articles/${articles.id}`]}
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </div>
          <div className={styles.item}>
            <LineShareButton
              url={[`https://se-27.com/articles/${articles.id}`]}
              title={[articles.title]}
            >
              <LineIcon size={32} round />
            </LineShareButton>
          </div>
          <div className={styles.item}>
            <PinterestShareButton
              url={[`https://se-27.com/articles/articles/${articles.id}`]}
              media={[`http://localhost:8080/${articles.eye_catch.url}`]}
              description={[articles.title]}
            >
              <PinterestIcon size={32} round />
            </PinterestShareButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShareButtons;
