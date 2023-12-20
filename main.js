import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
<style>
#app{
  width:100%;
}
iframe{
  display:block;
}
</style>  
<div style="width:100%">
    <iframe src="https://app.kanka.io/w/229335/quests/tree" style="height:100vh; width:100%"></iframe>
  </div>
`

setupCounter(document.querySelector('#counter'))
