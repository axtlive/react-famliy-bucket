import store from './index';
import { setUserAction, fetchData } from '../action/userAction'
import { searchStudents, searchAllStudents } from '../../services/student'

// searchStudents().then(res => {
//   console.log('res :>> ', res);
// })

store.dispatch(fetchData())