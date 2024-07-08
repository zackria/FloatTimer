module.exports = {
    packagerConfig: {},
    makers: [
      {
        name: '@electron-forge/maker-zip'
      },
      {
        name: '@electron-forge/maker-dmg',
        config: (arch) => ({
          // it can also be a function taking the currently built arch
          // as a parameter and returning a config object, e.g.
        })
      }
    ]
  };