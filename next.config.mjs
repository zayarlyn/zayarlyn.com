import withVercelToolbar from '@vercel/toolbar/plugins/next'

/** @type {import('next').NextConfig} */
const nextConfig = {}

// Instead of module.exports = nextConfig, do this:

export default withVercelToolbar()(nextConfig)
