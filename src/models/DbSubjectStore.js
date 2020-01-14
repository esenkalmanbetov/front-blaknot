import { types, getSnapshot } from 'mobx-state-tree'

import axios from 'axios'

import api from './api.config'
import SubjectModel from './Subject.model'

const DbSubjectStore = types
  .model('DbSubjectStore', {
    Subjects: types.optional(types.array(SubjectModel), [])
  })
  .actions(self => ({
    createSubject(data) {

      axios.post(`${api}/subjects`, data)
        .then((response) => {
          console.log(response.data);
        }, (error) => {
          console.log(error);
        });

    }
  }))
  .views(self => ({
    get getSubject() {
      return getSnapshot(self.Subjects)
    }
  }))

export default DbSubjectStore