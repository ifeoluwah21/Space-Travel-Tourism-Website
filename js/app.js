class ThisPage {
  constructor() {
    this.page = window;
    this.hamburgerBtn = this.page.document.querySelector(`.hamburger>img`);
    this.screenWidth;
    this.techImg = this.page.document.querySelector(
      `body#tech-body > main#tech-main > section.tech-section > div.space-img > img`
    );
    this.nav = this.page.document.querySelector(`nav.nav-all`);
  }

  techImgChange() {
    this.screenWidth = window.innerWidth;
    if (this.page.document.title.includes(`Technology`)) {
      if (this.screenWidth <= 1000) {
        if (this.techImg.src.includes(`landscape`)) {
          //Mobile or Tablet view already
        } else {
          this.techImg.src = this.techImg.src.replace(`portrait`, `landscape`);
        }
      } else {
        this.techImg.src = this.techImg.src.replace(`landscape`, `portrait`);
      }
    }
  }

  toggleHamburger() {
    if (this.hamburgerBtn.src.includes(`hamburger`)) {
      this.nav.classList.add(`toggle`);
      this.hamburgerBtn.src = this.hamburgerBtn.src.replace(
        `hamburger`,
        `close`
      );
      console.log(this.hamburgerBtn.src);
    } else {
      this.nav.classList.remove(`toggle`);
      this.hamburgerBtn.src = this.hamburgerBtn.src.replace(
        `close`,
        `hamburger`
      );
      console.log(this.hamburgerBtn.src);
    }
  }
}

const page = new ThisPage();

page.hamburgerBtn.addEventListener(`click`, () => {
  page.toggleHamburger();
});

window.addEventListener(`DOMContentLoaded`, (e) => {
  page.techImgChange();
});
window.addEventListener(`resize`, (e) => {
  page.techImgChange();
});
