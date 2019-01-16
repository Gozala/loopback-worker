document.body.textContent += "Activating dedicated worker"

const worker = new Worker("./worker/worker.js")
worker.onmessage = (message) => {
  document.body.textContent += message.data
}

document.body.textContent += "Waiting message from worker"
