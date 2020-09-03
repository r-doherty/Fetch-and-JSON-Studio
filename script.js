window.addEventListener('load', function () {
  let json = [];
  fetch(
    'https://handlers.education.launchcode.org/static/astronauts.json'
  ).then(function (response) {
    response.json().then(function (json) {
      json.sort(function (a, b) {
        return a.hoursInSpace < b.hoursInSpace ? 1 : -1;
      });
      const container = document.getElementById('container');
      container.innerHTML += `
            <div>
                <h2>Crew Counter: ${json.length}</h2>
            </div>
            `;
      index = 0;
      while (index < json.length) {
        let color = 'red';
        if (json[index].active === true) {
          color = 'green';
        }
        container.innerHTML += `
                    <div class="card">
                        <img style=width:100% src="${json[index].picture}"/>
                            <button>${json[index].firstName} ${
          json[index].lastName
        }</button>
                            <ul class="title">
                                <li>Hours in space: ${
                                  json[index].hoursInSpace
                                }</li>
                                <li style="color:${color}">Active: ${
          json[index].active
        }</li>
                                <li>Skills: ${json[index].skills.join(
                                  ', '
                                )}</li>
                            </ul>
                        </div>
                    </div>
                    `;
        index++;
      }
    });
  });
});
