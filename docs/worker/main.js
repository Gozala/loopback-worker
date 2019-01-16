const main = async () => {
  const port = new URL(location.href).searchParams.pors || 8080
  document.body.textContent += `Activating dedicated worker that will try to fetch https://127.0.0.1:${port} (you can customize port as query param)`
  
  const worker = new Worker(`./worker/worker.js?port=${port}`)
  worker.onmessage = (message) => {
    document.body.textContent += message.data
  }

  document.body.textContent += "Waiting message from worker"
}

main()
