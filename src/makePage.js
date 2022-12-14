/** @format */
function makePage(data) {
  const compName = data.company;

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"
      />
      <link rel="stylesheet" href="./style.css" />
      <title>${compName} Team Manager</title>
    </head>
    <body>
      <section class="hero is-link">
        <div class="hero-body">
          <p class="title">${compName}</p>
          <p class="subtitle">Team Roster</p>
        </div>
      </section>
      <div class="columns">

      `;
}

module.exports = makePage;
