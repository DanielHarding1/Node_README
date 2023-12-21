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


    # Table of Contents

  1. [# Title of the Project](#title-of-the-project)
  2. [# Description of the Project](#description-of-the-project)
  3. [# How to Install the Project](#how-to-install-the-project)
  4. [# The Use Cases of the Project](#the-use-cases-of-the-project)
  5. [# Licenses Used](#licenses-used)
  6. [# Authors of the Project](#authors-of-the-project)
  7. [# Tests Carried out on the Project](#tests-carried-out-on-the-project)
  8. [# Any Questions?](#question)

    
   
    

  # Title of the Project : 
  
   ${data.title}

   # Description of the Project: 
   
   ${data.description}
   
 
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

   
   # Question:
   
   
    - https://github.com/${data.git} 
   
    - ${data.email}
  `;
}

module.exports = generateMarkdown;
