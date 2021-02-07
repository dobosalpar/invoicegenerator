import { useSelector } from 'react-redux';

import LocalizationService, { LocaleType } from 'Services/LocalizationService/LocalizationService';
import { RootStateType } from 'Redux/Reducers';

const useLocalized = (key: string): string => {
  const locale = useSelector<RootStateType, LocaleType>(state => state.employeeData.locale);
  return LocalizationService.shared().getTranslationForLocale(locale, key);
};

export default useLocalized;
