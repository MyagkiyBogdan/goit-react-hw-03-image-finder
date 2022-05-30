import styles from './ImageGalleryItem.module.css';

function ImageGalleryItem() {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src="" alt="" className={styles.ImageGalleryItemImage} />
    </li>
  );
}

export default ImageGalleryItem;
