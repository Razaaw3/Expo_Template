# React Native Expo Template 📱

This is a template for creating a React Native Expo application with TypeScript, pre-configured with ESLint and TypeScript settings.


## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Updating Dependencies](#updating-dependencies)
- [Folder Structure](#folder-structure)
- [Additional Information](#additional-information)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) installed on your local machine.
- [Expo CLI](https://docs.expo.dev/get-started/installation/) installed globally.
- [Yarn](https://yarnpkg.com/getting-started/install) installed (for dependency management).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Razaaw3/Expo_Template.git
   ```
2. Navigate to the project directory:
   
  ```bash
   cd Expo_Template
  ```
3. Install the project dependencies:
  ```bash
   yarn
  ```
### Usage
To start the development server and run the Expo application, use the following command:
 ```bash
   npx expo
 ```
This will open the Expo DevTools. You can then choose to run the app on an iOS or Android emulator/simulator or on a physical device by scanning the QR code.

### Updating Dependencies
To update all project dependencies, you can use the following command:
 ```bash
   yarn upgrade
 ```
Additionally, you can ensure that you have the correct package versions by running:
 ```bash
   npx expo install --fix
 ```
### Folder Structure
The project is structured as follows:

```
/
├── assets/
│   ├── Fonts/         # Contains fonts assets
├── src/
│   ├── assets/
│       ├── images/       # Contains image assets
│   ├── components/      # Reusable components
│   ├── navigation/      # Navigation setup
│   ├── screens/
│   │   ├── login/       # Login-related components and screens
│   │   ├── signup/      # Signup-related components and screens
│   │   ├── ...          # Other screen-related components and screens
├── .eslintrc.js          # ESLint configuration
├── tsconfig.json         # TypeScript configuration
├── App.tsx               # Main application entry point
├── package.json          # Project dependencies and scripts
├── app.json              # Expo configuration
└── ...

```

### Additional Information
For more information on Expo visit [Expo Docs](https://docs.expo.dev/)
