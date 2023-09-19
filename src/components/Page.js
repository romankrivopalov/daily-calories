class Page {
  constructor(setting) {
    this.setting = setting;
    this._page = document.querySelector(this.setting.pageSelector);
  }

  openPage = () => {
    this._page.classList.add(this.setting.pageShowClass);
  }

  closePage = () => {
    this._page.classList.remove(this.setting.pageShowClass);
  }
}

export default Page
