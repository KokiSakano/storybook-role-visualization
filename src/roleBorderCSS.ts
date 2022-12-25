export default function (selector: string) {
  return `
  ${selector} button {
    outline: 1px solid #2980b9 !important;
  }
  ${selector} [role="button"] {
    outline: 1px solid #2980b9 !important;
  }
  `;
}
