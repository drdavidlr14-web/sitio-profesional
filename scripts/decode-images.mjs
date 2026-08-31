import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const dir = join(process.cwd(), 'public/images')
const files = await readdir(dir)
for (const name of files) {
  if (!name.endsWith('.b64')) continue
  const raw = await readFile(join(dir, name), 'utf8')
  const out = name.replace(/\.b64$/, '')
  await writeFile(join(dir, out), Buffer.from(raw.replace(/\s/g, ''), 'base64'))
  console.log('decoded', out)
}
