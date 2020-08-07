import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enMessages from '../lang/en.json'
import esMessages from '../lang/es.json'
import ptMessages from '../lang/pt.json'

Vue.use(VueI18n)

const messages = {
	'en': enMessages,
	'es': esMessages,
	'pt': ptMessages
}

const i18n = new VueI18n({
	locale: 'en', // set locale
	fallbackLocale: ['en', 'es', 'pt'], // set fallback locale
	messages, // set locale messages
})

export default i18n