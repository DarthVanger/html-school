export const Quest = ({ imgSrc, isCompleted }) => `
  <div class="quest${isCompleted && ' is-completed' || ''}">
    <img src="${imgSrc}" />
  </div>
`;
