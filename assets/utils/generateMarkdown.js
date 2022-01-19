// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'The MIT License') {
    return "![MIT](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)";
  } if (license === 'Apache License, Version 2.0') {
      return "![Apache 2](https://img.shields.io/badge/license-Apache%202-blue?style=for-the-badge)";
    } if (license === 'GNU General Public License version 3') {
        return "![GNU GPL](https://img.shields.io/badge/license-GNU%20GPL-blue?style=for-the-badge)";
      } else {
          return ""
      }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'The MIT License') {
    return "[The MIT License](https://www.mit.edu/~amini/LICENSE.md)";
  } if (license === 'Apache License, Version 2.0') {
      return "[Apache License, Version 2.0](https://www.apache.org/licenses/LICENSE-2.0)";
    } if (license === 'GNU General Public License version 3') {
        return "[GNU General Public License version 3](https://www.gnu.org/licenses/gpl-3.0.en.html)";
      } else {
          return ""
      }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, year, author) {
  if (license === 'The MIT License') {
    return `Copyright ${year} ${author}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } if (license === 'Apache License, Version 2.0') {
      return `Copyright ${year} ${author}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
   
http://www.apache.org/licenses/LICENSE-2.0
   
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
    } if (license === 'GNU General Public License version 3') {
        return `Copyright (C) ${year} ${author}

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
    
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
    
You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.`;
      } else {
          return ''
      }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ${renderLicenseBadge(data.license)}

  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license, data.year, data.author)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  For any quiestions about this project please contact me at:

  * GitHub Profile: [${data.github}](https://github.com/${data.github})

  * email: ${data.email}`;
}

module.exports = {
  generateMarkdown
};
