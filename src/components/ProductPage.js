import Page from './Page.js';

class ProductPage extends Page {
  constructor(setting, handleNewPopup, handleSetProduct) {
    super(setting);
    this._productContainer = this.page.querySelector(this.setting.productContainer);
    this._btnAddProduct = this.page.querySelector(this.setting.btnAddProductSelector);
    this._handleNewPopup = handleNewPopup;
    this._handleSetProduct = handleSetProduct;
  }

  // добавление продукта на страницу
  setProduct = (data) => {
    this._productContainer.prepend(this._handleSetProduct(data))
  }

  setEventListeners = () => {
    this._openPopup = this._handleNewPopup()

    this._btnAddProduct.addEventListener('click', () => {
      this._openPopup();
    })
  }
}

export default ProductPage
