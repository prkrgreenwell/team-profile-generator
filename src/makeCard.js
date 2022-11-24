/** @format */

function makeCard(empName, role, id, email, extra) {
  const card = `       
  <div
  class="column is-12-mobile is-6-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd"
>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">${empName}</p>
          <p class="subtitle is-6">${role}</p>
        </div>
      </div>

      <div class="content">
        <p class="id">${id}</p>
        <p class="email">${email}</p>
        <p class="extra">${extra}</p>
      </div>
    </div>
  </div>
</div>`;

  return card;
}

module.exports = makeCard;
