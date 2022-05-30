import ImageGallery from './ImageGallery';
import Loader from './Loader';
import Searchbar from './Searchbar';
import Modal from './Modal';
import Button from './Button';

export const App = () => {
  return (
    <div className="App">
      <Searchbar />
      <ImageGallery />
      <Loader />
      <Button />
      {/* <Modal /> */}
    </div>
  );
};
