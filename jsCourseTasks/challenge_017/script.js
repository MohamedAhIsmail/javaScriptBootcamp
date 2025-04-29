let theTitle, theDescription, theDate;

theTitle = "Elzero";
theDescription = "Elzero Web School";
theDate = "25/10";

let markUp = `
  <div>
    <h3>${theTitle}</h3>
    <p>${theDescription}</p>
    <span>${theDate}</span>
  </div>
`;

document.write(markUp.repeat(4));
