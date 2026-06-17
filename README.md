# My Portfolio Website

This is a personal portfolio website built using **Vue 3** and **Vite**.

## How to View and Run the Project

Since your GitHub account is currently locked, we have configured a few different ways for you to run, view, and host your project:

---

### 1. Running Locally (Development Mode)
To run the website on your local machine for editing and development:
* **Command:** `npm run dev`
* **Local URL:** [http://localhost:5173](http://localhost:5173)

*Note: The local server is currently running and you can open [http://localhost:5173](http://localhost:5173) in your browser right now.*

---

### 2. Local Production Preview
To see exactly how the site will look when optimized for production:
1. Build the production files:
   ```bash
   npm run build
   ```
2. Preview the built files locally:
   ```bash
   npm run preview
   ```
* **Preview URL:** [http://localhost:4173](http://localhost:4173)

---

### 3. Deploying Online (Vercel CLI)
Because GitHub Pages is currently unavailable due to your account being locked, your website has been successfully deployed to **Vercel**:

* **Live URL:** [https://portfolio-sample-psi-beryl.vercel.app](https://portfolio-sample-psi-beryl.vercel.app)
* **Vercel Project Dashboard:** [https://vercel.com/ann14/portfolio-sample](https://vercel.com/ann14/portfolio-sample)

#### 🔄 How to Update Your Website When Code Changes
When you make changes to your code and want the live website to update, follow these simple steps:

1. **Save your changes** in your code editor.
2. **Test locally (optional but recommended):** 
   Check [http://localhost:5173](http://localhost:5173) to ensure everything looks correct and works.
3. **Deploy the update:** Run the following command in your terminal:
   ```bash
   npx vercel --prod
   ```
4. **View updates:** Vercel will upload, build, and deploy the new version. Once completed, simply refresh your live website link!


---

### 4. GitHub Pages (Original Plan)
* **Status:** 🔴 Suspended (due to GitHub account lock).
* **Once unlocked:** If your account is unlocked in the future, go to your repository settings on GitHub, select **Pages**, and set the Source to **GitHub Actions**. The [.github/workflows/deploy.yml](.github/workflows/deploy.yml) workflow will automatically build and deploy it to your GitHub Pages URL: `https://kheang-ann.github.io`.
