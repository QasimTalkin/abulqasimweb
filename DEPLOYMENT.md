# Deploying to abulqasim.dev on GCP

This guide walks you through deploying your portfolio to Google Cloud Platform and connecting it to your custom domain **abulqasim.dev**.

---

## Quick Deploy Commands

```bash
# 1. Build the production app
npm run build

# 2. Deploy to GCP App Engine
gcloud app deploy --project=YOUR_PROJECT_ID

# 3. View your deployed site
gcloud app browse
```

---

## Prerequisites

1. **GCP Account** with billing enabled
2. **gcloud CLI** installed and authenticated
3. **Domain ownership** of abulqasim.dev verified

---

## Step-by-Step Deployment

### 1. Set Up GCP Project

```bash
# Create a new project (or use existing)
gcloud projects create portfolio-abulqasim --name="Portfolio"

# Set as active project
gcloud config set project portfolio-abulqasim

# Enable App Engine
gcloud app create --region=northamerica-northeast1
```

### 2. Build & Deploy (Cloud Run)

This project is optimized for Cloud Run using a standalone Docker build.

```bash
# Deploy to Cloud Run (Optimized)
gcloud run deploy abulqasimweb \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --min-instances 0 \
  --max-instances 1 \
  --memory 512Mi \
  --cpu 1 \
  --project=project-22eea23b-9c5b-43c5-ab9
```

### 3. Verify Deployment

After the command completes, it will output a URL (e.g., `https://abulqasimweb-xyz-run.app`).

To map your custom domain:
1. Go to **Cloud Run** in GCP Console.
2. Select **Manage Custom Domains**.
3. Map `abulqasim.dev` to the `abulqasimweb` service.

**Note on Port:** The container is configured to listen on port `8080` (Cloud Run default).

---

## Connecting abulqasim.dev Domain

### Step 1: Verify Domain Ownership

1. Go to **GCP Console** → **App Engine** → **Settings** → **Custom Domains**
2. Click **Add a custom domain**
3. Enter `abulqasim.dev`
4. GCP will provide a TXT record for verification

### Step 2: Add TXT Record at Domain Registrar

Go to your domain registrar (Cloudflare, Namecheap, Google Domains, etc.) and add:

| Type | Name | Value |
|------|------|-------|
| TXT | @ | `google-site-verification=XXXXXX` (from GCP) |

Wait 5-10 minutes for DNS propagation.

### Step 3: Add DNS Records

After verification, GCP provides the following records. Add them to your DNS:

| Type | Name | Value |
|------|------|-------|
| A | @ | 216.239.32.21 |
| A | @ | 216.239.34.21 |
| A | @ | 216.239.36.21 |
| A | @ | 216.239.38.21 |
| AAAA | @ | 2001:4860:4802:32::15 |
| AAAA | @ | 2001:4860:4802:34::15 |
| AAAA | @ | 2001:4860:4802:36::15 |
| AAAA | @ | 2001:4860:4802:38::15 |
| CNAME | www | ghs.googlehosted.com |

### Step 4: Add Domain Mapping in GCP

```bash
gcloud app domain-mappings create abulqasim.dev
gcloud app domain-mappings create www.abulqasim.dev
```

### Step 5: Enable SSL

GCP automatically provisions SSL certificates. Check status:

```bash
gcloud app domain-mappings describe abulqasim.dev
```

Wait 10-30 minutes for SSL certificate provisioning.

---

## DNS Configuration Examples

### Cloudflare

1. Log into Cloudflare dashboard
2. Select `abulqasim.dev`
3. Go to **DNS** → **Records**
4. Add the A, AAAA, and CNAME records above
5. Set **Proxy status** to **DNS only** (gray cloud)

### Namecheap

1. Log into Namecheap
2. Go to **Domain List** → **abulqasim.dev** → **Advanced DNS**
3. Add the records as shown above

### Google Domains

1. Go to **domains.google.com**
2. Select **abulqasim.dev** → **DNS**
3. Add custom records as shown above

---

## Verify Everything Works

After DNS propagation (can take up to 48 hours, usually faster):

```bash
# Test the domain
curl -I https://abulqasim.dev

# Expected response
HTTP/2 200
```

---

## Updating Your Site

To push updates:

```bash
npm run build
gcloud app deploy
```

---

## Troubleshooting

### SSL Certificate Pending
Wait 10-30 minutes. Check status with:
```bash
gcloud app domain-mappings describe abulqasim.dev
```

### DNS Not Propagating
Use [dnschecker.org](https://dnschecker.org) to verify DNS records are live.

### 502 Errors
Check App Engine logs:
```bash
gcloud app logs tail -s default
```

---

## Cost Estimate

App Engine free tier includes:
- 28 instance hours/day of F1 instance
- 1 GB outgoing traffic/day

For a portfolio site with moderate traffic, you likely stay within free tier.

---

## Final Checklist

- [ ] GCP project created and billing enabled
- [ ] App Engine enabled in region
- [ ] App deployed successfully
- [ ] Domain verified in GCP
- [ ] DNS records added at registrar
- [ ] SSL certificate provisioned
- [ ] Site accessible at https://abulqasim.dev

🎉 **Your professional portfolio is now live at abulqasim.dev!**
