# Formspree Setup Instructions

Your contact form is now ready to send emails directly to **kapoorbhavya266@gmail.com** using Formspree.

## Quick Setup (2 minutes)

### 1. Create a Formspree Form
1. Go to [formspree.io](https://formspree.io)
2. Sign up with your email (kapoorbhavya266@gmail.com)
3. Click **Create** to make a new form
4. Name it something like "Portfolio Contact"
5. Enter your email: `kapoorbhavya266@gmail.com`
6. Click **Create Form**

### 2. Get Your Form ID
After creating the form, you'll see a page with your form endpoint like:
```
https://formspree.io/f/xyzabc123
```

Copy the part after `/f/` (example: `xyzabc123`)

### 3. Update Your Contact Page
Open `src/pages/Contact.js` and find this line:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Replace `YOUR_FORM_ID` with your actual ID from step 2.

Example:
```javascript
const response = await fetch('https://formspree.io/f/xyzabc123', {
```

### 4. Test It
1. Run your app: `npm start`
2. Go to the Contact page
3. Fill out the form and submit
4. Check your email for the message!

## How It Works
- ✅ Form submits directly to Formspree
- ✅ Formspree forwards the message to your Gmail
- ✅ No backend server needed
- ✅ No environment variables needed
- ✅ Free service with no limits

## Troubleshooting
- **"Failed to send message"**: Check that you replaced `YOUR_FORM_ID` with your actual ID
- **No email received**: Check spam/promotions folder in Gmail
- **Can't find Form ID**: In Formspree account, go to your form and copy the ID from the URL

That's it! Your contact form will now send emails directly to your Gmail.
