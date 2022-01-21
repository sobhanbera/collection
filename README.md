# Collections

## Overview

This projects contains many different kinds of small and basic need task as a different project. This readme will be updated regularly when there is a need.

## Implementation

[<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" height="60" />](https://github.com/sobhanbera/collection)
[<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" height="60" />](https://github.com/sobhanbera/collection)
[<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" height="60" />](https://github.com/sobhanbera/collection)
[<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png" height="60" />](https://github.com/sobhanbera/collection)
[<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" height="60" />](https://github.com/sobhanbera/collection)

## Get Start 🌟

### Contribute

-   Fork this repo.
-   Clone the repo you got after forking or type this commands:
    ```bash
    git clone https://github.com/<your_username_here>/collection.git
    ```
-   Start writing you code, when done with the code part, create a PR:
    ```bash
    git add .
    git commit -m "<what_you_have_contributed>"
    git push
    ```
-   Then make a PR to this repo and wait for the merge.
-   REPEAT...

### Prerequisites

-   GIT, NPM/Yarn
-   Install yarn by executing : `npm install -g yarn@latest`

### Environment Setup

1. Fork the repo and clone it on your system.

2. Run the following command to install all the required packages to run the project:

```
    npm install
```

OR

```
    yarn install
```

3. To run the project server:

```
    yarn start
```

OR

```
    npm run start
```

## File Structure

```
root
├── pages                               - all pages in seperate files
    ├── api                             - backend
        └── anything.js                 - backend route same as filename
    └── anything.jsx                    - frontend route same as filename
├── public                              - public assests
    ├── svgs                            - svg files
    ├── imgs                            - png/jpeg/others
    └── anims                           - any animation (lottie) files
├── backend                             - any different kind of backend (python/go)
    ├── python                          - python backend folder
    └── go                              - go backend folder
├── styles
    ├── components
        ├── Button
            ├── index.module.css        - usable styles for button
            └── index.module.scss       - written style for button
        ├── TextInput
            ├── index.module.css        - usable styles for input
            └── index.module.scss       - written style for input
        └── OtherComponents...
            ├── index.module.css        - any other css style
            └── index.module.scss       - any other scss style
    ├── pages
        ├── Contactus
            ├── index.module.css        - compiled styles
            └── index.module.scss       - styles for contactus page
        ├── Main
            ├── index.module.css        - compiled styles
            └── index.module.scss       - scss styles for main page
        └── OtherPages...
            ├── index.module.css        - other page's style
            └── index.module.scss       - styles for all other pages
    └── global
        ├── index.module.css            - compile scss (use this)
        └── index.module.scss           - same as css (write this)
├── constants
    ├── index.js                        - create any global const vars
    ├── limits.js                       - variable like MIN_LENGTH, MAX_LENGTH
    └── others.js                       - any different kind of constants
├── contexts
    └── index.js                        - context are exported from here
├── utils
    ├── index.js                        - util functions are exported
    ├── color.js                        - color category utils
    ├── string.js                       - string manipulating utils
    └── other.js                        - any other categories
├── .eslintrc                           - configs for eslint
├── .gitignore                          - files to ignore by git
├── .prettierignore                     - files to ignore by prettier
├── .prettierrc.js                      - prettier config
├── app.json                            - project meta data
├── CONTRIBUTING.md                     - contribution guidelines
├── next.config.js                      - project config
├── package.json                        - project's package details
├── README.md                           - the main project details
└── struct.md                           - get to know where is which file
```

## Contribution Guidelines

Contribution Guidelines is [here](https://github.com/sobhanbera/collection/blob/main/CONTRIBUTING.md) and will be added soon

## Contributors

Contributors list will go here.
