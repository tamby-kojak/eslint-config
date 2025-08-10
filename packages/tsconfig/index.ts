// Types
export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

export interface EslintConfigShape {
  rules?: Record<string, unknown>
  env?: Record<string, boolean>
  ignores?: string[]
}

// Keep existing function but with runtime-safe typing
export const mergeObjects = (
  o1: Record<string, any>,
  o2: Record<string, any>
): Record<string, any> => {
  const result: Record<string, any> = { ...o1 }

  for (const key in o2) {
    if (Object.hasOwn(o2, key)) {
      if (o2[key] && typeof o2[key] === 'object' && !Array.isArray(o2[key])) {
        result[key] = mergeObjects(o1[key] || {}, o2[key])
      } else if (Array.isArray(o2[key]) && Array.isArray(o1[key])) {
        result[key] = [...o1[key], ...o2[key]]
      } else {
        result[key] = o2[key]
      }
    }
  }

  return result
}

// Generic deep merge (erasable types)
export function deepMerge<T extends object, U extends object>(a: T, b: U): T & U {
  const out: any = { ...a }
  for (const k of Object.keys(b) as (keyof U)[]) {
    const v2 = (b as any)[k]
    const v1 = (a as any)[k]
    out[k] =
      v2 && typeof v2 === 'object' && !Array.isArray(v2)
        ? deepMerge(v1 ?? {}, v2)
        : Array.isArray(v2) && Array.isArray(v1)
          ? [...v1, ...v2]
          : v2
  }
  return out
}

// Function overloads (erasable)
export function toArray<T>(value: T): T[]
export function toArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value]
}

// Assertion function (erasable)
export function assertPresent<T>(val: T | null | undefined, msg?: string): asserts val is T {
  if (val == null) throw new Error(msg ?? 'Expected value to be present')
}

// Builder class using modern JS features
export class ConfigBuilder {
  static readonly defaultSeverity = 'error' as const
  static #count = 0

  #rules: Record<string, unknown> = {}
  env: Record<string, boolean> = {}
  private _extends: string[] = []

  static {
    // Static block (Node 24 supports)
    ConfigBuilder.#count = 0
  }

  constructor(seed?: DeepPartial<EslintConfigShape>) {
    ConfigBuilder.#count++
    if (seed?.rules) this.#rules = { ...seed.rules }
    if (seed?.env) this.env = { ...seed.env }
    if (seed?.ignores) this._extends = [...seed.ignores] // just to exercise array ops
  }

  get rules(): Record<string, unknown> {
    return { ...this.#rules }
  }

  set rules(v: Record<string, unknown>) {
    this.#rules = { ...v }
  }

  addRule(name: string, value: unknown) {
    this.#rules[name] = value
    return this
  }

  enableNodeEnv(enabled: boolean = true) {
    this.env['node'] = enabled
    return this
  }

  extend(name: string) {
    this._extends = [...this._extends, name]
    return this
  }

  build(): EslintConfigShape {
    // optional chaining + nullish coalescing
    const nodeEnabled = this.env?.['node'] ?? false

    const result = {
      rules: { ...this.#rules },
      env: { ...this.env, node: nodeEnabled },
      ignores: this._extends.length ? [...this._extends] : []
    } satisfies EslintConfigShape

    return result
  }

  static get instanceCount() {
    return ConfigBuilder.#count
  }
}

// Example const data with literal inference
export const defaultConfig = {
  env: { node: true },
  rules: { 'no-console': ConfigBuilder.defaultSeverity }
} as const satisfies { env: { node: boolean }; rules: Record<string, 'error' | 'warn' | 'off'> }

// Small runtime example to keep features live but side-effect free
export function buildDefault(): EslintConfigShape {
  return new ConfigBuilder({ env: defaultConfig.env, rules: defaultConfig.rules })
    .extend('eslint:recommended')
    .build()
}

buildDefault()