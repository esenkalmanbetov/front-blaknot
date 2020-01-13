import { types, getSnapshot } from 'mobx-state-tree'

import SubjectModel from './Subject.model'

const DbSubjectStore = types
  .model('DbSubjectStore', {
    Subjects: types.optional(types.array(SubjectModel), [])
  })
  .actions(self => ({
    createSubject(data) {
      console.log('store set', data)
    }
  }))
  .views(self => ({
    get getSubject() {
      return getSnapshot(self.Subjects)
    }
  }))

export default DbSubjectStore