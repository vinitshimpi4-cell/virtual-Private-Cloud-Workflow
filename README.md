# VPC Explained: Build It Step by Step

An animated, beginner-friendly diagram that builds an AWS VPC one piece at a time, using a gated-society story that non-IT people can follow.

Click the steps on the left and the diagram grows into a full production-style network. Moving objects show the traffic:

| Object | Meaning |
|---|---|
| ✉️ | A visitor's request |
| 💾 | Data moving to the database |
| 🔁 | Live copy of the database to the second zone |
| 📦 | Software update leaving through NAT |
| 😈 | An intruder stopped by the guards |
| 🔐 | Office traffic through a VPN |
| 🤝 | Partner traffic through VPC peering |

## The nine steps

1. VPC, your private fenced plot
2. Availability Zones, two buildings
3. Subnets, public lobby and private flats
4. Internet Gateway and route table
5. Load balancer and web servers
6. App servers and database with replication
7. NAT Gateway
8. Security Groups and NACLs
9. VPN and VPC peering

## Run it locally

No build step and no dependencies. Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Host it on GitHub Pages

1. Create a new repository on GitHub (for example `vpc-visual`).
2. Upload everything from this folder, or push it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: animated VPC explainer"
   git branch -M main
   git remote add origin https://github.com/<your-username>/vpc-visual.git
   git push -u origin main
   ```
3. In the repository, open **Settings > Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose branch `main` and folder `/ (root)`, then **Save**.
5. After a minute your site is live at `https://<your-username>.github.io/vpc-visual/`.

## Project structure

```
index.html      page structure
css/style.css   styling, dark and light mode, diagram animation
js/app.js       the diagram (built as SVG), the steps and the explanations
.nojekyll       tells GitHub Pages to serve files as they are
LICENSE         MIT
```

## Customise

- Edit the story text in the `D`, `N` and `T` arrays in `js/app.js`.
- Add or move diagram pieces in the `S.push(...)` blocks. Each block has a step number (`s`) and appears from that step onward.
- Colours are CSS variables at the top of `css/style.css`.

The page loads one web font (Bricolage Grotesque) from Google Fonts and falls back to system fonts if offline.

## Note

This is a teaching diagram. Check the official AWS documentation for exact limits and pricing before designing a real system.
