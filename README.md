# To-Do List Application

## Overview

This is a simple **To-Do List** application built with **React.js** and **TypeScript**. It allows users to add, edit, complete, and delete tasks. The application stores tasks in **localStorage**, ensuring data persistence.

## Features

✅ Add new tasks with a description and deadline  
✅ Mark tasks as completed  
✅ Delete tasks  
✅ Tasks are stored in **localStorage**  
✅ Uses **React Hooks** (`useState`, `useEffect`)

## Tech Stack

-  **React.js** with **TypeScript**
-  **Vite** (for fast development)
-  **CSS** (for styling)
-  **localStorage** (for data persistence)

## Installation & Setup

### 1️⃣ Clone the repository

```sh
git clone https://github.com/Tol1bjonov/todo-app.git
cd todo-app
```

### 2️⃣ Install dependencies

```sh
npm install
```

### 3️⃣ Run the application

```sh
npm run dev
```

## Project Structure

```
/src
 ├── components
 │   ├── TaskForm.tsx       # Form to add new tasks
 │   ├── TaskList.tsx       # List of tasks
 │   ├── TaskItem.tsx       # Single task item
 │
 ├── App.tsx                # Main application component
 ├── main.tsx               # Entry point
 ├── styles.css             # Global styles
```

## Usage

1️⃣ Open the application in a browser  
2️⃣ Enter a task description and deadline in the form  
3️⃣ Click **"Add Task"** to save it  
4️⃣ Click on a task to mark it as completed  
5️⃣ Click the **"Delete"** button to remove a task

## Deployment

You can deploy the app using **GitHub Pages** or **Vercel**:

```sh
git push origin main
```
