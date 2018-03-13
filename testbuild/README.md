# library.js
A simple script for loading CSS, JavaScript, and other script files straight from the browser console.
<br />

----
## Slim Build
The slim build is the simpler version of library.js, and allows for just the basics of library.js, and doesn't support any external plugins being added.
<br />
<br />

### Setup
To get the script, you can host it directly from the repository:
```html
<script src="https://github.com/OrigamiYoda729/library.js/raw/slim/library.min.js"></script>
```
 Or, download it from [here](https://raw.githubusercontent.com/origamiyoda729/library.js/master/slim/library.min.js).
<br />
<br />

### Command Basics:
Commands are what allow you to add and remove libraries from your script. All commands will begin with `library` and end with either `get` or `remove`. In the Slim version, you will have access to three main command branches:
- library.cdn
- library.github
- library.local
<br />

### Command Branch: `library.cdn`
The  `library.cdn` command allows you to add scripts from a cdn. In slim, there are only a few availiable libraries:
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

Each command has both a `.get` and a `.remove` modifier. Put the library that you want to modify in parentheses and quotes to activate it.
<br />
<br />

### Command Branch: `library.github`
The `library.github` command branch has 2 different sub-branches: `.repo` and `.gist`. Both of these have the usual modifiers (`.get` and `.remove`), and they are both very powerful.

#### Command Sub-Branch: `.repo`
The `.repo` command sub-branch should always be formatted as such: 
```javascript
library.js.github.repo.get('{HTTPS}', '{commit}', '{branch}', '{path_of_file}, {path_of_second_file}')
```
1.  &nbsp;**{HTTPS}:** This should be replaced with the HTTPS (Clone) URL of the Repository (e.g. `https://github.com/OrigamiYoda729/library.js.git`)
2.  &nbsp;**{commit}:** This should be replaced with the name of the commit. (e.g. `b9082d1`). To automatically get the latest commit, you can leave the field blank, or type `latest`.
3. &nbsp;**{branch}:**   This should be replaced with the name of the commit. (e.g. `master`). Leaving this field blank will call the main branch of the repository.
4.  &nbsp;**{path_of_file}:** This should be replaced with the path of the file. (e.g. `slim/library.min.js`). You can add multiple files by seperating them with a comma (e.g. `README.md, slim/library.min.js`).

#### Command Sub-Branch: `.gist`

The `.gist` command sub-branch can be used to access a gist. To get a file, you just need the HTTPS (Clone) URL, and to format it like this:
```javascript
library.github.gist.get('https://gist.github.com/your_gist.git')
```
<br />

### Command Branch: `.local`
The `.local` command is used to load local files. To access the file, you need the path to it, relative to the page you are loading library.js from. For example, to load jQuery locally, you would type:
```javascript
library.local.get('path_to/jquery.min.js')
```
As with all of the other command branches, the `.get` and `.remove` commands apply here.
<br />

-------
## Full Build
The full build is the more complex version of library.js, and allows for all of the features in library.js, including cdn plugins.

### Setup
To get the script, you can use git:
```
git clone https://github.com/OrigamiYoda729/library.js.git master
```
Then, load the script into your document:
```html
<script src="your_library_js_folder/full/library.min.js"></script>
```
<br />
<br />

### Command Basics:
Commands are what allow you to add and remove libraries from your script. All commands will begin with `library` and end with either `get` or `remove`. In the Full version, there are four different command branches:
- library.cdn
- library.github
- library.local
- library.debug
<br />

### Command Branch: `library.cdn`
The  `library.cdn` command allows you to add scripts from a cdn. Like slim, there are only a few availiable libraries:
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

However, you can also use a custom cdn command by creating a .js file following [this format](https://raw.githubusercontent.com/OrigamiYoda729/lightfoot/master/docs/downloads/myCDN.js) for the command and placing it in the `full/cdn/` folder. For example, to create a cdn command for EasyJS, you would create a .json file (following [the format](https://raw.githubusercontent.com/OrigamiYoda729/lightfoot/master/docs/downloads/cdn_command.json)), name it `easyjs.json`, and place it in the `full/cdn/` folder. Then, you could use the command: `library.cdn.get('easyjs')`.

### Command Branch: `library.github`
The `library.github` command branch has 2 different sub-branches: `.repo` and `.gist`. Both of these have the usual modifiers (`.get` and `.remove`), and they are both very powerful.

#### Command Sub-Branch: `.repo`
The `.repo` command sub-branch should always be formatted as such: 
```javascript
library.js.github.repo.get('{HTTPS}', '{commit}', '{branch}', '{path_of_file}, {path_of_second_file}')
```
1.  &nbsp;**{HTTPS}:** This should be replaced with the HTTPS (Clone) URL of the Repository (e.g. `https://github.com/OrigamiYoda729/library.js.git`)
2.  &nbsp;**{commit}:** This should be replaced with the name of the commit. (e.g. `b9082d1`). To automatically get the latest commit, you can leave the field blank, or type `latest`.
3. &nbsp;**{branch}:**   This should be replaced with the name of the commit. (e.g. `master`). Leaving this field blank will call the main branch of the repository.
4.  &nbsp;**{path_of_file}:** This should be replaced with the path of the file. (e.g. `slim/library.min.js`). You can add multiple files by seperating them with a comma (e.g. `README.md, slim/library.min.js`).

#### Command Sub-Branch: `.gist`

The `.gist` command sub-branch can be used to access a gist. To get a file, you just need the HTTPS (Clone) URL, and to format it like this:
```javascript
library.github.gist.get('https://gist.github.com/your_gist.git')
```
<br />

### Command Branch: `.local`
The `.local` command is used to load local files. To access the file, you need the path to it, relative to the page you are loading library.js from. For example, to load jQuery locally, you would type:
```javascript
library.local.get('path_to/jquery.min.js')
```
As with all of the other command branches, the `.get` and `.remove` commands apply here.
<br />
<br />

### Command Branch: `.debug`
The `.debug` command allows for you to write and remove any libraries in the document. You can use `.write` to write a document for a custom library. For example:
```javascript
library.debug.write('https://example.com/sources/mylibrary.js')
```
You can also do the same with the `.remove`, except it will remove the library instead:
```javascript
library.debug.remove('https://example.com/sources/mylibrary.js')
```