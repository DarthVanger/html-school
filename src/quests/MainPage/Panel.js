export const Panel = ({ children }) => {

  return `
    <div class="panel">
      <div class="panel-content">
        ${children}
      </div>
     </div>
   `;
}
