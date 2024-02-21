const ambient: string = import.meta.env.MODE ?? ''

const env: Record<string, Record<string, string>> = {
  development: {
    BASE_URL: import.meta.env.VITE_DEV_URL
  },
  production: {
    BASE_URL: import.meta.env.VITE_RENDER_URL
  }
}

export default env[ambient]
