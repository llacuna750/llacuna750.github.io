import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createElement, StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { createServer } from 'vite'

const projectRoot = fileURLToPath(new URL('../', import.meta.url))
const vite = await createServer({
  configFile: resolve(projectRoot, 'vite.config.js'),
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
})

try {
  const { default: App } = await vite.ssrLoadModule('/src/App.jsx')
  const appHtml = renderToString(
    createElement(StrictMode, null, createElement(App)),
  )
  const outputDirectory = resolve(projectRoot, 'dist')
  const outputPath = resolve(outputDirectory, 'index.html')
  const manifest = JSON.parse(
    await readFile(resolve(outputDirectory, '.vite/manifest.json'), 'utf8'),
  )
  const html = await readFile(outputPath, 'utf8')
  const emptyRoot = '<div id="root"></div>'
  const assetReplacements = [
    ['/6038-dorohedoro-shin.png', '6038-dorohedoro-shin.png'],
    ['/src/profilepicture/pangprofile.png', 'src/profilepicture/pangprofile.png'],
  ]

  if (!html.includes(emptyRoot)) {
    throw new Error('Could not find the empty #root element in dist/index.html')
  }

  const htmlWithRenderedApp = assetReplacements.reduce((renderedHtml, [sourcePath, manifestKey]) => {
    const builtAsset = manifest[manifestKey]?.file

    if (!builtAsset) {
      throw new Error(`Could not find ${manifestKey} in the Vite build manifest`)
    }

    return renderedHtml.replaceAll(sourcePath, `/${builtAsset}`)
  }, html.replace(emptyRoot, `<div id="root">${appHtml}</div>`))

  await writeFile(outputPath, htmlWithRenderedApp)
} finally {
  await vite.close()
}
