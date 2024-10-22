import Image from 'next/image';
import styles from './CatCard.module.css';

export interface ICatCard {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
};

// 推荐用Image，这里是因为一般情况下Image只能加载本地文件，需要next.config.js配置相关域名，所以才换成了img
const CatCard: React.FC<ICatCard> = ({ tag, title, body, author, time }) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <img
            src="https://fastly.picsum.photos/id/841/200/300.jpg?hmac=G9hBg_h2jvXDwBgnqCm8LO9PXRrPRWbz1xgdUrMf1Y8"
            className={styles.card__image}
          />
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles['tag-blue']}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <img
              src="https://i.pravatar.cc/40?img=3"
              className={styles.user__image}
            />
            <div className={styles.user__info}>
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
