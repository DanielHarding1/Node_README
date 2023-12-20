// function to generate markdown for README
function generateMarkdown(data) {
  return `# Title of the Project : 
  
  ${data.title}

   # Description of the Project: 
   
   ${data.description}

   # Table of Contents:  
   
   ${data.contents}

   # How to Install the Project: 
   
   ${data.installation}

   # The Use Cases of the Project: 
   
   ${data.use}

   # Lisences Used:  
   
   ${data.lisence}

   # Authors of the Project:
   
   ${data.author}

   # Tests Carried out on the Project:  
   
   ${data.tests}

   # Github Link: 
   
   ${data.git}

   # Email Address: 
   
   ${data.email}

`;
}

module.exports = generateMarkdown;
