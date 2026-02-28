# Native node module to access the Windows Registry
This module only has a few registry features items and is intended to be a lightweight module.
PR# Welcome for DWORD and other registry value types

## Installing

```sh
npm install @master.technology/windows-registry
```

## Using

```javascript
const vsWinReg = require('@master.technology/windows-registry');
// Get a String Value
console.log(vsWinReg.GetStringRegKey('HKEY_LOCAL_MACHINE', 'SOFTWARE\\Microsoft\\Windows\\CurrentVersion', 'ProgramFilesPath'));

// Set a String Registry value
vsWinReg.SetStringRegKey('HKEY_LOCAL_MACHINE', 'SOFTWARE\\Microsoft\\Windows\\CurrentVersion', 'COOLNESS', 'I am Cool');

// Get a list of Keys & Values
console.log(vsWinReg.EnumRegKeyKeys('HKEY_LOCAL_MACHINE', 'SOFTWARE\\Microsoft\\Windows\\CurrentVersion'));
console.log(vsWinReg.EnumRegKeyValues('HKEY_LOCAL_MACHINE', 'SOFTWARE\\Microsoft\\Windows\\CurrentVersion'));

// Delete a Reg Value
vsWinReg.DeleteRegKeyValue('HKEY_LOCAL_MACHINE', 'SOFTWARE\\Microsoft\\Windows\\CurrentVersion', 'COOLNESS');

// Delete a Reg Key
vsWinReg.DeleteRegKeyKey('HKEY_LOCAL_MACHINE', 'SOFTWARE\\Microsoft\\Windows\\CurrentVersion', 'SOME_KEY_NAME');
```
## Development with NPM
* npm run build
* npm run test

## Development with Yarn
 * `yarn`
 * `yarn node-gyp configure`
 * `yarn node-gyp build`
 * `yarn tsc`
 * `yarn test`




## License
[MIT](https://github.com/Microsoft/vscode-windows-registry/blob/master/License.txt)


