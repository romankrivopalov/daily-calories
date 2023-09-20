class Product {
  constructor(setting) {
    this._setting = setting;
  }

  _setEventListeners = () => {
    this._btnDelete.addEventListener('click', () => {
      this._product.remove();
    })
  }

  _getTemplate = () => {
    const productElement = document
      .querySelector(this._setting.productTemplateSelector)
      .content
      .querySelector(this._setting.productSelector)
      .cloneNode(true);

    return productElement;
  }

  generateProduct = (data) => {
    this._product = this._getTemplate();
    this._name = this._product.querySelector(this._setting.productNameSelector);
    this._calories = this._product.querySelector(this._setting.productcaloriesSelector);

    this._name.textContent = data.name;
    this._calories.textContent = data.calories;

    this._btnDelete = this._product.querySelector(this._setting.productBtnDeleteSelector);
    this._setEventListeners();

    return this._product
  }
}

export default Product;
