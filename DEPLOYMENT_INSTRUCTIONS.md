# Backend Deploy Fix - Instructions

## Problem
Frontend Vercel e deploy hoyeche kintu backend API theke data asche na.

## Solution

### Step 1: Vercel Dashboard e Environment Variable Add Koro

1. Vercel dashboard e jao: https://vercel.com
2. Tomar frontend project select koro
3. **Settings** > **Environment Variables** e jao
4. Notun variable add koro:
   - **Name**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://server-gold-nu.vercel.app/api`
   - **Environment**: Production, Preview, Development (sobgulo select koro)
5. **Save** koro

### Step 2: Frontend Redeploy Koro

Environment variable add korar por frontend redeploy korte hobe:

```bash
# Option 1: Git push kore redeploy
git add .
git commit -m "Update API URL for production"
git push

# Option 2: Vercel dashboard theke manually redeploy
# Deployments tab > Latest deployment > ... menu > Redeploy
```

### Step 3: Backend Check Koro

Backend properly deploy hoyeche kina check koro:

```bash
# Browser e ba terminal e test koro
curl https://server-gold-nu.vercel.app/api/items
```

Jodi response ashe, tahole backend thik ache.

### Step 4: Frontend Check Koro

Frontend deploy hoye gele test koro je API call kaj korche kina.

---

## Alternative: Backend er vercel.json fix (jodi backend deploy e problem thake)

Jodi backend e problem thake, `server/vercel.json` create koro:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "index.js"
    }
  ]
}
```

Tarpor backend redeploy koro.

---

## Local Development

Local e kaj korar jonno `.env.local` e localhost use koro:

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Backend locally run korar jonno:

```bash
cd server
node index.js
```
