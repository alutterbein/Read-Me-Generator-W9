// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
${data.description}
## Deployed Application URL
${data.link}
## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributors](#Credits)
* [Testing](#Testing)
## Description
${data.description}
## Installation
${data.Installation}
## Usage:
${data.Usage}
## Contributors
${data.Credits}
## Testing
${data.test}
## Questions
${data.Questions}
`;
}

module.exports = generateMarkdown;

