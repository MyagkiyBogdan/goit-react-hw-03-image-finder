import PropTypes from 'prop-types';
import { Component } from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';
import Button from '../Button';
import Loader from 'components/Loader';
import imagesAPI from '../../services/pixabay-api';

class ImageGallery extends Component {
  // idle
  // pending
  // rejected
  // resolved

  state = {
    images: null,
    error: null,
    status: 'idle',
  };

  page = 1;

  componentDidUpdate(prevProps, prevState) {
    this.page = 1;

    if (prevProps.searchInfo !== this.props.searchInfo) {
      this.setState({ status: 'pending' });
      // pixibay-api import
      imagesAPI
        .fetchImages(this.props.searchInfo, this.page)
        .then(images =>
          this.setState({ images: images.hits, status: 'resolved' })
        )
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleImagesUpdate = moreImgs => {
    moreImgs.then(res =>
      this.setState(prevState => {
        return { images: [...prevState.images, ...res] };
      })
    );
  };

  render() {
    const { images, error, status } = this.state;

    if (status === 'idle') {
      return <p className={styles.text}> Hello! What you want to find?</p>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <p className={styles.text}>{error.message}</p>;
    }

    if (status === 'resolved' && images.length === 0) {
      return (
        <p className={styles.text}>
          No images on {this.props.searchInfo} topic
        </p>
      );
    }

    if (status === 'resolved') {
      return (
        <>
          <ul className={styles.ImageGallery}>
            {images &&
              images.map(img => (
                <ImageGalleryItem
                  key={img.id}
                  webformatURL={img.webformatURL}
                  largeImageURL={img.largeImageURL}
                  tags={img.tags}
                  toggleModal={this.props.toggleModal}
                />
              ))}
          </ul>
          <Button
            page={this.page}
            searchInfo={this.props.searchInfo}
            moreImgs={this.handleImagesUpdate}
          />
        </>
      );
    }
  }
}

ImageGallery.propTypes = {
  searchInfo: PropTypes.string,
  toggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
