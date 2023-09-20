class Page {
  constructor(setting) {
    this.setting = setting;
    this.page = document.querySelector(this.setting.pageSelector);
  }

  openPage = () => {
    this.page.classList.add(this.setting.pageShowClass);
  }

  closePage = () => {
    this.page.classList.remove(this.setting.pageShowClass);
  }
}

export default Page
