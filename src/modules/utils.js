/**
 *
 * @param size The size in the state of the parent element
 * @param selector element width to get as reference
 */
export const setSize = selector => size => {
  const componentWidth = document.querySelector(selector).offsetWidth - 30;
  if (componentWidth !== size) {
    this.setState({
      size: componentWidth
    });
  }
};
