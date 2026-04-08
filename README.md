# Softvence Frontend Job Task Assessment

## Features

- User Registration with email verification
- 6-digit OTP verification
- JWT-based secure login
- Remember me functionality
- Protected user details API
- Responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- Form validation with Formik and Yup

## Tech Stack

- **Framework:** Next.js 16.2.2
- **Database:** MongoDB with Mongoose
- **Auth:** JWT (jsonwebtoken)
- **Password:** bcrypt
- **Styling:** Tailwind CSS 4
- **Forms:** Formik + Yup
- **Animations:** Motion (Framer Motion)
- **HTTP:** Axios
- **Icons:** React Icons

## Project Structure

```
src/
├── app/
│   ├── (auth)/
│   │   ├── login/page.jsx
│   │   ├── registration/page.jsx
│   │   └── verify-otp/page.jsx
│   ├── api/
│   │   ├── login/route.js
│   │   ├── logout/route.js
│   │   ├── register/route.js
│   │   ├── verify_otp/route.js
│   │   ├── user-detail/route.js
│   │   └── health/route.js
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── common/        (Logo, Navbar, MobileMenu, etc.)
│   ├── home/          (hero, products, client, cta)
│   ├── header/
│   ├── footer/
│   ├── shared/        (Button, Title, Heading)
│   ├── svg/           (icons)
│   └── polygon/       (decorative elements)
├── hook/
│   └── useAuth.js     (authentication hook)
├── lib/
│   └── mongoDB.js     (database connection)
├── models/
│   └── user.model.js
├── utils/
│   └── helper.js      (JWT utilities)
└── constant/
    └── data.js        (static data)
```

## Environment Variables

Create a `.env` file:

```env
MONGODB_URI=mongodb://localhost:27017/softvence
SECRET_KEY=your-secret-key-here
```

## Installation

```bash
npm install
```

## Running

```bash
npm run dev      # Development
npm run build    # Production build
npm start        # Start production server
```

## API Endpoints

| Method | Endpoint           | Description                |
| ------ | ------------------ | -------------------------- |
| POST   | `/api/register`    | Register user, returns OTP |
| POST   | `/api/verify_otp`  | Verify email OTP           |
| POST   | `/api/login`       | Login, sets JWT cookie     |
| POST   | `/api/logout`      | Clear auth cookie          |
| GET    | `/api/user-detail` | Get authenticated user     |

## Authentication Flow

1. **Register** - User signs up, receives OTP
2. **Verify OTP** - Email verified, redirect to login
3. **Login** - Credentials validated, JWT cookie set
4. **Access** - Protected routes verified via cookie
5. **Logout** - Cookie cleared, session terminated

## useAuth Hook

```javascript
const { user, isAuthenticated, loading, login, logout, checkAuth } = useAuth();
```

| Property                              | Type     | Description   |
| ------------------------------------- | -------- | ------------- |
| `user`                                | object   | Current user  |
| `isAuthenticated`                     | boolean  | Auth status   |
| `loading`                             | boolean  | Loading state |
| `login(email, password, remember_me)` | function | Login         |
| `logout()`                            | function | Logout        |
| `checkAuth()`                         | function | Re-check auth |

## User Schema

```javascript
{
  first_name: String,           // required
  last_name: String,            // required
  email: String,                // required, unique
  password: String,             // required, hashed
  terms: Boolean,               // default: false
  otp: Number,                 // email verification OTP
  password_forget_otp: Number,  // password reset OTP
  createdAt: Date,
  updatedAt: Date
}
```

## Cookie Settings

- `auth_token`: httpOnly, secure cookie
- Duration: 7 days (remember me) or 24 hours (default)
- SameSite: Lax
