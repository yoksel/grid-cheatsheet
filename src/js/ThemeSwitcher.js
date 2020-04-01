const themes = [
  'default',
  'seagreen',
  'winter',
  'warm',
  'sunny',
  'brown'
];

export class ThemeSwitcher {
  constructor() {
    this.lsKey = 'gdchTheme';
    this.counter = 0;
    this.theme = this.getTheme();
    this.control = document.querySelector('.theme-control');

    this.control.addEventListener('click', () => {
      this.counter++;

      if(this.counter > themes.length - 1) {
        this.counter = 0;
      }

      this.theme = themes[this.counter];

      this.setTheme();
    });
  }

  getTheme() {
    let theme = localStorage.getItem(this.lsKey);
    theme = theme || 'seagreen';
    this.counter = themes.indexOf(theme);

    return theme;
  }

  setTheme() {
    document.body.dataset.theme = this.theme;
    localStorage.setItem(this.lsKey, this.theme);
  }
}
