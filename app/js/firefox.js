// Firefox currently uses this method
// TODO: Take a look at WebExtensions
var pageMod = require('sdk/page-mod');

pageMod.PageMod({
  include: '*.gov.br',
  contentScriptFile: './scripts/semMosquito.js',
  contentStyleFile: './styles/semMosquito.css',
  contentScriptWhen: 'ready'
});
