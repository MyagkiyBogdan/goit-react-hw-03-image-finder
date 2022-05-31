import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Modal from './Modal';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    searchInfo: '',
  };

  handleFormSubmit = searchInfo => {
    this.setState({ searchInfo: searchInfo });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchInfo={this.state.searchInfo} />
        {/* <Modal /> */}
        <ToastContainer autoClose={2500} />
      </div>
    );
  }
}

// Загрузку Loader пока идет подгрузка по кнопке load more
// Сделать модалку и открытие больших изображений
// Сделать проп тайпы
