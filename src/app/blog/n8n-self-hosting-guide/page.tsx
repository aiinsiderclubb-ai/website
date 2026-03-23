import type { Metadata } from "next";
import BlogPost from "@/components/shared/BlogPost";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "n8n Self-Hosting on VPS: Docker Setup + SSL Guide (2026)",
  description:
    "Host n8n on your own VPS in under 30 minutes. Docker Compose setup, HTTPS with Let's Encrypt, Nginx reverse proxy, automatic backups and production hardening.",
  keywords: [
    "n8n self hosting vps",
    "n8n docker setup",
    "host n8n on vps",
    "n8n self hosted tutorial",
    "n8n docker compose",
    "n8n ssl setup",
    "n8n nginx reverse proxy",
    "n8n production setup",
    "n8n vps installation",
    "n8n ubuntu docker",
  ],
  openGraph: {
    title: "n8n Self-Hosting on VPS: Docker Setup + SSL Guide (2026) | AI Insider",
    description:
      "Self-host n8n on a VPS in 30 minutes. Docker Compose, SSL, Nginx, backups — complete guide.",
    type: "article",
  },
  alternates: {
    canonical: "https://insiderai.it.com/blog/n8n-self-hosting-guide",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "n8n Self-Hosting on VPS: Docker Setup + SSL Guide (2026)",
  description:
    "Host n8n on your own VPS in under 30 minutes. Docker Compose setup, HTTPS with Let's Encrypt, Nginx reverse proxy, automatic backups and production hardening.",
  author: { "@type": "Organization", name: "AI Insider", url: "https://insiderai.it.com" },
  publisher: {
    "@type": "Organization",
    name: "AI Insider",
    url: "https://insiderai.it.com",
    logo: { "@type": "ImageObject", url: "https://insiderai.it.com/favicon.ico" },
  },
  datePublished: "2026-03-08",
  dateModified: "2026-03-10",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://insiderai.it.com/blog/n8n-self-hosting-guide" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What VPS specs do I need for n8n self-hosting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For personal use or a small agency (under 50,000 executions/month), a 2GB RAM, 1 vCPU server works well. Hetzner CX11 (2GB/1 vCPU, €3.49/month) or DigitalOcean Basic ($6/month) are popular choices. For higher volume or if you're running multiple resource-intensive workflows simultaneously, go with 4GB RAM.",
      },
    },
    {
      "@type": "Question",
      name: "Is self-hosted n8n really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. The n8n Community Edition is completely free and open-source with no execution limits. Your only cost is the VPS ($4–10/month) and the domain name ($10-15/year). There are no per-workflow fees, no API call limits within n8n, and no feature restrictions compared to the cloud version.",
      },
    },
    {
      "@type": "Question",
      name: "How do I back up my self-hosted n8n workflows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your workflows are stored in the ~/.n8n directory (or the Docker volume). Back this up daily using n8n's built-in export feature or by copying the volume. For automated backups: create an n8n workflow that exports all workflows via the n8n API and saves them to S3 or Google Drive on a schedule.",
      },
    },
    {
      "@type": "Question",
      name: "Can I run n8n behind Cloudflare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, and it's recommended. Cloudflare provides DDoS protection, CDN benefits, and free SSL. Point your domain's nameservers to Cloudflare, enable the proxy (orange cloud icon), and set SSL/TLS mode to 'Full (strict)'. Make sure your Nginx config uses the SSL certificate from Let's Encrypt on the origin server.",
      },
    },
  ],
};

export default function N8nSelfHostingGuide() {
  return (
    <>
      <JsonLd data={[articleJsonLd, faqJsonLd] as unknown as Record<string, unknown>[]} />
      <BlogPost
        emoji="🖥️"
        badge="DevOps Guide"
        badgeColor="bg-[#7c3aed]/20 text-[#a78bfa]"
        title="n8n Self-Hosting on VPS: Docker Setup + SSL Guide (2026)"
        subtitle="Run your own n8n server for €3.5/month. Complete guide: VPS choice, Docker, Nginx, SSL, backups, and production hardening."
        date="March 2026"
        readTime="12 min"
        tags={["n8n", "Self-Hosting", "VPS", "Docker", "DevOps"]}
        relatedPosts={[
          { title: "n8n Tutorial for Beginners", href: "/blog/n8n-beginners-guide", sub: "Complete guide to workflow automation" },
          { title: "Building Robust n8n Workflows", href: "/blog/n8n-workflows", sub: "Error handling, retries, dead-letter queues" },
          { title: "Zapier vs Make vs n8n", href: "/blog/zapier-vs-make-vs-n8n", sub: "Definitive 2026 comparison" },
        ]}
      >
        <h2>Why Self-Host n8n?</h2>
        <p>
          n8n Cloud starts at $20/month with limits on active workflows and executions. On a self-hosted
          VPS, you get unlimited everything for the cost of the server — as low as €3.5/month from Hetzner.
          For freelancers and agencies running dozens of client workflows, self-hosting saves hundreds of
          euros per month.
        </p>
        <p>
          Additional benefits of self-hosting:
        </p>
        <ul>
          <li><strong>Data sovereignty</strong> — your workflow data stays on your server (critical for GDPR compliance)</li>
          <li><strong>No execution limits</strong> — run millions of workflows without throttling</li>
          <li><strong>Custom environment variables</strong> — store API keys and secrets directly on the server</li>
          <li><strong>Full control</strong> — install community nodes, customize configuration, debug logs</li>
          <li><strong>Multiple instances</strong> — run separate n8n instances for different clients</li>
        </ul>

        <h2>Choosing a VPS Provider</h2>
        <p>
          For most n8n use cases, any of these providers work well:
        </p>
        <ul>
          <li><strong>Hetzner</strong> (recommended) — CX11: 2GB RAM, 1 vCPU, 20GB SSD = €3.49/month. Best price/performance in Europe.</li>
          <li><strong>DigitalOcean</strong> — Basic Droplet: 1GB RAM = $6/month. Excellent documentation and support.</li>
          <li><strong>Vultr</strong> — 1GB RAM = $6/month. Good global network.</li>
          <li><strong>Oracle Cloud Free Tier</strong> — ARM instance with 1GB RAM = completely free. Great for personal use.</li>
        </ul>
        <p>
          Choose a datacenter location close to your clients. European clients → Frankfurt or Amsterdam.
          US clients → New York or San Francisco. Latency matters for webhook response times.
        </p>

        <h2>Initial Server Setup (Ubuntu 22.04)</h2>
        <p>
          Once you have your VPS, SSH in and run these initial setup commands:
        </p>
        <pre><code>{`# Connect to your server
ssh root@YOUR_SERVER_IP

# Update the system
apt update && apt upgrade -y

# Create a non-root user (security best practice)
adduser n8nadmin
usermod -aG sudo n8nadmin

# Set up SSH key auth (copy your public key)
mkdir -p /home/n8nadmin/.ssh
cat >> /home/n8nadmin/.ssh/authorized_keys << 'EOF'
YOUR_PUBLIC_KEY_HERE
EOF
chown -R n8nadmin:n8nadmin /home/n8nadmin/.ssh
chmod 700 /home/n8nadmin/.ssh
chmod 600 /home/n8nadmin/.ssh/authorized_keys

# Basic firewall setup
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable`}</code></pre>

        <h2>Installing Docker and Docker Compose</h2>
        <pre><code>{`# Switch to your non-root user
su - n8nadmin

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Add user to docker group (no sudo needed)
sudo usermod -aG docker $USER
newgrp docker

# Install Docker Compose
sudo apt install docker-compose-plugin -y

# Verify installations
docker --version
docker compose version`}</code></pre>

        <h2>Docker Compose File for n8n</h2>
        <p>
          Create a directory for your n8n setup and write the Docker Compose config:
        </p>
        <pre><code>{`mkdir ~/n8n && cd ~/n8n

cat > docker-compose.yml << 'EOF'
version: "3.8"

services:
  n8n:
    image: docker.n8n.io/n8nio/n8n:latest
    restart: always
    ports:
      - "127.0.0.1:5678:5678"
    environment:
      - N8N_HOST=n8n.yourdomain.com
      - N8N_PORT=5678
      - N8N_PROTOCOL=https
      - NODE_ENV=production
      - WEBHOOK_URL=https://n8n.yourdomain.com/
      - GENERIC_TIMEZONE=Europe/Berlin
      - TZ=Europe/Berlin
      - N8N_ENCRYPTION_KEY=your-random-32-char-secret
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_DATABASE=n8n
      - DB_POSTGRESDB_USER=n8n
      - DB_POSTGRESDB_PASSWORD=your-db-password
    volumes:
      - n8n_data:/home/node/.n8n
    depends_on:
      postgres:
        condition: service_healthy

  postgres:
    image: postgres:16-alpine
    restart: always
    environment:
      - POSTGRES_USER=n8n
      - POSTGRES_PASSWORD=your-db-password
      - POSTGRES_DB=n8n
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -h localhost -U n8n"]
      interval: 5s
      timeout: 5s
      retries: 10

volumes:
  n8n_data:
  postgres_data:
EOF`}</code></pre>
        <blockquote>
          <strong>Important:</strong> Replace <code>your-random-32-char-secret</code> with a real random string
          (use <code>openssl rand -hex 16</code>). Replace <code>your-db-password</code> with a strong password.
          These are used to encrypt your credentials.
        </blockquote>

        <h2>Nginx Reverse Proxy Configuration</h2>
        <pre><code>{`# Install Nginx
sudo apt install nginx -y

# Create n8n site config
sudo nano /etc/nginx/sites-available/n8n

# Paste this config:
server {
    listen 80;
    server_name n8n.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:5678;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # WebSocket support (required for n8n)
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # Timeouts for long-running workflows
        proxy_read_timeout 3600;
        proxy_send_timeout 3600;
    }
}

# Enable the site
sudo ln -s /etc/nginx/sites-available/n8n /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx`}</code></pre>

        <h2>SSL with Certbot (Let&apos;s Encrypt)</h2>
        <pre><code>{`# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate (replace with your domain)
sudo certbot --nginx -d n8n.yourdomain.com

# Follow prompts:
# - Enter email for renewal notifications
# - Agree to terms
# - Choose option 2 (redirect HTTP to HTTPS)

# Certbot automatically updates nginx config and sets up auto-renewal
# Verify auto-renewal
sudo certbot renew --dry-run`}</code></pre>

        <h2>Environment Variables and Security</h2>
        <p>
          Instead of hardcoding sensitive values in docker-compose.yml, use a <code>.env</code> file:
        </p>
        <pre><code>{`# Create .env file in ~/n8n/
cat > .env << 'EOF'
N8N_ENCRYPTION_KEY=your-random-32-char-secret
DB_POSTGRESDB_PASSWORD=your-strong-db-password
N8N_HOST=n8n.yourdomain.com
WEBHOOK_URL=https://n8n.yourdomain.com/
EOF

# Restrict permissions
chmod 600 .env

# Reference in docker-compose.yml using ${"${VARIABLE_NAME}"}
# Docker Compose automatically reads .env in the same directory`}</code></pre>

        <h2>Automatic Backup to S3</h2>
        <p>
          Set up an n8n workflow to back up all workflows and credentials daily:
        </p>
        <ol>
          <li>Create a Schedule trigger (daily at 3am)</li>
          <li>HTTP Request to n8n API: <code>GET /api/v1/workflows</code> with API key</li>
          <li>Convert to JSON</li>
          <li>HTTP Request to AWS S3 or Cloudflare R2 to upload the backup file</li>
          <li>Also use <code>docker exec n8n-postgres pg_dump</code> via Execute Command node for DB backup</li>
        </ol>
        <p>
          For simpler backups without S3, just schedule a cron job on the server:
        </p>
        <pre><code>{`# Add to crontab (crontab -e)
# Daily backup at 3am
0 3 * * * docker exec n8n-n8n-1 n8n export:workflow --all --output=/home/node/.n8n/backup-$(date +%Y%m%d).json`}</code></pre>

        <h2>Starting and Managing n8n</h2>
        <pre><code>{`# Start n8n
cd ~/n8n
docker compose up -d

# View logs
docker compose logs -f n8n

# Stop n8n
docker compose down

# Update to latest n8n version
docker compose pull
docker compose up -d

# Check n8n status
docker compose ps`}</code></pre>

        <h2>Monitoring and Updates</h2>
        <p>
          For production setups, add basic monitoring:
        </p>
        <ul>
          <li><strong>UptimeRobot</strong> (free) — monitors your n8n URL and alerts via email/Telegram if down</li>
          <li><strong>n8n Error Workflow</strong> — create a global error handler workflow that sends you a Telegram message when any workflow fails</li>
          <li><strong>n8n built-in metrics</strong> — enable with <code>N8N_METRICS=true</code> environment variable</li>
        </ul>
        <pre><code>{`# In your n8n environment variables, add:
N8N_METRICS=true
N8N_METRICS_PREFIX=n8n_

# Access metrics at: https://n8n.yourdomain.com/metrics
# Scrape with Prometheus / view in Grafana`}</code></pre>
        <p>
          Your self-hosted n8n is now production-ready. You have a fully functional automation server
          that costs under €5/month and can run unlimited workflows. Master n8n automation with our{" "}
          <a href="/en/courses/chatbot">AI Chatbot course (€59)</a> which covers building client-ready
          automations from scratch.
        </p>
      </BlogPost>
    </>
  );
}
