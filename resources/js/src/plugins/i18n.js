import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enMessages from '../lang/en'
import esMessages from '../lang/es'
import ptMessages from '../lang/pt'

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