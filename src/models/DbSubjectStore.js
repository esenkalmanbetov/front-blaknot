import { types, getSnapshot } from 'mobx-state-tree'
import { axios } from 'axios'

import SubjectModel from './Subject.model'

const DbSubjectStore = types
  .model('DbSubjectStore', {
    Subjects: types.optional(types.array(SubjectModel), [])
  })
  .actions(self => ({
    createSubject(data) {
      // console.log('store set', data)
      axios.post('/subject', data)
      .then(resp => {
        console.log(resp);
      })
      .catch(err => {
        console.log(err);
      });
    }
  }))
  .views(self => ({
    get getSubject() {
      return getSnapshot(self.Subjects)
    }
  }))

export default DbSubjectStore