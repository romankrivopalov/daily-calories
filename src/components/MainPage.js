import Page from './Page.js';

class MainPage extends Page {
  constructor(setting, handleNewPopup, handleNewEating, handleGetUserData) {
    super(setting);
    this._btnAddProduct = this.page.querySelector(this.setting.btnAddEatingSelector);
    this._eatingContainer = this.page.querySelector('.main__list');
    this._goalsCalorie = this.page.querySelector('.main__title[data-type="calories-goals"]');
    this._handleNewPopup = handleNewPopup;
    this._handleNewEating = handleNewEating;
    this._handleGetUserData = handleGetUserData;
    // счетчик элементов для отслеживания удаляемого элемента из localStorage;
    this.countEating = 0;
  }

  _calculateGoalsCalories = () => {
    const { gender, age, height, weight, activity } = this._handleGetUserData();
    let DCI;
    let ratio = activity === 'low' ? 1.2 : activity === 'middle' ? 1.5 : 1.9;

    if (gender === 'male') {
      DCI = (((weight * 10) + (height * 6.25) - (age * 5)) + 5) * ratio
    } else {
      DCI = (((weight * 10) + (height * 6.25) - (age * 5)) - 161) * ratio
    }

    return DCI
  }

  _clearContainer = () => {
    this._eatingContainer.innerHTML = '';
  }

  // удаление элемента из объекта в localStorage
  removeDataInLocalStorage = (count) => {
    // получение объекта
    const data = JSON.parse(localStorage.getItem('eating'));

    // фильтрация массива по счетчику элементов с помощью оператора нулевого слияния
    const newData = data.data.filter(item => item.count !== count ?? item);

    // установк новых данных, без удаляемого элемента
    localStorage.setItem('eating', JSON.stringify({date: data.date, data: newData}));
  }

  setNewEating = (data) => {
    // увеличение счетчика
    this.countEating++;

    // создание нового элемента
    const eating = this._handleNewEating(data, this.countEating);
    // установка нового элемента на страницу
    this._eatingContainer.prepend(eating);

    // сборка объекта для установки данных в localStorage
    const newData = {count: this.countEating, products: data};
    const date = new Date();

    // получение значения для проверки наличия данных
    const dataInLS = JSON.parse(localStorage.getItem('eating'));

    localStorage.setItem('eating', JSON.stringify({
      date: `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}`,
      data: dataInLS ? [...dataInLS.data, newData] : [newData]
    }))
  }

  setEventListeners = () => {
    this._openPopup = this._handleNewPopup();

    this._btnAddProduct.addEventListener('click', () => {
      this._openPopup();
    })
  }

  openPage() {
    super.openPage();

    const data = JSON.parse(localStorage.getItem('eating'));

    if (data) {
      const date = new Date();

      // если дата не совпадает с текущей, очистка контейнера и локального хранилища
      if (`${date.getDay()}.${date.getMonth()}.${date.getFullYear()}` === data.date) {
        this._clearContainer();

        const eating = data.data.map(item => {
          // проверка величины count элментов, самое большое значение записываем в переменную счетчика
          if (item.count > this.countEating) this.countEating = item.count;

          // возвращвем в массив, созданные элементы. Счётчик для отслеживания удаляемого элемента
          return this._handleNewEating(item.products, this.countEating);
        });

        eating.forEach(eating => this._eatingContainer.prepend(eating));
      } else {
        this.countEating = 0;
        this._clearContainer();
        localStorage.removeItem('eating');
      }
    }

    this._goalsCalorie.textContent = `${Math.round(this._calculateGoalsCalories())} ккал`;
  }
}

export default MainPage
