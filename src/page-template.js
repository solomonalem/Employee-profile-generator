// create the about section
const generateManager = (managerData) => {
  //   console.log(managerData);
  const { name, id, email, jobTitle, officeNumber } = managerData[0];
  if (!managerData[0]) {
    return "";
  }

  return `
        <div class="card" id="">
            <div class="card-header"> 
                <h2 class="">${name}</h2>
                <h4 class="">${jobTitle}</h4>
            </div>
            <div class="card-body">
                <p>ID : ${id}</p>
                <p>Email : <a href="">${email}</a></p>
                <p>Office Number:  ${officeNumber}</p>
            </div>
         
      
        </div>
      `;
};
const generateEngineer = (engineerData) => {
  console.log(engineerData);
  if (!engineerData) {
    return "";
  }

  return `
     ${engineerData.map(({ name, id, email, jobTitle, github }) => {
       return `  
            <div class="card" id="">
                    <div class="card-header"> 
                        <h2 class="">${name}</h2>
                        <h4 class="">${jobTitle}</h4>
                    </div>
                    <div class="card-body">
                        <p>ID : ${id}</p>
                        <p>Email : <a href="">${email}</a></p>
                        <p>GitHub: <a href="https://github.com/${github}">${github}</a></p>
                    </div>
            </div>`;
     })}
  
      
      `;
};
const generateIntern = (internData) => {
  if (!internData) {
    return "";
  }

  return `
     ${internData.map(({ name, id, email, jobTitle, school }) => {
       return `  
            <div class="card" id="">
                    <div class="card-header"> 
                        <h2 class="">${name}</h2>
                        <h4 class="">${jobTitle}</h4>
                    </div>
                    <div class="card-body">
                        <p>ID : ${id}</p>
                        <p>Email : <a href="">${email}</a></p>
                        <p>School: ${school}</p>
                    </div>
            </div>`;
     })}
  
      
      `;
};

module.exports = (templateData) => {
  // destructure page data by section
  const { manager, engineer, intern } = templateData;

  return `
      <!DOCTYPE html>
      <html lang="en">
    
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Demo</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Open+Sans:wght@400;600&family=Roboto&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
      </head>
    
      <body>
        <header>
         
            <nav class="navbar">
             <h1>Team</h1>
            </nav>
         
        </header>
        <main class="">
           ${generateManager(manager)}
           ${generateEngineer(engineer)}
           ${generateIntern(intern)}
        </main>
        <footer class="">
          <h3 class="">&copy; ${new Date().getFullYear()} by Solomon</h3>
        </footer>
      </body>
      </html>
      `;
};

// {
//     manager: [
//       Manager {
//         name: 'sol',
//         id: 's',
//         email: 's',
//         jobTitle: 'Manager',
//         officeNumber: 's'
//       }
//     ],
//     enginner: [
//       Engineer {
//         name: 's',
//         id: 's',
//         email: 's',
//         jobTitle: 'Engineer',
//         github: 's'
//       },
//       Engineer {
//         name: 'e',
//         id: 'e',
//         email: 'e',
//         jobTitle: 'Engineer',
//         github: 'e'
//       }
//
//     ],
//     intern: [
//       Intern {
//         name: 'e',
//         id: 'e',
//         email: 'e',
//         jobTitle: 'Intern',
//         school: 'e'
//       },
//       Intern {
//         name: 'f',
//         id: 'f',
//         email: 'f',
//         jobTitle: 'Intern',
//         school: 'f'
//       }
//     ]
//   }
