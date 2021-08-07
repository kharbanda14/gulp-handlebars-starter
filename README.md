Gulp & Handlebars Starter Template
---

This project is a stater template for building static html websites with the support of Handlebars and gulp. 
This help in organizing your html contents to different pages and partials with the global variables.

The gulp file can be modified/updated as per your project needs.

- [Gulp & Handlebars Starter Template](#gulp--handlebars-starter-template)
- [Directory Structure](#directory-structure)
- [Getting Started](#getting-started)
  - [Pages](#pages)
  - [Assets](#assets)
  - [Partials](#partials)
  - [Global Variables](#global-variables)
  - [Build](#build)
  - [Packages Used :](#packages-used-)

## Directory Structure

```
  src/
    views/
    partials/
    assets/
  build/
  global-variables.json
```

## Getting Started

Starting dev Server with browsersync.

```
npm run start
```

Building
```
npm run build
```


### Pages

To start creating new pages, start adding new pages with the extension ``.hbs`` and place it under ``src/views`` directory, gulp then processes places it under build directory.

for example : page created ``src/views/pages/about.hbs`` will be accessible via ``pages/about.html``

### Assets

Places your assets like ``.css, .js, .jpg`` etc. files under the ``src/assets`` it will be copied to build directory and accessible via ``assets/file.css``.

### Partials

Partials contains repeated content like header, navigation that can be included in your pages, simply create new partials under the ``src/partials`` directory.

Partials are registered after removing characters like 'spaces' or '-' with `_`. 

**For Example :**

```
partial/header.hbs => {{> header.hbs }}
partials/nav/top.hbs => {{> nav/top }}
partial/nav/my-header.hbs => {{> nav/my_header }}
```

### Global Variables

Variables mentioned here are globally available and can be used in throughout .hbs files. **make sure you restart the task after modifying it**.

### Build

Build is the output directory where the processed files are kept, you can simply upload the contents of build to your servers after running the build task.

### Packages Used : 
1. [Gulp](https://gulpjs.com/)
2. [Handlerbars](https://handlebarsjs.com/)
3. [Bootstrap](https://getbootstrap.com/)
4. [Browsersync](https://browsersync.io/)

