# library.js
Load CSS and JavaScript libraries straight from the console.

## Slim Build
The slim build is the simplist of all, and allows for just the basics of library.js, and doesn't support any external plugins being added.
### Setup
To get the script, you can host it directly from the repository:
```html
<script src="https://github.com/OrigamiYoda729/library.js/raw/slim/library.js"></script>
```
 Or, download it from [here](https://raw.githubusercontent.com/origamiyoda729/library.js/master/slim/library.js).

### Command Basics:
Commands are what allow you to add and remove libraries from your script. All commands will begin with `library.` and end with either `get	` or `remove`. In the Slim version, you will have access to three main command branches:
- library.cdn
- library.github
- library.local

### Command Branch: `library.cdn`
The  `library.cdn` command allows you to add scripts from a cdn. In slim, there are only a few availiable libraries:
- jQuery (`library.cdn.get('jquery')`)
- jQuery Slim (`library.cdn.get('jquery-slim')`)
- React JS (`library.cdn.get('react')`)
- Browserify (`library.cdn.get('browserify')`)
- Popper JS (`library.cdn.get('popper')`)
- Bootstrap CSS (`library.cdn.get('bootstrap-css')`)
- Bootstrap JS (`library.cdn.get('boostrap-js')`)
- Bootswatch (`library.cdn.get('bootswatch-{yourBootswatchTheme})`)
- Font Awesome (`library.cdn.get('font-awesome')`)
- Ionicons (`library.cdn.get('ionicons)`)

Each command has both a `.get` and a `.remove` modifier. Put the library that you want to modify in parentheses and quotes to activate it.

### Command Branch: `library.github`