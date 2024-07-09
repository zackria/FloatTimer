`npm init`

`npm install --save-dev electron`

`npm install --save-dev electron@latest`
`npm install --save-dev @electron/packager`

`npm install -g electron-packager`

If ARM only use
`electron-packager . ZFloatTimer --platform=darwin --arch=arm64 --asar --icon=./assets/ZFloatTimer.icns`

If you want an Universal app for Intel and Arm (if first time run it will install additional library from Xcode - required)

`electron-packager . ZFloatTimer --platform=darwin --arch=universal --asar --icon=./assets/ZFloatTimer.icns`

If you want an app for Intel
`electron-packager . ZFloatTimer --platform=darwin --arch=x64 --asar --icon=./assets/ZFloatTimer.icns`

Once executed it will create a folder with binary inside Project folder.
Now the app can be moved and used on other computers as binary.

`electron-packager . ZFloatTimer --platform=win32 --arch=x64 --electron-version=31.1.0`