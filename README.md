# Lakshya Tyagi — Portfolio

A full-stack personal portfolio with a contact form and a small, password-protected inbox for managing messages.

Built with React and Vite on the frontend, and Express, MongoDB, and JWT authentication on the backend.

## Features

- Portfolio sections for introduction, skills, projects, and contact details
- Light and dark theme support
- Contact messages stored in MongoDB
- Admin login to view and delete messages

## Run locally

Start the API first:

```bash
cd Backend
npm install
```

Create `Backend/.env` with your MongoDB connection details, token secrets, and the local frontend origin:

```env
PORT=8000
COR_ORIGIN=http://localhost:5173
MONGODB_URI=<your-mongodb-uri>
ACCESS_TOKEN_SECRET=<secret>
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=<secret>
REFRESH_TOKEN_EXPIRY=10d
ADMIN_EMAIL=<admin-email>
ADMIN_PASSWORD=<admin-password>
```

Then run:

```bash
npm run dev
```

In another terminal, start the frontend:

```bash
cd Frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Deployment

The frontend is set up for Vercel and proxies `/api/*` requests to the Render backend through `Frontend/vercel.json`.

- Vercel: set the root directory to `Frontend`.
- Render: set the root directory to `Backend`, build with `npm ci`, and start with `node index.js`.
- On Render, set `COR_ORIGIN` to the deployed Vercel URL and add the remaining backend environment variables. Never commit `.env` files.

## License

Released under the [MIT License](LICENSE).
