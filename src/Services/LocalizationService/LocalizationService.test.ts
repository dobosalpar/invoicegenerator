import LocalizationService from 'Services/LocalizationService/LocalizationService';

describe('Localization service', () => {
  test('Returns translation correctly for given locale', () => {
    const translation = LocalizationService.shared().getTranslationForLocale('ro_RO', 'print');
    expect(translation).toBe('Imprimare');
  });

  test('Returns key if translation not found', () => {
    const translation = LocalizationService.shared().getTranslationForLocale('ro_RO', 'non_existing_key');
    expect(translation).toBe('non_existing_key');
  });
});
