import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enMessages from '../lang/en'
import esMessages from '../lang/es'
import ptMessages from '../lang/pt'
import deMessages from '../lang/de'
import frMessages from '../lang/fr'

Vue.use(VueI18n)

const messages = {
	'en': enMessages,
	'es': esMessages,
	'de': deMessages,
	'fr': frMessages,
	'pt': ptMessages
}
let locale = 'en';
if(localStorage.getItem("locale"))
    locale = localStorage.getItem("locale");
const i18n = new VueI18n({
	locale: locale, // set locale
	fallbackLocale: ['en', 'es', 'pt', 'de', 'fr'], // set fallback locale
	messages, // set locale messages
})

export default i18n
