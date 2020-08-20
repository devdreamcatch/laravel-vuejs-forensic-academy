
import jwt from '../../http/requests/mydata/jwt/index.js'

import router from '@/router'

export default {

    savePersonalData ({ commit }, payload) {
        const { id, name, surname, cpf, sex, date_of_birth, telephone, whatsapp, email, password } = payload.userDetails
        return new Promise((resolve, reject) => {
            jwt.savePersonalData(id, name, surname, cpf, sex, date_of_birth, telephone, whatsapp, email, password)
                .then(response => {

                    // Update data in localStorage
                    commit('UPDATE_USER_INFO', response.data, {root: true})

                    resolve(response)
                })
                .catch(error => { reject(error) })
        })
    },
}
