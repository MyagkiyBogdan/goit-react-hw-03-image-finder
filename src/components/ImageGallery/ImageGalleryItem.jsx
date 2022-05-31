import styles from './ImageGalleryItem.module.css';

function ImageGalleryItem({ id, webformatURL, largeImageURL, tags }) {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
}

export default ImageGalleryItem;
