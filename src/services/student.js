// export async function getAllStudents() {

// }

export async function searchAllStudents() {
  return await fetch(`http://localhost:8900/queryAllStudents`)
    .then(resp => resp.json()).then(resp => resp.data);
}

export async function searchStudents({ page = 1, limit = 10, key = '', sex = -1 } = {}) {
  return await fetch(`http://localhost:8900/queryStudents?page=${page}&pageSize=${limit}&key=${key}&sex=${sex}`)
    .then(resp => resp.json()).then(resp => resp);
}

export async function searchStudentsCount({ key = '', sex = -1 } = {}) {
  return await fetch(`http://localhost:8900/queryStudentsCount?key=${key}&sex=${sex}`)
    .then(resp => resp.json()).then(resp => resp);
}