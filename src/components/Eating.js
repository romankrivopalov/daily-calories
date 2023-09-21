class Eating {
  constructor(setting) {
    this._setting = setting;
    this._totalCalories = 0;
  }

  _setEventListeners = () => {
    this._btnRemoveEating.addEventListener('click', () => {
      this._eating.remove();
    })
  }

  // подсчёт калорийности
  _calculateCalories = (weight, initial) => {
    // калории продукта указываются с расчётом на 100 грамм
    const calories = Math.round(weight / 100 * initial);
    this._totalCalories += calories;

    return calories;
  }

  // создание продукта для приёма пищи
  _createItem = (data) => {
    const item = document.createElement('li');
    item.className = 'main__eating-item'
    item.textContent = `${data.name}, ${data.weight} грамм, ${this._calculateCalories(data.weight, data.calories)} ккал`;

    return item;
  }

  // установка продука в приём пищи
  _setItem = (container, item) => {
    container.prepend(item);
  }

  // генерация шаблона
  _getTemplate = () => {
    const eatingElement = document
      .querySelector(this._setting.templateSelector)
      .content
      .querySelector(this._setting.eatingItemSelector)
      .cloneNode(true);

    return eatingElement;
  }

  // генерация продукта
  generateEating = (data) => {
    this._eating = this._getTemplate();
    this._btnRemoveEating = this._eating.querySelector(this._setting.btnEatingRemoveSelector);
    this._eatingTitle = this._eating.querySelector('.main__eating-title');
    this._eatingList = this._eating.querySelector('.main__eating-wrapper');

    data.forEach(item => this._setItem(this._eatingList, this._createItem(item)));
    this._eatingTitle.textContent = `Приём пищи, ${this._totalCalories} ккал`

    this._setEventListeners();

    return this._eating;
  }
}

export default Eating
