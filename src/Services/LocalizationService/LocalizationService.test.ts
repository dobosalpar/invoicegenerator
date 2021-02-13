import LocalizationService from 'Services/LocalizationService/LocalizationService';

describe('Localization service', () => {
  test('Returns translation correctly for given locale', () => {
    const translation = LocalizationService.shared().getTranslationForLocale('en_EN', 'print');
    expect(translation).toBe('Print');
  });

  test('Returns key if translation not found', () => {
    const translation = LocalizationService.shared().getTranslationForLocale('en_EN', 'non_existing_key');
    expect(translation).toBe('non_existing_key');
  });
});
