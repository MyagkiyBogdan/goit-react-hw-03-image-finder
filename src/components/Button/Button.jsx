import { Component } from 'react';
import styles from './Button.module.css';
import imagesAPI from '../../services/pixabay-api';

class Button extends Component {
  page = this.props.page;

  makeGalleryForMarkup = async () => {
    this.page += 1;
    // pixibay-api import
    const fetchedImages = await imagesAPI.fetchImages(
      this.props.searchInfo,
      this.page
    );
    const images = fetchedImages.hits;
    console.log(images);
    return images;
  };

  render() {
    return (
      <button
        type="button"
        className={styles.Button}
        onClick={() => this.props.moreImgs(this.makeGalleryForMarkup())}
      >
        Load more
      </button>
    );
  }
}

export default Button;
