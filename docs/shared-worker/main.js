const main = async () => {
  document.body.textContent += `\nActivating shared worker that will try to fetch ${url} (you can customize url as query param)`
  const worker = new SharedWorker(`./shared-worker/worker.js?url=${url}`)
  worker.port.start()
  document.body.textContent += "\nWaiting message from shared worker"
  document.querySelector("button").onclick = () => workerFetch(worker)
  const input = document.querySelector("input")
  workerFetch(worker, input.value)
}

const workerFetch = (worker, url) => {
  worker.postMessage({ fetch: url })
}

main()
