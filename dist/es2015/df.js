import { I18N } from './i18n';

export let DfValueConverter = class DfValueConverter {
  static inject() {
    return [I18N];
  }
  constructor(i18n) {
    this.service = i18n;
  }

  toView(value, formatOptions, locale, dateFormat) {
    let df = dateFormat || this.service.df(formatOptions, locale || this.service.getLocale());

    return df.format(value);
  }
};