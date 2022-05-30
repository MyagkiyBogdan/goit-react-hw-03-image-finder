import ImageGalleryItem from './ImageGalleryItem';
import styles from './ImageGallery.module.css';

function ImageGallery() {
  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItem />
    </ul>
  );
}

export default ImageGallery;
