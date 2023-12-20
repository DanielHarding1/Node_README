// function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache 2.0":
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    GPLv3:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    BSD: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    None: "No License",
  };

  const licenseBadge = licenseBadges[data.license] || "";

  return `
    ${licenseBadge}

  # Title of the Project : 
  
  ${data.title}

   # Description of the Project: 
   
   ${data.description}

   # Table of Contents:  
   
   ${data.contents}

   # How to Install the Project: 
   
   ${data.installation}

   # The Use Cases of the Project: 
   
   ${data.use}

   # Licenses Used:  
   
   ${data.license}

   # Authors of the Project:
   
   ${data.author}

   # Tests Carried out on the Project:  
   
   ${data.tests}

   # Github Link: 
   
   https://github.com/${data.git}

   # Email Address: 
   
   ${data.email}
  `;
}

module.exports = generateMarkdown;
