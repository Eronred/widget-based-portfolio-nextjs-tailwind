/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    experimental: {
        optimizePackageImports: [
            "shiki",
            "shiki-magic-move",
        ]
    },
};

export default nextConfig;
