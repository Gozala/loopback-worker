const main = async ({ports}) => {
  const [port] = ports;
  port.postMessage(`active`)
  port.onmessage = ({data}) => workerFetch(port, data.fetch)
}

const workerFetch = async (port, url) => {
  try {
    port.postMessage(`fetching ${url}`)
    const response = await fetch(url)
    port.postMessage(`got resoponse ${response.status}`)
    const text = await response.text()
    port.postMessage(`got data ${text}`)
  } catch(error) {
    port.postMessage(`failet to fetch ${error.toString()}`)
  }
}

main({ports:[self]})
