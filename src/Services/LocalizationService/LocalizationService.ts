import English from 'Constants/English.json';

const supportedLocales = ['en_EN'] as const;

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
      case 'en_EN':
        currentTranslation = English;
        break;
      default:
        currentTranslation = English;
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
