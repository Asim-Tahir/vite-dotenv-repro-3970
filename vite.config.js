import { defineConfig, loadEnv } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    plugins: [reactRefresh()],
      server: {
      port: parseInt(process.env.VITE_PORT) || 4000
    }
  })
}
