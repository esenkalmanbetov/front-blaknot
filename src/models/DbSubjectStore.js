import { types, getSnapshot } from 'mobx-state-tree'

import SubjectModel from './Subject.model'

const DbSubjectStore = types
  .model('DbSubjectStore', {
    Subjects: types.optional(types.array(SubjectModel), [])
  })
  .actions(self => ({
    setSubject(data) {
      console.log('store set', data)
      self.Subjects = data
    }
  }))
  .views(self => ({
    get getSubject() {
      return getSnapshot(self.Subjects)
    }
  }))

export default DbSubjectStore