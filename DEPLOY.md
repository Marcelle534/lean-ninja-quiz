# Deploy to Railway

## One-time setup (~5 minutes)

### Step 1 — Put the logo in the right place
Copy gideon_logo.png into the `public/` folder.

### Step 2 — Push to GitHub
1. Go to github.com → New repository → name it `lean-ninja-quiz` → Create
2. Open Terminal, run:

```
cd ~/Downloads/lean-ninja-quiz
git init
git add .
git commit -m "initial"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lean-ninja-quiz.git
git push -u origin main
```

### Step 3 — Deploy on Railway
1. Go to railway.app → Sign in with GitHub (free)
2. Click **New Project** → **Deploy from GitHub repo**
3. Select `lean-ninja-quiz`
4. Railway auto-detects Node.js and deploys — takes about 60 seconds
5. Click **Settings** → **Domains** → **Generate Domain**
6. You get a URL like: `lean-ninja-quiz.up.railway.app`

### Step 4 — Share the link
Send that URL to the Gideon team. Everyone opens it, enters their name, plays.
You open `yoururl.up.railway.app` → click "Open Leaderboard" → project it on screen.

## Future sessions
Scores reset when the Railway server restarts, or click "Clear All Scores" from the leaderboard.
