const main = async () => {
  const url = new URL(location.href).searchParams.get("url") || "http://127.0.0.1:8080"
  document.body.textContent += `\nActivating dedicated worker that will try to fetch ${url} (you can customize url query param)`
  
  const worker = new Worker(`./worker/worker.js?url=${url}`)
  worker.onmessage = (message) => {
    document.body.textContent += `\n${message.data}`
  }

  document.body.textContent += "\nWaiting message from worker"
}

main()
