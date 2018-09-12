---
Title: "CSS Grid Layout #1"
---

# Updates:

This is the third or fourth iteration of my personal site. I again am doing what I want and trying to make things pixel perfect across the board. Which means I'll have to take my time with this.

# Insctructions ->

# Description

A CSS Grid layout that I'm clearing so people can use how they want. This will be the first in a small series of CSS Grid layouts that I publish

# What's In It?

Well, I'm using the following devDependencies:

1.  [autoprefixer](https://www.npmjs.com/package/autoprefixer)
2.  [concat](https://www.npmjs.com/package/concat)
3.  [live-server](https://www.npmjs.com/package/live-server)
4.  [node-sass](https://www.npmjs.com/package/node-sass)
5.  [npm-run-all](https://www.npmjs.com/package/npm-run-all)
6.  [postcss-cli](https://www.npmjs.com/package/postcss-cli)

This is to minify, prefix, and concat the CSS, as well has being able to run multiple scripts at the same time.

# Information

Like the description says. I'll be making a series of layouts for anyone to use. This is the first, which will be a recreation of my personal site. I'll update down the line with instructions.

# Instructions:

#### git clone [the repo](https://github.com/Joey-Robinson/Layout01.git)

change directory into the repo

```
npm i
```

or

```
npm install
```

# Post-Install

```
npm start
```

If you get an error on start, type the following into terminal:

```
npm install -g node-sass
```

Then type

```
npm start
```

Note: You need to make a CSS Folder with main.css if one isn't present on cloning.

# Usage

After you've installed & gotten everything up and running, go wild. Add or remove pages as you see fit. Remove or add columns and rows if you need/don't need. I made this so people can have some exposure to both scss and CSS Grid.

# Build Script

If there's no CSS folder, you can either make a CSS folder with a main.css file, like I've shown below:

```
css
-main.css
```

If you don't want to do that, you can run

```
npm start
```

and make a change to .scss file and the .scss will be compiled to .css. The server will reload and the default styles will be showing

When you're done with any and all changes you want, this is what you need to do:

```
npm run build:css
```

This will run all the scripts that you need and minify your css in main.css. That's it. The current html files are pointing to main.css as well.
