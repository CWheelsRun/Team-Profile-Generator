const createHTML = (employeesInput) => {
  let manager = [];
  for (let a = 0; a < employeesInput.length; a++) {
    if (employeesInput[a].getRole() === "Manager") {
      manager = employeesInput[a];
      break;
    }
  }

  let engineerCards = "";
  for (let a = 0; a < employeesInput.length; a++) {
    if (employeesInput[a].getRole() === "Engineer") {
      const engineer = employeesInput[a];
      const role = employeesInput[a].getRole();
      engineerCards += `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">${engineer.name}</h3>
                        <h4>${role}</h4>
                        <ul class="list-group">
                            <li class="list-group-item">Employee ID: ${engineer.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            `;
    }
  }

  let internCards = "";
  for (let a = 0; a < employeesInput.length; a++) {
    if (employeesInput[a].getRole() === "Intern") {
      const intern = employeesInput[a];
      const role = employeesInput[a].getRole();
      internCards += `
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">${intern.name}</h3>
                        <h4>${role}</h4>
                        <ul class="list-group">
                            <li class="list-group-item">Employee ID: ${intern.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                            <li class="list-group-item">School: ${intern.school}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `;
    }
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <main>
            <div class="banner">My Team</div>
            
            <div class="row g-3 mt-1">
                <div class="col">
                <div class="card">
                    <div class="card-body">
                        <h3 class="card-title">${manager.name}</h3>
                        <h4>Manager</h4>
                        <ul class="list-group">
                            <li class="list-group-item">Employee ID: ${manager.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
                </div>
                ${engineerCards}
                ${internCards}
            </div>
        </main>
        
    </body>
    </html>
    `;
};

module.exports = createHTML;
