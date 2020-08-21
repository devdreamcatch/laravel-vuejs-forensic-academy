
import axios from '@/axios'

export default {
    savePersonalData ({ commit }, payload) {
        const { id, name, surname, cpf, sex, date_of_birth, telephone, whatsapp, email } = payload.userDetails
        return new Promise((resolve, reject) => {
            axios.post(`/api/savePersonalData/${id}`, {
                name: name,
                surname: surname,
                cpf: cpf,
                sex: sex,
                date_of_birth: date_of_birth,
                telephone: telephone,
                whatsapp: whatsapp,
                email: email,
            })
            .then(response => {
                // Update data in localStorage
                commit('UPDATE_USER_INFO', response.data, {root: true})

                resolve(response)
            })
            .catch(error => { reject(error) })
        })
    }
}
