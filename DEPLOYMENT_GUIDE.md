# Deploying Your Portfolio to Vercel

This guide outlines the steps to deploy your Next.js portfolio website to Vercel. Vercel is the creators of Next.js and provides the easiest way to deploy your application.

## Prerequisites

1.  **GitHub Account**: Ensure your code is pushed to a repository on GitHub.
2.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com/signup) using your GitHub account.

## Step 1: Prepare Your Project

Ensure your project is ready for deployment.

1.  **Check `package.json`**: Make sure your `build` script is present.
    ```json
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start",
      "lint": "next lint"
    }
    ```
2.  **Push to GitHub**: Commit all your latest changes (including the mobile fixes) and push them to your GitHub repository.
    ```bash
    git add .
    git commit -m "Final polish for deployment"
    git push origin main
    ```

## Step 2: Deploy on Vercel

1.  **Login to Vercel**: Go to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  **Add New Project**: Click the "Add New..." button and select "Project".
3.  **Import Git Repository**:
    *   You should see your GitHub repositories listed.
    *   Find your portfolio repository and click "Import".
4.  **Configure Project**:
    *   **Project Name**: You can leave it as is or change it (this will affect your default URL, e.g., `project-name.vercel.app`).
    *   **Framework Preset**: It should automatically detect **Next.js**.
    *   **Root Directory**: Leave as `./` unless your app is in a subdirectory.
    *   **Build & Output Settings**: The defaults are usually correct (`next build`).
    *   **Environment Variables**: If you are using any API keys (e.g., for email services or database), add them here.
        *   *Note: For this static portfolio, you likely don't have sensitive env vars unless you added a backend service.*
5.  **Deploy**: Click the "Deploy" button.

## Step 3: Verification

Vercel will start building your project. You can watch the build logs.
*   Once finished, you will see a "Congratulations!" screen with a screenshot of your site.
*   Click "Visit" to see your live site.
*   Test the live URL on your mobile phone and desktop to ensure everything looks correct.

## Continuous Deployment

Vercel automatically sets up Continuous Deployment.
*   Every time you push a change to your `main` branch on GitHub, Vercel will automatically trigger a new build and update your site.
*   You can create "Preview Deployments" by pushing to other branches or opening Pull Requests.

## Troubleshooting

*   **Build Failed**: Check the build logs in Vercel. Common errors include type errors (`TypeScript`) or linting errors.
    *   If you want to ignore linting/type errors during build (not recommended but a quick fix), you can update `next.config.mjs`:
        ```javascript
        const nextConfig = {
          typescript: { ignoreBuildErrors: true },
          eslint: { ignoreDuringBuilds: true },
        };
        export default nextConfig;
        ```
*   **Images not loading**: Ensure you are keeping assets in the `public` folder and referencing them with a leading slash (e.g., `/image.png`).

Enjoy your new portfolio!
