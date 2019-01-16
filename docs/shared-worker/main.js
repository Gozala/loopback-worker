const main = async () => {
  document.body.innerHTML += `\nActivating shared worker`
  const worker = new SharedWorker(`./shared-worker/worker.js?${Math.random().toString(36).slice(2)`)
  worker.port.start()
  document.body.innerHTML += "\nWaiting message from shared worker"
  document.querySelector("button").onclick = () => workerFetch(worker)
  const input = document.querySelector("input")
  workerFetch(worker, input.value)
}

const workerFetch = (worker, url) => {
  worker.port.postMessage({ fetch: url })
}

main()
