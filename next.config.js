/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost:1337',
                port: '',
                pathname: '',
            },
        ],
    },
}

module.exports = nextConfig
