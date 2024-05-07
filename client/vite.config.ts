import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000, // Change this to your desired port
  },
  plugins: [react()],
  resolve: {
    alias: {
      'store': path.resolve(__dirname, 'src', 'store'),
      'reducers': path.resolve(__dirname, 'src', 'reducers'),
      'pages': path.resolve(__dirname, 'src', 'pages'),
      'services': path.resolve(__dirname, 'src', 'services'),
      'components': path.resolve(__dirname, 'src', 'components'),
      'utils': path.resolve(__dirname, 'src', 'utils'),
      'assets': path.resolve(__dirname, 'src', 'assets'),
      'constants': path.resolve(__dirname, 'src', 'constants'),
      'types': path.resolve(__dirname, 'src', 'types'),
      'helpers': path.resolve(__dirname, 'src', 'helpers'),
      'hooks': path.resolve(__dirname, 'src', 'hooks'),
      'config': path.resolve(__dirname, 'src', 'config'),
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  }
})
