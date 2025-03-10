import withVercelToolbar from '@vercel/toolbar/plugins/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: { remotePatterns: [{ protocol: 'https', hostname: 'wcmqwqfjshrsvsxnqsio.supabase.co', pathname: '/storage/v1/object/public/**' }] },
}

// Instead of module.exports = nextConfig, do this:

export default withVercelToolbar()(nextConfig)
