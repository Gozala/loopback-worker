const main = async () => {
  document.body.innerHTML += `\nActivating dedicated worker`
  const worker = new Worker(`./worker/worker.js?_=${Math.random().toString(36).slice(2)}`)
  document.body.innerHTML += "\nWaiting message from dedicated worker"
  worker.onmessage = ({data}) => document.body.innerHTML += `\nWorker: ${data}`
  document.onclick = (event) => { if (event.target.id === "go") { workerFetch(worker) } }
  workerFetch(worker)
}

const workerFetch = (worker) => {
  worker.postMessage({ fetch: document.querySelector("input").value })
}

main()
