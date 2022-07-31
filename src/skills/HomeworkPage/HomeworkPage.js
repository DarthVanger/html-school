import { HomeworkList } from './HomeworkList.js';
import { HomeworkForm } from './HomeworkForm.js';
import { getHomework, addHomework } from './api.js';

const element = document.createElement('div');
let state = {};
const setState = (newState, props) => {
  state.homework = newState.homework;
  HomeworkPage(props);
};

export const HomeworkPage = (props) => {
  console.log('homework page props', props);
  const { student, skill } = props;
  setTimeout(async () => {
    if (!state.homework) {
      const homework = await getHomework({ student });
      setState({ homework }, props);
    }
  });

  const onSubmit = async (homework) => {
    await addHomework({ student, homework });
    setState({
      homework: null,
    }, props);
  }

  element.className = 'modal';
  element.id = 'homework-page';

  element.innerHTML = `
    <h1>Домашэчка)</h1>
  `;

  element.append(HomeworkList({ homework: state.homework }));
  element.append(HomeworkForm({ skill, onSubmit }));

  return element;
};
