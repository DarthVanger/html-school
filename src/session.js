export const getStudent = () => {
  const student = localStorage.getItem('student');
  if (student) {
    console.info(`Got student "${student}" from local storage`);
  } else {
    console.info(`No student is saved in localStorage`);
  }
  return student
}

export const setStudent = (student) => {
  localStorage.setItem('student', student);
  console.info(`Saved student "${student}" to local storage`);
}

export const logout = () => {
  localStorage.removeItem('student');
};
