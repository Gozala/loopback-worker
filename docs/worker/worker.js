const main = async () => {
  const url = new URL(location.href).searchParams.get("url") || "http://127.0.0.1:8080"
  self.postMessage(`Worker is fetching from ${url}`)
  try {
    const response = await fetch(url)
    self.postMessage(`Worker got resoponse ${response.status}`)
    const text = await response.text()
    self.postMessage(`Worker got data ${text}`)
  } catch(error) {
    self.postMessage(`Worker failet to fetch ${error.toString()}`)
  }
}

main()
