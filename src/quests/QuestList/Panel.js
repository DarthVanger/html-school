export const Panel = ({ children, className, onClick }) => {

  return `
    <div class="panel ${className}">
      <div class="panel-content">
        ${children}
      </div>
     </div>
   `;
}
