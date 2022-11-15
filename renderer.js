/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */

const input = document.getElementById('qty')
const button = document.getElementById('send')
const container = document.getElementById('container')

button.onclick = async function(){
    container.innerHTML= ""
    const messages = await myAPI.getMessage({quantity:Number(input.value)})
    messages.forEach( message=> {
        const li = document.createElement('li')
        li.innerText = message 
        container.append(li)
    });
}