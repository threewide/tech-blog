# Tech-Blog

## Description

The Tech Blog is an application that works like an blog website. It allows users to interact with a server and use the CRUD methods on the DB. E-commerce Back End started with a working Express.js API and we configured it to use sequilize to interact with a MySQL database 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
To Install and begin working on the E-Commerce Back End, follow these easy steps:

1. Open the terminal at the directory you would like to clone the project
2. In the terminal enter: '<b>git clone https://github.com/threewide/tech-blog.git</b>' to create a clone of the E-commerce Back End Repo
3. In the terminal enter: '<b>code .</b>' to open the project in Visual Studios development environment

![Installation](./assets/images/installation.png)

5. The project will still need to install the required node packages. In the terminal window change directory to the newly cloned E-Commerce Back End project by entering: '<b>cd e-commerce-back-end</b>' 
6. Now that you are in the correct directory, install the node packages with: '<b>npm i</b>'.

![npm Installation](./assets/images/npm-installation.png)

7. Now to create the database open the MySQL Command Shell using the command: '<b>mysql -u root -p</b>'
8. Enter the password: '<b>password</b>'
9. Run the command '<b>source ./db/schema.sql</b>' to create the database and tables
10. Now exit MySQL using '<b>\q</b>'
11. Enter the command '<b>npm run seed</b>' to populate the database with data

This initializes the project to a state of being both ready to be ran (with the command '<b>npm start</b>') and worked on as a developer!

## Usage

To run the application open the project folder in the terminal
Enter the command '<b>npm start</b>'

## Credits

Rich Widtmann [Professional README Guide](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)<br>
Course Gitlab [Instructor Demo: Git](https://utoronto.bootcampcontent.com/utoronto-bootcamp/UTOR-VIRT-FSF-FT-05-2022-U-LOLC/-/tree/main/01-HTML-Git-CSS/01-Activities/03-Ins_Git)<br>
Choose a License [MIT License Template](https://choosealicense.com/licenses/mit/)

## License

Copyright (c) [2022] [Justin Collver]

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
