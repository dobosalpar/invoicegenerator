import Romanian from 'Constants/Romanian.json';

const supportedLocales = ['ro_RO'] as const;

export type LocaleType = typeof supportedLocales[number]

interface ITranslation {
  [key: string]: string,
};

interface ILocalizationService {
  getTranslationForLocale: (locale: LocaleType, key: string) => string;
}

class LocalizationService implements ILocalizationService {
  static instance: ILocalizationService;
  static shared() {
    if (!this.instance) {
      this.instance = new LocalizationService();
    }
    return this.instance;
  };

  public getTranslationForLocale(locale: LocaleType, key: string) {
    let currentTranslation = {};
    switch (locale) {
      case 'ro_RO':
        currentTranslation = Romanian;
        break;
      default:
        currentTranslation = Romanian;
        break;
    }
    const translatedText = this.getTranslationFromText(currentTranslation, key);
    if (!translatedText) {
      return key;
    }
    return translatedText;
  }

  private getTranslationFromText(currentTranslation: ITranslation, key: string) {
    return currentTranslation[key];
  }
}

export default LocalizationService;
