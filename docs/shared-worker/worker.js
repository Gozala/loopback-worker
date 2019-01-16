const main = async ({ports}) => {
  const [port] = ports;
  port.start()
  port.postMessage(`SharedWorker client is connected`)
  port.onmessage = (messsage) => workerFetch(port, message.data.fetch)
}

const workerFetch = async (port, url) => {
  try {
    const response = await fetch(url)
    port.postMessage(`SharedWorker got resoponse ${response.status}`)
    const text = await response.text()
    port.postMessage(`SharedWorker got data ${text}`)
  } catch(error) {
    port.postMessage(`SharedWorker failet to fetch ${error.toString()}`)
  }
}

onconnect = main
