import { sheet } from 'j2c'

let style: string = ''

function cleanStyle(s: string): string {
  return s.replace(/\n/g, '')
}

export function attach(...s: any[]): string {
  const scoped = sheet(s)
  style += scoped
  return scoped
}

export function dispatchStyle(clean: boolean = true) {
  if (!clean) {
    return <style>{style}</style>
  }
  return <style>{cleanStyle(style)}</style>
}

export function styled(target: any): any {
  if (typeof target.computedStyle === 'function') {
    target.style = attach(target.componentStyle())
  } else {
    target.style = {}
  }
}
