const main = async () => {
  document.body.innerHTML += `\nActivating shared worker`
  const worker = new Worker(`./shared-worker/worker.js?_=${Math.random().toString(36).slice(2)}`)
  document.body.innerHTML += "\nWaiting message from shared worker"
  worker.onmessage = ({data}) => document.body.innerHTML += `\nSharedWorker: ${data}`
  document.onclick = (event) => { if (event.target.id === "go") { workerFetch(worker) } }
  workerFetch(worker)
}

const workerFetch = (worker) => {
  worker.postMessage({ fetch: document.querySelector("input").value })
}

main()
