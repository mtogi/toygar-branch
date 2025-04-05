# DataSense Application Structure

This document outlines the structure, navigation, and authentication rules for the DataSense application.

## Page Structure

### Public Pages (accessible without login)
- **Home Page (`/`)**: The landing page with general information about DataSense.
- **Services Section** (`/#services`): A section on the home page showing available services.
- **About Page** (`/about`): Information about the project and team.
- **FAQ Page** (`/faq`): Frequently asked questions.
- **Login Page** (`/login`): For users to sign in.
- **Register Page** (`/register`): For new users to create an account.

### Protected Pages (require authentication)
- **Dashboard** (`/dashboard`): Main user dashboard with overview and analytics.
- **Devices** (`/devices`): List of user's registered devices.
- **Device Specific** (`/device/[deviceId]`): Details about a specific device.
- **Device Register** (`/device/register`): Form to register a new device.
- **Live Chart** (`/device/[deviceId]/live`): Real-time data visualization for a specific device.

## Navigation Structure

### Navbar Elements
- **Left Section**: Logo and brand name
- **Middle Section**:
  - Home (public)
  - Services (public)
  - Dashboard (authenticated only)
  - Devices (authenticated only)
  - FAQ (public)
- **Right Section**:
  - Login/Register buttons (for non-authenticated users)
  - Sign Out button (for authenticated users)

## Authentication Rules

Authentication is handled via NextAuth.js and protected through middleware:

1. Public routes can be accessed by all users.
2. Protected routes require a valid authentication token.
3. Unauthorized users attempting to access protected routes are redirected to the login page.
4. Authenticated users attempting to access login/register are redirected to the dashboard.

## API Routes

- **/api/auth/...**: Authentication-related endpoints
- **/api/devices**: Device management endpoints
- **/api/data**: Data retrieval endpoints

## Design Guidelines

- Use consistent color scheme (primary blue: #1456BC, accent orange: #FF8C42)
- Responsive design that works on all screen sizes
- Clear and intuitive navigation
- Visual indicators for authenticated-only features
- Consistent styling across all pages

## Implementation Notes

- Middleware enforces route protection
- User session is managed via NextAuth
- Device data is accessed through context providers
- Backend uses MongoDB for data storage

## Future Enhancements

- Implement user profile page
- Add device sharing functionality
- Create notification system
- Enhance data visualization options
- Add data export functionality 