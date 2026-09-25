# README.md

````
# Responsive Dashboard Navigation

A simple and modern **responsive dashboard navigation bar** built using pure HTML, CSS, and JavaScript.

The project is designed with a **mobile-first approach** and automatically adapts the navigation layout for desktop, tablet, and mobile screen sizes.

---

## 📌 Project Overview

This project implements a responsive dashboard navigation system with:

- Desktop navigation menu
- Mobile hamburger menu
- JavaScript-powered menu toggle
- Animated hamburger icon
- Responsive layout
- Active navigation states
- Dashboard content cards
- Sticky navigation bar
- Accessibility attributes

No external frameworks or libraries are required.

---

## 🛠️ Technologies Used

- **HTML5** – Page structure and semantic elements
- **CSS3** – Styling, responsive design, animations, and layouts
- **JavaScript** – Mobile menu functionality and navigation interactions

---

## 📁 Project Structure

```text
responsive-dashboard/
│
├── index.html
│
├── css/
│   └── style.css
│
└── js/
    └── script.js
````

 ### Files

 #### `index.html`

 Contains the main structure of the dashboard, including:

 - Navigation bar
- Logo
- Desktop navigation links
- Mobile navigation menu
- Profile section
- Dashboard hero section
- Dashboard cards

 #### `css/style.css`

 Contains all visual styling, including:

 - Navbar styling
- Hamburger icon styling
- Mobile menu
- Responsive layouts
- Dashboard cards
- Colors and typography
- Hamburger animation
- Tablet and mobile breakpoints

 #### `js/script.js`

 Handles the interactive functionality:

 - Opening and closing the mobile menu
- Hamburger animation
- Updating accessibility attributes
- Closing the menu after selecting a link
- Resetting the menu when resizing to desktop
- Managing active navigation links

---

 ## ✨ Features

 ### 1\. Responsive Navigation

 The navigation automatically changes depending on screen size.

 **Desktop:**

```
Dashboard | Analytics | Projects | Settings | Profile
```

 **Mobile:**

```
Dashboard                         ☰
```

 Clicking the hamburger icon opens the mobile navigation menu.

---

 ### 2\. Hamburger Menu

 The hamburger button is created using HTML and CSS.

 When clicked, JavaScript adds the `open` class and transforms the hamburger icon into an `X`.

---

 ### 3\. Mobile Navigation

 On smaller screens, the desktop navigation links are hidden and replaced with a dropdown mobile menu.

 The menu contains:

 - Dashboard
- Analytics
- Projects
- Settings
- Profile

---

 ### 4\. Responsive Dashboard

 The dashboard content uses CSS Grid.

 Desktop:

```
┌────────────┐ ┌────────────┐ ┌────────────┐
│ Analytics  │ │ Projects   │ │ Settings   │
└────────────┘ └────────────┘ └────────────┘
```

 Tablet:

```
┌────────────┐ ┌────────────┐
│ Analytics  │ │ Projects   │
└────────────┘ └────────────┘

┌────────────┐
│ Settings   │
└────────────┘
```

 Mobile:

```
┌──────────────────┐
│ Analytics        │
└──────────────────┘

┌──────────────────┐
│ Projects         │
└──────────────────┘

┌──────────────────┐
│ Settings         │
└──────────────────┘
```

---

 ## 📱 Responsive Breakpoints

 The project uses CSS media queries.

 ### Desktop

```
min-width: 981px
```

 Full navigation and three-column cards are displayed.

 ### Tablet

```
max-width: 980px
```

 Dashboard cards switch to two columns.

 ### Mobile

```
max-width: 768px
```

 The desktop navigation is replaced with the hamburger menu and cards become a single column.

---

 ## ▶️ How to Run the Project

 No installation or dependencies are required.

 ### Step 1

 Download or clone the project.

 ### Step 2

 Open the project folder.

 ### Step 3

 Open:

```
index.html
```

 in any modern web browser.

 That's it.

---

 ## 🧪 Testing

 The project can be tested by resizing the browser window.

 ### Desktop Test

 Check that:

 - Navigation links are visible
- Profile is visible
- Hamburger button is hidden
- Three dashboard cards are displayed

 ### Mobile Test

 Check that:

 - Desktop navigation is hidden
- Hamburger button is visible
- Clicking the hamburger opens the menu
- Hamburger changes into an X
- Clicking a navigation link closes the menu
- Dashboard cards appear in one column

 ### Tablet Test

 Check that:

 - Navigation remains usable
- Dashboard cards display in two columns
- Content remains readable

---

 ## ♿ Accessibility

 The project includes basic accessibility improvements:

 - Semantic HTML elements
- `aria-label` on the menu button
- `aria-expanded` state for the mobile menu
- Keyboard-accessible button
- Clear navigation links
- Responsive text sizing

---

 ## 🎨 Design

 The project uses a purple-based color scheme.

 Main color:

```
#6657E8
```

 Light purple:

```
#EEEAF F
```

 The design focuses on:

 - Clean UI
- Simple navigation
- Good spacing
- Responsive behavior
- Easy readability
- Modern dashboard appearance

---

 ## 🚀 Future Improvements

 Possible future enhancements include:

 - Dark mode
- User dropdown menu
- Notifications
- Search functionality
- Dashboard statistics
- Charts and graphs
- Sidebar navigation
- Authentication
- Backend integration

---

 ## 📄 License

 This project was created for educational and project submission purposes.

 You are free to modify and customize the code for your own project.

---

 ## 👨‍💻 Author

 **Your Name**

 Built with:

 **HTML5 + CSS3 + JavaScript**

````

Save that as:

```text
responsive-dashboard/
│
├── README.md
├── index.html
├── css/
│   └── style.css
└── js/
    └── script.js
````

 **Small correction:** in the README, the light-purple color should be `#EEE AFF` without a space; use the exact CSS value **`#EEE AFF` → `#EEEAF F`**? Actually the correct value from your CSS is **`#eeeaff`**. Use `#EEE AFF` nowhere—write **`#EEE AFF`** only if formatting is needed. The correct value is:

```
#eeeaff
```
