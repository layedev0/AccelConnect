export class AppConfig {
  static readonly logoUrl = 'assets/logo/accel_logo.png';
  static readonly defaultAvatar = 'assets/img/nasr_new.jpg';

  static readonly icons = [
    'assets/icons/menu.png',
    'assets/icons/ressources.png',
    'assets/icons/rh.png',
    'assets/icons/commercial.png',
    'assets/icons/moyens.png',
    'assets/icons/formation.png',
  ];

  static readonly iconTitles = [
    'Menu',
    'Ressources',
    'R.H.',
    'Commercial',
    'Moyens Généraux',
    'Formation',
  ];

  // 🆕 Routes associées à chaque icône
  static readonly iconRoutes = [
    '/restauration',
    '/ressources',
    '/rh',
    '/commercial',
    '/moyens',
    '/formation',
  ];

  static readonly colors = {
    primary: '#25509D',
    secondary: '#99CFBD',
    accent: '#E84141',
    dark: '#20264E',
    darkAccent: '#6B140F',
    gray: '#303131',
    lightGray: '#E1E1E1',
    white: '#FFFFFF',
  };
}
