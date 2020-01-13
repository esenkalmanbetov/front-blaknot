import { types } from 'mobx-state-tree'

const SubjectModel = types.model('SubjectModel', {
  Title: types.optional(types.string, ''),
  Description: types.optional(types.string, ''),
  CreatedDate: types.maybeNull(types.Date),
  UpdatedDate: types.maybeNull(types.Date)
})

export default SubjectModel