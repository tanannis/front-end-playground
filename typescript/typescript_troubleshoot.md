## Installing TypeScript

`npm install --g typescript` or `npm install typescript --save-dev`

`npx tsc`

## Create a config file for TypeScript

`tsc --init`
- by default, it's set to target ES5
- can simply change it to ES6 or higher
- then run `tsc` to compile again


## Troubleshooting TypeScript

### To solve “bash: tsc: command not found”:

Find the exact path of the directory to typescript
- `cd node_modules/typescript/bin`

Get the path
- `pwd`

Open the bash file
- `open ~/.bash_profile`

Copy and paste below inside the file, and save:
- `export PATH=$PATH:/Users/annistan/projects/front-end-playground/node_modules/typescript/bin`

Reload your bash file and just ignore whatever logged out
- `source ~/.bash_profile`

Check typescript version
- `tsc -v`


### To compile your typescript code into js code:

`tsc yourFileName.ts`

Then log the result -> `node yourFileName.js`
