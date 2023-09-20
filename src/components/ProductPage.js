import Page from './Page.js';

class ProductPage extends Page {
  constructor(setting, handleNewPopup, handleSetProduct) {
    super(setting);
    this._productContainer = this.page.querySelector(this.setting.productContainer);
    this._btnAddProduct = this.page.querySelector(this.setting.btnAddProductSelector);
    this._btnSortName = this.page.querySelector('.products__title[data-type="sort-name"]');
    this._btnSortCalories = this.page.querySelector('.products__title[data-type="sort-calories"]');
    this._allBtnsSort = [this._btnSortName, this._btnSortCalories];
    this._titleReverseIconClass = 'products__title_icon-reverse';
    this._handleNewPopup = handleNewPopup;
    this._handleSetProduct = handleSetProduct;
    this._allProducts = [];
    this._isReverseSort = false;
  }

  removeProduct = (data) => {
    // методом фильтр возвращаем новый массив, за исключением переданного объекта
    this._allProducts = this._allProducts.filter(product =>
      product.name !== data.name && +product.calories !== +data.calories
    );
  }

  _sortProducts = (attr, activeSortBrn) => {
    const sortProducts = this._allProducts.sort((a, b) => {
      return (b[attr] < a[attr]) - (a[attr] < b[attr])
    })

    // очистка контейнера и переменной содержащей все продукты
    this._productContainer.innerHTML = '';
    this._allProducts = [];

    // проверка состояния переменной для определения последовательности отрисовки новых, перебранных элементов
    if (!this._isReverseSort) {
      // убрать активный класс у всех кнопок
      this._allBtnsSort.forEach(btn => btn.classList.remove(this._titleReverseIconClass));
      // добавить активный класс переданной кнопке
      activeSortBrn.classList.add(this._titleReverseIconClass);

      sortProducts.reverse().forEach(product => this.setProduct(product));
    } else {
      this._allBtnsSort.forEach(btn => btn.classList.remove(this._titleReverseIconClass));
      activeSortBrn.classList.remove(this._titleReverseIconClass);

      sortProducts.forEach(product => this.setProduct(product));
    }

    // изменение состояние переменной для опередения разворота массива
    this._isReverseSort = !this._isReverseSort;
  }

  // добавление продукта на страницу
  setProduct = (data) => {
    this._allProducts.push(data)

    this._productContainer.prepend(this._handleSetProduct(data));
    localStorage.setItem('products', JSON.stringify(this._allProducts));
  }

  setEventListeners = () => {
    this._openPopup = this._handleNewPopup()

    this._btnAddProduct.addEventListener('click', () => {
      this._openPopup();
    });

    this._btnSortName.addEventListener('click', () => {
      this._sortProducts(this._btnSortName.getAttribute('data-sort'), this._btnSortName);
    });

    this._btnSortCalories.addEventListener('click', () => {
      this._sortProducts(this._btnSortCalories.getAttribute('data-sort'), this._btnSortCalories);
    });
  }

  // переопределение метода открытия страницы
  openPage() {
    const productsData = JSON.parse(localStorage.getItem('products'));

    if (productsData) {
      this._productContainer.innerHTML = '';
      this._allProducts = [];

      productsData.forEach(product => this.setProduct(product));
    }

    super.openPage();
  }
}

export default ProductPage
