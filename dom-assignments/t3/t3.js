document.body.appendChild(
  Object.assign(document.createElement('p'), {
    textContent: 'Browser info: ' + navigator.userAgent,
  })
);

document.body.appendChild(
  Object.assign(document.createElement('p'), {
    textContent: 'Screen width: ' + screen.width + ', height: ' + screen.height,
  })
);

document.body.appendChild(
  Object.assign(document.createElement('p'), {
    textContent:
      'Available screen space: ' +
      screen.availWidth +
      ' x ' +
      screen.availHeight,
  })
);

const now = new Date();
const dateOptions = {day: 'numeric', month: 'long', year: 'numeric'};
const finnishDate = now.toLocaleDateString('fi-FI', dateOptions);
document.body.appendChild(
  Object.assign(document.createElement('p'), {textContent: finnishDate})
);

const timeOptions = {hour: '2-digit', minute: '2-digit', hour12: false};
const finnishTime = now.toLocaleTimeString('fi-FI', timeOptions);
document.body.appendChild(
  Object.assign(document.createElement('p'), {textContent: finnishTime})
);
