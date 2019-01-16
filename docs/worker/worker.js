const main = async ({ports}) => {
  const [port] = ports;
  port.postMessage(`SharedWorker client is connected`)
  port.onmessage = ({data}) => workerFetch(port, data.fetch)
}

const workerFetch = async (port, url) => {
  try {
    port.postMessage(`SharedWorker is fetching ${url}`)
    const response = await fetch(url)
    port.postMessage(`SharedWorker got resoponse ${response.status}`)
    const text = await response.text()
    port.postMessage(`SharedWorker got data ${text}`)
  } catch(error) {
    port.postMessage(`SharedWorker failet to fetch ${error.toString()}`)
  }
}

main({ports:[self]})
