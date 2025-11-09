# 🌐 EZ Labs Homepage

A **single-page responsive web application** built using **React.js (Vite)** for the **EZ Labs Frontend Assignment**.  
This project recreates the homepage design from the provided Figma file and integrates a functional **Contact Form** connected to the official API endpoint.

---

## 🎯 Objective

To implement the **EZ Labs Homepage** based on the Figma design with:
- Fully responsive layout across **mobile, tablet, mini desktop, and desktop** devices.
- A working **contact form** integrated with the provided API endpoint.
- Proper **frontend validation** and meaningful UI/UX interactions.
- Clean, modular, and readable code using React functional components.

---

## 🧠 Tech Stack

- ⚛️ **React.js (Vite)**
- 🎨 **Plain CSS** for styling and responsiveness
- 🔗 **Axios** for API communication
- 💬 **Figma Design Reference:**  
  [EZ Labs Assignment UI Design](https://www.figma.com/design/1EUuNvrVUVWuYkTG0OmpMj/EZ-Labs-Assignment?node-id=0-1&t=WoUIFHGYARdd1lg0-1)

---

## 📱 Responsiveness

The application is optimized for all screen sizes:
- **Mobile (≤480px)**
- **Tablet (768px)**
- **Mini Desktop (1024px)**
- **Full Desktop (1366px and above)**

It ensures:
- No horizontal scrollbars  
- Adaptive grid layouts  
- Scalable typography using `clamp()`  
- Adjusted image and card sizes  

---

## 💌 Contact Form Integration

### **API Endpoint:**
POST https://vernanbackend.ezlab.in/api/contact-us/

### **Request Body:**
```json
{
  "name": "Test User",
  "email": "testuser@gmail.com",
  "phone": "9876543210",
  "message": "This is a message"
}

Features:

✅ Validation for empty fields

✅ Email format validation

✅ Success message on API 200 response (“Form Submitted Successfully!”)

✅ Error handling for invalid or failed requests

✅ Optional loading indicator and form reset after success

✨ Credits

Designed by: EZ Labs (Figma Reference)

Developed by: Akansha Rana


📬 Contact

If you’d like to connect or collaborate:
Email: akansharana00020@gmail.com
GitHub: https://github.com/Akansha-Rana20/ezlabs_homepage