# Task Management System - Development Instructions

## Project Overview
Full-stack task management application with React.js frontend, Django REST backend, and Tailwind CSS styling.

## Quick Start

### Backend (Django)
```bash
cd backend
python -m venv venv
venv\Scripts\activate  # Windows: or source venv/bin/activate on macOS/Linux
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
```

**Admin Credentials:**
- Username: `admin`
- Password: `admin`
- Admin URL: `http://localhost:8000/admin`

### Frontend (React + Tailwind)
```bash
cd frontend
npm install
npm run dev
```

**Application URL:** `http://localhost:5173`

## Project Structure

### Backend (`/backend`)
- **tasks/** - Main app with models, views, and serializers
  - `models.py` - Task and User models
  - `views.py` - TaskViewSet and UserViewSet
  - `serializers.py` - REST serializers
  - `urls.py` - API routing
- **task_management/** - Django project settings
- `requirements.txt` - Python dependencies
- `manage.py` - Django management script

### Frontend (`/frontend`)
- **src/**
  - `App.jsx` - Main component
  - `index.css` - Global styles with Tailwind
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `package.json` - Node dependencies

## Key Features
- ✅ CRUD operations for tasks
- ✅ Task status management (To Do, In Progress, Done)
- ✅ Priority levels (Low, Medium, High)
- ✅ User authentication
- ✅ Task filtering and sorting
- ✅ CORS enabled for frontend-backend communication
- ✅ Tailwind CSS for responsive design

## API Documentation

### Tasks API
- `GET /api/tasks/` - List all tasks
- `POST /api/tasks/` - Create task
- `PUT /api/tasks/{id}/` - Update task
- `DELETE /api/tasks/{id}/` - Delete task
- `GET /api/tasks/my_tasks/` - Get user's tasks
- `GET /api/tasks/by_status/?status=todo` - Filter by status

### Users API
- `GET /api/users/` - List users
- `GET /api/users/me/` - Current user info

## Development Guidelines

### Backend
- Add new features in the `tasks` app
- Create migrations after model changes: `python manage.py makemigrations`
- Run migrations: `python manage.py migrate`
- Test API endpoints in admin panel or using tools like Postman/Insomnia

### Frontend
- Components go in `src/components/`
- Use Tailwind classes for styling
- Tailwind is pre-configured and ready to use
- Hot reload is enabled with Vite

## Running Tests

Backend:
```bash
python manage.py test
```

Frontend:
```bash
npm run dev  # Development mode with hot reload
```

## Build & Deployment

### Frontend Build
```bash
npm run build
```

Output will be in `dist/` folder.

### Backend Production
Set `DEBUG=False` in settings and configure proper database before deployment.

## Troubleshooting

**Port already in use:**
- Backend: `python manage.py runserver 8001`
- Frontend: `npm run dev -- --port 3000`

**CORS issues:**
Update `CORS_ALLOWED_ORIGINS` in `backend/task_management/settings.py`

**Database issues:**
```bash
python manage.py flush  # Reset database
python manage.py migrate
python manage.py createsuperuser
```

## Environment Configuration

Copy `.env.example` to `.env` and update values as needed.

## Additional Resources

- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
