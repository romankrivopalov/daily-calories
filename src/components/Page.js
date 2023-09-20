class Page {
  constructor(setting) {
    this.setting = setting;
    this.page = document.querySelector(this.setting.pageSelector);
    // привязка контекста для дальнейшего переопределения метода
    this.openPage = this.openPage.bind(this);
  }

  openPage() {
    this.page.classList.add(this.setting.pageShowClass);
  }

  closePage() {
    this.page.classList.remove(this.setting.pageShowClass);
  }
}

export default Page
