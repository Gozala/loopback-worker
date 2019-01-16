const main = async ({ports}) => {
  const channel = ports[0];
  channel.start()
  const port = new URL(location.href).searchParams.get("port") || "8080"
  const url = `http://127.0.0.1:${port}/`
  channel.postMessage(`SharedWorker is fetching from ${url}`)
  try {
    const response = await fetch(url)
    channel.postMessage(`SharedWorker got resoponse ${response.status}`)
    const text = await response.text()
    channel.postMessage(`SharedWorker got data ${text}`)
  } catch(error) {
    channel.postMessage(`SharedWorker failet to fetch ${error.toString()}`)
  }
}

onconnect = main
