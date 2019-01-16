const main = async () => {
  document.body.innerHTML += `\nActivating shared worker`
  const worker = new SharedWorker(`./shared-worker/worker.js?_=${Math.random().toString(36).slice(2)}`)
  worker.port.start()
  document.body.innerHTML += "\nWaiting message from shared worker"
  worker.port.onmessage = ({data}) => document.body.innerHTML += `\nSharedWorker: ${data}`
  document.onclick =() => workerFetch(worker)
  workerFetch(worker)
}

const workerFetch = (worker) => {
  worker.port.postMessage({ fetch: document.querySelector("input").value })
}

main()
