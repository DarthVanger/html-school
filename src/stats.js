export const calculateCodeAcademyPoints = ({ codeAcademy, student }) => {
    if (!codeAcademy[student]) {
      return 0;
    }
    return codeAcademy[student].reverse()[0].points;
  }
