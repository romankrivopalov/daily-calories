class Page {
  constructor(setting) {
    this._setting = setting;
    this._page = document.querySelector(this._setting.pageSelector);
  }

  openPage = () => {
    this._page.classList.add(this._setting.pageShowClass);
  }

  closePage = () => {
    this._page.classList.remove(this._setting.pageShowClass);
  }
}

export default Page
