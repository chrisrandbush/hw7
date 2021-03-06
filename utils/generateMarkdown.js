function generateProjectUrl(github, project) {
  const kebabCaseTitle = project.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, project) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, project)})`
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `This project is licensed under the ${license} license.`
    )
  }
}

function generateMarkdown(data) {
  return `
# ${data.project}
## Description
  ${data.description}
## GitHub Profile
  Name: ${data.name}
  Email: ${data.gmail}
  ${data.avatar_url}

  ## Table of Contents
  1. [Version](#version)
  2. [Project URL](#projectURL)
  3. [Installation](#install)
  4. [Usage](#usage)
  5. [License](#license)
  6. [Contributing](#contributing)
  7. [Tests](#tests)
## Version
  This is ${data.project} version ${data.version}.
## Project URL
  ${generateProjectUrl(data.github, data.project)}
## Installation
  ${data.install}
## Usage
  ${data.usage}
## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseBadge(data.license, data.github, data.project)}
## Contributions
  ${data.contributing}
## Tests
  ${data.tests}
`;
}

module.exports = generateMarkdown;

