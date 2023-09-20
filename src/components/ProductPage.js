import Page from './Page.js';

class ProductPage extends Page {
  constructor(setting, handleNewPopup, handleSetProduct) {
    super(setting);
    this._productContainer = this.page.querySelector(this.setting.productContainer);
    this._btnAddProduct = this.page.querySelector(this.setting.btnAddProductSelector);
    this._btnSortName = this.page.querySelector('.products__title[data-type="sort-name"]');
    this._btnSortCalories = this.page.querySelector('.products__title[data-type="sort-calories"]');
    this._handleNewPopup = handleNewPopup;
    this._handleSetProduct = handleSetProduct;
    this._allProducts = [];
  }

  removeProduct = (data) => {
    this._allProducts = this._allProducts.filter(product =>
      console.log(product.name, data.name, +product.calories, +data.calories)
      (product.name === data.name) && (+product.calories === +data.calories)
    );
    console.log(this._allProducts)
  }

  _sortProducts = (attr) => {
    console.log(attr)
  }

  // добавление продукта на страницу
  setProduct = (data) => {
    this._allProducts.push(data)

    this._productContainer.prepend(this._handleSetProduct(data));
  }

  setEventListeners = () => {
    this._openPopup = this._handleNewPopup()

    this._btnAddProduct.addEventListener('click', () => {
      this._openPopup();
    });

    this._btnSortName.addEventListener('click', () => {
      this._sortProducts(this._btnSortName.getAttribute('data-sort'));
    });

    this._btnSortCalories.addEventListener('click', () => {
      this._sortProducts(this._btnSortCalories.getAttribute('data-sort'));
    });
  }
}

export default ProductPage
