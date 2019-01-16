const main = async ({ports}) => {
  const [port] = ports;
  port.start()
  const url = new URL(location.href).searchParams.get("url") || "http://127.0.0.1:8080"
  port.postMessage(`SharedWorker is fetching from ${url}`)
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
