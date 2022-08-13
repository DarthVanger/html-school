export const LectureSkills = ({ skills }) => {
  let html = '<div class="lecture-skills">'; 

  skills.forEach(skill => {
    html += LectureSkill({skill});
  });

  html += '</div>';

  return html;
};

const LectureSkill = ({skill}) => `
  <div class="lecture-skill">
    ${skill}
  </div>
`;
