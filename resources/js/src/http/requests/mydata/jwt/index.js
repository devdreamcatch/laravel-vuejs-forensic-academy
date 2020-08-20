import axios from '../../../axios/index.js'
import store from '../../../../store/store.js'

export default {
  savePersonalData (id, name, surname, cpf, sex, date_of_birth, telephone, whatsapp, email, password) {
    return axios.post('/api/savePersonalData/' + id, {
      name: name,
      surname: surname,
      cpf: cpf,
      sex: sex,
      date_of_birth: date_of_birth,
      telephone: telephone,
      whatsapp: whatsapp,
      email: email,
      password: password
    })
  }
}
