export const getStudent = () =>
  localStorage.getItem('student');

export const setStudent = (student) =>
  localStorage.setItem('student', student);

export const logout = () => {
  localStorage.removeItem('student');
};
