export class ThemeSwitcher {
  constructor() {
    this.lsKey = 'gdchTheme';
    this.theme = this.getTheme();

    this.control = document.querySelector('.theme-control');
    this.control.addEventListener('click', () => {
      this.theme = this.theme === 'seagreen' ? 'default' : 'seagreen';

      this.setTheme();
    });
  }

  getTheme() {
    let theme = localStorage.getItem(this.lsKey);
    theme = theme || 'seagreen';

    return theme;
  }

  setTheme() {
    document.body.dataset.theme = this.theme;
    localStorage.setItem(this.lsKey, this.theme);
  }
}
