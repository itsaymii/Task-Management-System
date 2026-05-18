# Task Management System

A full-stack task management application built with React.js, Django REST Framework, and Tailwind CSS.

## Project Structure

```
Task-Management-System/
├── frontend/          # React.js + Tailwind CSS
└── backend/           # Django REST API
```

## Frontend Setup

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
cd frontend
npm install
```

### Development

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

## Backend Setup

### Prerequisites
- Python 3.8+
- pip

### Installation

1. Navigate to the backend folder:
```bash
cd backend
```

2. Create and activate virtual environment:
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python -m venv venv
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

### Database Setup

```bash
python manage.py makemigrations
python manage.py migrate
```

### Create Admin User

```bash
python manage.py createsuperuser
```

Admin credentials:
- Username: `admin`
- Password: `admin`

### Run Development Server

```bash
python manage.py runserver
```

The API will be available at `http://localhost:8000`

Admin panel: `http://localhost:8000/admin`

## API Endpoints

- `GET /api/tasks/` - List all tasks
- `POST /api/tasks/` - Create a new task
- `GET /api/tasks/{id}/` - Get task details
- `PUT /api/tasks/{id}/` - Update a task
- `DELETE /api/tasks/{id}/` - Delete a task
- `GET /api/tasks/my_tasks/` - Get current user's tasks
- `GET /api/tasks/by_status/?status=todo` - Filter tasks by status
- `GET /api/users/` - List all users
- `GET /api/users/me/` - Get current user info

## Features

- Create, read, update, and delete tasks
- Task status tracking (To Do, In Progress, Done)
- Priority levels (Low, Medium, High)
- Task assignment to users
- User authentication
- CORS enabled for frontend communication
- RESTful API design

## Environment Variables

Create a `.env` file in the backend folder (copy from `.env.example`):

```env
DEBUG=True
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=localhost,127.0.0.1
DATABASE_URL=sqlite:///db.sqlite3
CORS_ALLOWED_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```

## Technologies Used

### Frontend
- React.js
- Vite
- Tailwind CSS

### Backend
- Django 5.2+
- Django REST Framework
- django-cors-headers
- python-dotenv

## Getting Started

1. Start the backend server (in `backend` folder):
   ```bash
   python manage.py runserver
   ```

2. In a new terminal, start the frontend (in `frontend` folder):
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173`

4. Access the admin panel at `http://localhost:8000/admin`

## Notes

- Default admin username: `admin`
- Default admin password: `admin`
- CORS is configured to allow requests from `http://localhost:5173`
- SQLite is used as the default database (suitable for development)
