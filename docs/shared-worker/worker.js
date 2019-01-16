const main = async () => {
  const port = new URL(location.href).searchParams.port || 8080
  const url = `http://127.0.0.1:${port}/`
  self.postMessage(`SharedWorker is fetching from ${url}`)
  try {
    const response = await fetch(url)
    self.postMessage(`SharedWorker got resoponse ${response.status}`)
    const text = await response.text()
    self.postMessage(`SharedWorker got data ${text}`)
  } catch(error) {
    self.postMessage(`SharedWorker failet to fetch ${error.toString()}`)
  }
}

main()
