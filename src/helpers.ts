export const clearStyle = (id: string) => {
  const element = document.getElementById(id);
  if (element?.parentElement) {
    element.parentElement.removeChild(element);
  }
};

export const addStyle = (id: string, css: string) => {
  const existingStyle = document.getElementById(id);
  if (existingStyle) {
    if (existingStyle.innerHTML !== css) {
      existingStyle.innerHTML = css;
    }
  } else {
    const style = document.createElement('style');
    style.setAttribute('id', id);
    style.innerHTML = css;
    document.head.appendChild(style);
  }
};