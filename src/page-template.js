// create the about section
const generateManager = (managerData) => {
  const { name, id, email, jobTitle, officeNumber } = managerData[0];
  if (!managerData[0]) {
    return "";
  }

  return `
        <div class="card" id="">
          <div class="card-header">
            <h2>${name}</h2>
            <h4>${jobTitle}</h4>
          </div>
          <div class="crd-body">
                <p> ID : ${id}</p>
                <p>Email : ${email}</p>
                <p>Office-Number:${officeNumber}</p>
          </div>
        </div>
      `;
};
const generateEngineer = (engineerData) => {
  //   const { name, id, email, jobTitle, officeNumber } = engineerData;
  if (!engineerData) {
    return "";
  }

  return `
  ${engineerData.map(({ name, id, email, jobTitle, github }) => {
    return `<div class="card" id="">
      <div class="card-header">
        <h2>${name}</h2>
        <h4>${jobTitle}</h4>
      </div>
      <div class="crd-body">
            <p> ID : ${id}</p>
            <p>Email : ${email}</p>
            <p>GitHub:${github}</p>
      </div>
    </div>`;
  })}
        
      `;
};
const generateIntern = (internData) => {
  //   const { name, id, email, jobTitle, officeNumber } = internData;
  if (!internData) {
    return "";
  }

  return `
  ${internData.map(({ name, id, email, jobTitle, school }) => {
    return `<div class="card" id="">
      <div class="card-header">
        <h2>${name}</h2>
        <h4>${jobTitle}</h4>
      </div>
      <div class="crd-body">
            <p> ID : ${id}</p>
            <p>Email : ${email}</p>
            <p>School:${school}</p>
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
          
            <nav class="">
            <h1>TEAM</h1>
            
            </nav>
       
        </header>
        <main class="container my-5">
           ${generateManager(manager)}
           ${generateEngineer(engineer)}
           ${generateIntern(intern)}
        </main>
        <footer class="container text-center py-3">
          <h3 class="text-dark">&copy; ${new Date().getFullYear()} by solomon </h3>
        </footer>
      </body>
      </html>
      `;
};
