# 📘 Meals on Wheels – Project Documentation

---

## 📖 Overview

**Meals on Wheels** is a web application that supports the planning, registration, and delivery of meals for community members. This project features a Spring Boot backend and a React frontend, with authentication, role-based access, and JWT security.

---

## 🏗️ Tech Stack

| Layer      | Technology            |
|------------|------------------------|
| Frontend   | React + Tailwind CSS   |
| Backend    | Spring Boot (Java)     |
| Database   | MySQL                  |
| Auth       | JWT + Spring Security  |
| API Client | Axios                  |

---

## ⚙️ Development Setup

### ✅ Prerequisites

- Java 17+
- Node.js (v18+)
- MySQL
- Maven
- Git

### 🔧 Backend Setup

```bash
cd backend
mvn spring-boot:run
```

- Runs on: `http://localhost:8080`

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

- Runs on: `http://localhost:3000`

---

## 🔐 Authentication Flow

### ➕ Registration

- `/api/auth/register` – (Coming soon) Different roles supported:
  - Member
  - Caregiver
  - Volunteer
  - Donor
  - Partner

### 🔐 Login

- `/api/auth/login`
- Returns a JWT token + full name + email + roles

### 🧠 Login Response Sample

```json
{
  "token": "jwt.token.here",
  "roles": ["ROLE_MEMBER"],
  "fullName": "John Doe",
  "email": "john@example.com"
}
```

- Stored in `localStorage`:
  - `token`
  - `username`
  - `userRoles`

---

## 📁 Project Structure

### Backend (Spring Boot)

| Package                    | Purpose                         |
|---------------------------|----------------------------------|
| `model`                   | JPA entity classes               |
| `dto`                     | Data Transfer Objects            |
| `controller`              | REST API controllers             |
| `repository`              | Spring Data JPA Repos            |
| `security`                | JWT logic & user auth            |
| `service`                 | Business logic layer             |

### Frontend (React)

| Folder/File              | Purpose                              |
|--------------------------|--------------------------------------|
|  ||


---

## 🚀 How to Use

### 🌐 Login

- Navigate to `/login`
- On success, user is redirected to `/dashboard`
- JWT and user info stored in `localStorage`

### 🔓 Logout

- Navigate to `/logout`
- Clears local storage and redirects to `/login`

---

## 🧠 Notes

- The navbar detects login status via `localStorage`
- JWT token is attached to **all API requests** (except `/auth/login`)
- Roles are parsed from `"ROLE_ADMIN"` → `"ADMIN"` in the UI
- Login/Logout works with `navigate()` and does not require page refresh

---

## 👨‍💻 Authors

- **Team Banana** 🍌
  - [**Akia Hans Swin Carreon** (Main Developer)](https://github.com/AlexAutumns)
  - [**David Juguilon Baylon** (Documentation Writer & Developer)](https://github.com/Specter-012)
  - [**Fazly Hussain Farha** (Design Architect & Developer)](https://github.com/Far28)
  - [**Kaung Sett Maw** (Developer)](https://github.com/kaungsettmaw)
  - [**Percival Jr. Santiago Ignacio** (Main Design Architect)](https://github.com/Shir-hue)
---

## 📝 License

MIT – Feel free to use and improve!
