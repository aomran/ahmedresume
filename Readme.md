## Resume for the HackerYou assignment

This resume was a fun little project to practice HTML, CSS, and Javascript. I wanted to learn new things so I took every opportunity to use as much of the web development tools that are available.

## Bundler
The ruby gems are managed with bundler. There are asset gems and guard gems. Just bundle install and the environment is good to go.

```
$ bundle install
```

## Sass, Compass and Susy
The CSS is compiled from indented Sass syntax. Compass was used to set typography and vertical rhythm. Susy was used to create a responsive grid.

I also used normalize as an alternative to CSS reset.

## Guard
The guard file is used to do two things:

1. Watch for changes in the Sass files and compile it into CSS
2. Watch for changes to HTML, CSS or Javascript files and reload the browser.

```
$ guard
```

And then just make sure your browser has a livereload plugin.

## Javascript
The js/vendor directory has some Javascript libraries that I used, including:

* jQuery 1.10.1
* jQuery UI effects (clip and slide)
* jQuery plugin smooth-scroll
* jQuery plugin bootstrap-scrollspy

js/main.js has the Javascript that I wrote.

## Still to do
- Add a profile photo
- Fix ~600px breakpoint - that is when the freelance work block starts to degrade
- Fix ~400px breakpoint - that is when the header starts to degrade
- Cleanup the HTML (add better indentation)
- Concat. and minify the javascript files
- Minify the CSS file