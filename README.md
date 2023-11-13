# SVGlogomaker
## Table of Contents

* [Description](#description)
* [Acceptance Criteria](#acceptancecriteria)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Description
Our task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG fileLinks to an external site.. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered


## Installation

1. Create a new repository on your GitHub account and clone it to your computer.

2. When you're ready to deploy, use `git add`, `git commit`, and `git push` commands to save and push your code to your GitHub repository.

3. Navigate in your browser to your GitHub repository and then navigate into your repository's `Settings` tab on the right side of the repository's page.

4. From the settings page, scroll down to the GitHub Pages section and then, in the section labeled `Source`, select that you would like to use the `main` branch as your source.

5. Navigate to `<your-github-username>.github.io/<your-repo-name>` and you will find that your new web page has gone live! (For example, if your GitHub username is `lernantino` and the project is `css-demo-site`, your URL would be `lernantino.github.io/css-demo-site`)
6. Your application should use JestLinks to an external site. for running the unit tests and InquirerLinks to an external site. for collecting input from the user. The application will be invoked by using the following command:

node index.js

## Usage

Screen Recording 2023-11-12 at 9.18.56 PM.mov

## Credits

Created by [Joshua King](github.com/tfkjosh).

##License

MIT License

Copyright (c) [2023] [Joshua King]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
