import { types } from 'mobx-state-tree'

const SubjectModel = types.model('SubjectModel', {
  id: types.optional(types.number, 0),
  Title: types.optional(types.string, ''),
  Description: types.optional(types.string, ''),
  CreatedDate: types.maybeNull(types.string, null),
  UpdatedDate: types.maybeNull(types.string, null)
})

export default SubjectModel