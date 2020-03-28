export class ThemeSwitcher {
  constructor() {
    this.control = document.querySelector('.theme-control');
    this.theme = this.getTheme();
    this.lsKey = 'gdchTheme';

    this.control.addEventListener('click', () => {
      this.theme = this.theme === 'seagreen' ? 'default' : 'seagreen';

      this.setTheme();
    });
  }

  getTheme() {
    let theme = localStorage[this.lsKey];
    theme = theme || 'seagreen';

    return theme;
  }

  setTheme() {
    document.body.dataset.theme = this.theme;
    localStorage[this.lsKey] = this.theme;
  }
}
