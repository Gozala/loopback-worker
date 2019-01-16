const main = async () => {
  const port = new URL(location.href).searchParams.get("port") || "8080"
  document.body.textContent += `\nActivating shared worker that will try to fetch https://127.0.0.1:${port} (you can customize port as query param)`
  
  const worker = new SharedWorker(`./shared-worker/worker.js?port=${port}`)
  worker.port.onmessage = (message) => {
    document.body.textContent += `\n${message.data}`
  }

  document.body.textContent += "\nWaiting message from shared worker"
}

main()
