// Function that will sent an alert showing the button that was clicked
export function showAlert (e) {
  const { target : { innerHTML } } = e;
  alert(`You clicked on : ${innerHTML}`);
}

export const MAX_RESULTS_PER_PAGE = 10;