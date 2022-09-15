const generateHTML = (employeesInput) => {
  let manager = [];
  for (let a = 0; a < employeesInput.length; a++) {
    if (employeesInput[a].getRole() === "Manager") {
      manager = employeesInput[a];
      break;
    }
  }

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile Generator</title>
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
            </div>
        </main>
        
    </body>
    </html>
    `;
};

module.exports = generateHTML;
