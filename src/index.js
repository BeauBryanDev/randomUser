import Template from '@templates/Template.js';
import '@styles/styles.css';
// edit root file to asset// edit root file to assetss
(async function App() {
  const main = null || document.getElementById('main');
  main.innerHTML = await Template();
})();
