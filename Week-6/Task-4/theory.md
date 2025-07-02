## How to Switch to ES Modules
If you're using Node.js and want to switch to ES Modules:

Option 1: Rename your files to .mjs
```bash

node app.mjs 
```

Option 2: Set "type": "module" in package.json
```json
{
  "type": "module"
}
```
Then you can keep using .js files with import/export.
