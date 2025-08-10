import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    modularizeImports: {
        '@mui/icons-material': {
            transform: '@mui/icons-material/{{member}}',
        },
    }
};

export default nextConfig;
