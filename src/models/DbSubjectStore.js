import { types, getSnapshot, flow } from 'mobx-state-tree'

import axios from 'axios'

import api from './api.config'
import SubjectModel from './Subject.model'

const DbSubjectStore = types
  .model('DbSubjectStore', {
    _subjects: types.optional(types.array(SubjectModel), []),
  })
  .actions(self => ({

    getAllSubjects: flow(function* getAllSubjects() {
      self._subjects = []
      try {
        const response = yield axios.get(`${api}/subjects`)
        self._subjects = response.data
      } catch (error) {
        console.error("Failed to fetch projects", error)
      }
    }),

    createSubject: flow(function* createSubject(data) {
      self._subjects = []
      try {
        const response = yield axios.post(`${api}/subjects`, data)
        self._subjects = response.data
      } catch (error) {
        console.error("Failed to fetch projects", error)
      }
    })
  }))
  .views(self => ({
    get getSubjects() {
      return getSnapshot(self._subjects)
    }
  }))

export default DbSubjectStore