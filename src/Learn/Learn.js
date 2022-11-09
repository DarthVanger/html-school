export const Learn = (state) => {
  console.log('Learn. state: ', state);

  return `
    <h1>Choose Your Destiny</h1>
    <div class="learning-path">
      ${ObjectCollisionFunction()}
      ${ObjectCollisionFunction()}
      ${AddThreeWalls()}
      ${ArraysAndLoops()}
      ${ManyWalls()}
      ${RandomWalls()}
    </div>
  `;
};
