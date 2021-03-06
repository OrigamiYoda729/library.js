# Library JS: Slim Build
The slim build is the simpler version of library.js, and allows for just the basics of library.js, and doesn't support any external plugins being added.
<br />
<br />

## Setup
To get the script, you can host it directly from the repository:
```html
<script src="https://github.com/OrigamiYoda729/library.js/raw/slim/library.slim.min.js"></script>
```
Or, download it [here](https://raw.githubusercontent.com/origamiyoda729/library.js/master/slim/library.slim.min.js).
<br />
<br />

## The Basics:
Commands are what allow you to add and remove libraries from your script. All commands will begin with `library` and end with either `get` or `remove`. In the Slim version, you will have access to three main command branches:
- [library.cdn](#command-branch-librarycdn)
- [library.github](#command-branch-librarygithub)
- [library.local](#command-branch-librarylocal)
<br />
<br />

## Command Branch: `library.cdn`
The  `library.cdn` command branch allows you to add scripts from a cdn. In slim, there are only a few availiable libraries:
- jQuery (`library.cdn.get('jquery')`)
- jQuery Slim (`library.cdn.get('jquery-slim')`)
- Require JS (`library.cdn.get('require-js')`)
- Popper JS (`library.cdn.get('popper-js')`)
- Bootstrap CSS (`library.cdn.get('bootstrap-css')`)
- Bootstrap JS (`library.cdn.get('boostrap-js')`)
- Bootstrap Bundle (`library.cdn.get('boostrap-bundle')`)
- Bootswatch (`library.cdn.get('bootswatch-{yourBootswatchTheme})`)
- Font Awesome (`library.cdn.get('font-awesome')`)
- Ionicons (`library.cdn.get('ionicons)`)

As shown above, just put the library that you want to modify in parentheses and quotes to add (`get`) or remove (`remove`) it.
<br />
<br />

## Command Branch: `library.github`
The `library.github` command branch has 2 different sub-branches: `.repo` and `.gist`. These commands allow you to access files from repositories and gists on Github.
<br />

### Command Sub-Branch: `.repo`
The `.repo` command sub-branch should always be formatted as such: 
```javascript
library.js.github.repo.get('{HTTPS}', '{commit}', '{branch}', '{path_of_file}, {path_of_second_file}')
```
1.  &nbsp;**{HTTPS}:** This should be replaced with the HTTPS (Clone) URL of the Repository (e.g. `https://github.com/user/myrepo.git`)
2.  &nbsp;**{commit}:** This should be replaced with the name of the commit. (e.g. `b9082d1`). To automatically get the latest commit, you can leave the field blank, or type `latest`.
3. &nbsp;**{branch}:**   This should be replaced with the name of the commit. (e.g. `master`). Leaving this field blank will call the main branch of the repository.
4.  &nbsp;**{path_of_file}:** This should be replaced with the path of the file. (e.g. `myrepo/data.json`). You can add multiple files by seperating them with a comma (e.g. `myrepo/css/main.css, myrepo/js/custom.js`).
<br />

### Command Sub-Branch: `.gist`

The `.gist` command sub-branch can be used to access a gist. To get a file, you just need the HTTPS (Clone) URL, and to format it like this:
```javascript
library.github.gist.get('https://gist.github.com/your_gist.git')
```
<br />
<br />

## Command Branch: `.local`
The `.local` command branch is used to load local files. To access the file, you need the path to it, relative to the page you are loading library.js from. For example, to load a script locally, you would type:
```javascript
library.local.get('path_to/your_script.js')
```
As with all of the other command branches, the `.get` and `.remove` commands apply here.