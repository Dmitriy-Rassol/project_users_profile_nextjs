/** @type {import('next').NextConfig} */
import { execSync } from 'child_process';

const nextConfig = {
  generateBuildId: async () => {
    const timestamp = new Date().getTime();
    const gitCommitHash = execSync('git rev-parse HEAD').toString().trim();

    return `${timestamp}-${gitCommitHash}`;
  }
};

export default nextConfig;
