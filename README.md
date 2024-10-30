# Circlr - Customer Relationship Management System

Circlr is a modern CRM system built with React, Node.js, and MongoDB, featuring real-time communications, automation workflows, and comprehensive customer management capabilities.

## Features

- 📊 Interactive Dashboard with Real-time Analytics
- 👥 Customer Management
- 💬 Multi-channel Communications (Email, WhatsApp, SMS)
- 🤖 Chatbot Builder
- ⚡ Automation Workflows
- 📈 Customer Segmentation
- 🔔 Notification System
- 👤 User Management & Roles

## Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Recharts for analytics
- Lucide React for icons
- React Router for navigation
- Zustand for state management

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.IO for real-time features
- JWT for authentication
- Nodemailer for email services

## Prerequisites

- Node.js (v16 or higher)
- MongoDB
- npm or yarn
- Git

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/circlr.git
cd circlr
```

### 2. Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm run dev
```

### 3. Backend Setup

```bash
# Navigate to backend directory
cd server

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm run dev
```

### 4. Environment Variables

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
```

#### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/circlr
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=1d

# Email Configuration
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=your_email@example.com
EMAIL_PASSWORD=your_email_password
EMAIL_FROM=noreply@circlr.com

# WhatsApp Business API (if using)
WHATSAPP_API_KEY=your_api_key
WHATSAPP_API_SECRET=your_api_secret
```

## Project Structure

```
circlr/
├── frontend/                # React frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── context/       # React context providers
│   │   ├── hooks/         # Custom React hooks
│   │   ├── services/      # API services
│   │   ├── store/         # Zustand store
│   │   └── types/         # TypeScript types
│   └── public/            # Static assets
│
└── server/                # Node.js backend
    ├── controllers/      # Route controllers
    ├── models/          # Mongoose models
    ├── routes/          # Express routes
    ├── services/        # Business logic
    ├── middleware/      # Express middleware
    └── utils/           # Utility functions
```

## Development

### Frontend Development

```bash
cd frontend
npm run dev
```

The frontend development server will start at `http://localhost:5173`

### Backend Development

```bash
cd server
npm run dev
```

The backend server will start at `http://localhost:5000`

## API Documentation

The API documentation is available at `/api-docs` when running the backend server in development mode.

### Main API Endpoints

- Authentication
  - POST `/api/auth/login`
  - POST `/api/auth/logout`
  - GET `/api/auth/me`

- Customers
  - GET `/api/customers`
  - POST `/api/customers`
  - GET `/api/customers/:id`
  - PUT `/api/customers/:id`
  - DELETE `/api/customers/:id`
  - POST `/api/customers/import`

- Communications
  - GET `/api/conversations`
  - POST `/api/conversations`
  - GET `/api/conversations/:id/messages`
  - POST `/api/conversations/:id/messages`

- Automations
  - GET `/api/automations`
  - POST `/api/automations`
  - PUT `/api/automations/:id`
  - DELETE `/api/automations/:id`

## Deployment

### Frontend Deployment

1. Build the frontend:
```bash
cd frontend
npm run build
```

2. Deploy the `dist` folder to your hosting service (Netlify, Vercel, etc.)

### Backend Deployment

1. Set up your production MongoDB database
2. Configure environment variables for production
3. Deploy to your hosting service (Heroku, DigitalOcean, etc.)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, email support@circlr.com or open an issue in the GitHub repository.