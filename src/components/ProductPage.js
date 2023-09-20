import Page from './Page.js';

class ProductPage extends Page {
  constructor(setting, handleOpenPopup) {
    super(setting);
    this._btnAddProduct = this._page.querySelector('.button[data-type="product-add"]');
    this._handleOpenPopup = handleOpenPopup;
  }

  setEventListeners = () => {
    this._btnAddProduct.addEventListener('click', () => {
      this._handleOpenPopup();
    })
  }
}

export default ProductPage
