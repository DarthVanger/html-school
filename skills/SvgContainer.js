export const SvgContainer = ({width, height, children}) => `
  <svg height="${height}" viewBox="0 0 ${width} ${height}">
  ${children}
  </svg>
`;
