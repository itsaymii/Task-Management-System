# Task Management System - Backend

Django REST API for the Task Management System.

## Setup

### Create virtual environment
```bash
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # macOS/Linux
```

### Install dependencies
```bash
pip install -r requirements.txt
```

### Setup database
```bash
python manage.py makemigrations
python manage.py migrate
```

### Create admin user
```bash
python manage.py createsuperuser
```

### Run development server
```bash
python manage.py runserver
```

API available at `http://localhost:8000`
Admin panel at `http://localhost:8000/admin`

## Features

- RESTful API for task management
- User authentication
- Task CRUD operations
- Task filtering by status
- User task assignment
- CORS enabled

## API Endpoints

### Tasks
- `GET /api/tasks/` - List all tasks
- `POST /api/tasks/` - Create task
- `GET /api/tasks/{id}/` - Get task
- `PUT /api/tasks/{id}/` - Update task
- `DELETE /api/tasks/{id}/` - Delete task
- `GET /api/tasks/my_tasks/` - User's tasks
- `GET /api/tasks/by_status/?status=todo` - Filter by status

### Users
- `GET /api/users/` - List users
- `GET /api/users/me/` - Current user

## Technologies

- **Django 5.2+** - Web framework
- **Django REST Framework** - API framework
- **django-cors-headers** - CORS support
- **python-dotenv** - Environment variables

## Configuration

Update settings in `.env` file or `task_management/settings.py`

## Models

### Task
- title (CharField)
- description (TextField)
- status (Choice: todo, in_progress, done)
- priority (Choice: low, medium, high)
- created_by (ForeignKey to User)
- assigned_to (ForeignKey to User, nullable)
- due_date (DateField, nullable)
- created_at (DateTimeField)
- updated_at (DateTimeField)
