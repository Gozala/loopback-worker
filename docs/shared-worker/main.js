const main = async () => {
  const url = new URL(location.href).searchParams.get("url") || "http://127.0.0.1:8080"
  document.body.textContent += `\nActivating shared worker that will try to fetch ${url} (you can customize url as query param)`
  
  const worker = new SharedWorker(`./shared-worker/worker.js?url=${url}`)
  worker.port.onmessage = (message) => {
    document.body.textContent += `\n${message.data}`
  }
  worker.port.start()

  document.body.textContent += "\nWaiting message from shared worker"
}

main()
