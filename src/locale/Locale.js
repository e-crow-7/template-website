import { Store } from "@redux";
import { initialize, addTranslationForLanguage } from "react-localize-redux";

export const MISSING_MESSAGE = "\uFFFD";

export const LANGUAGES = [
  { name: "English (US)", code: "en-us" },
  { name: "English (UK)", code: "en-uk" }
];

class Locale {
  static init() {
    // Dispatch language metadata message
    Store.dispatch(
      initialize({
        languages: LANGUAGES,
        options: { renderToStaticMarkup: false }
      })
    );

    // Dispatch language data
    LANGUAGES.forEach(language => {
      const data = require(`./${language.code}.json`);
      Store.dispatch(addTranslationForLanguage(data, language.code));
    });
  }
}

export default Locale;
