# AMRUTAM - Authentic Ayurvedic Wellness 🕉️

> *Discover the ancient wisdom of Ayurveda for modern wellness*

AMRUTAM is a comprehensive Ayurvedic wellness platform that brings authentic Ayurvedic products and certified practitioners together in one seamless digital experience.

## ✨ Features

### 🛍️ **E-Commerce Store**
- **Authentic Products**: Curated collection of genuine Ayurvedic medicines, supplements, and wellness products
- **Category Navigation**: Easy browsing by Hair Care, Skin Care, Digestion, Immunity, and more
- **Product Reviews**: Customer testimonials and ratings for informed purchasing
- **Responsive Design**: Optimized shopping experience across all devices

### 👨‍⚕️ **Doctor Consultation Booking**
- **Certified Practitioners**: Connect with verified Ayurvedic doctors and specialists
- **Video Consultations**: Seamless online consultations from the comfort of your home
- **Specialty Filters**: Find doctors by Panchakarma, Dermatology, Psychiatry, and more
- **Real-time Availability**: Check doctor schedules and book appointments instantly

### 🎨 **Modern UI/UX**
- **Beautiful Design**: Ayurvedic-inspired color palette with modern aesthetics
- **Smooth Animations**: Framer Motion powered interactions and transitions
- **Mobile-First**: Fully responsive design that works perfectly on all devices
- **Accessibility**: WCAG compliant design for inclusive user experience

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd amrutam
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Hooks

## 📁 Project Structure

```
amrutam/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── layout/        # Layout components (Header, Footer)
│   │   └── ui/            # shadcn/ui components
│   ├── pages/             # Page components
│   │   ├── Shop.tsx       # E-commerce store
│   │   ├── Doctors.tsx    # Doctor consultation booking
│   │   └── ...
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   └── styles/            # Global styles
├── package.json
└── README.md
```

## 🎯 Key Components

### Shop Page (`/shop`)
- Product catalog with filtering and search
- Category-based navigation
- Customer reviews section
- Ayurvedic shorts video carousel

### Doctors Page (`/doctors`)
- Doctor directory with specialty filters
- Pagination for large doctor lists
- Detailed doctor profiles
- Appointment booking system

### Responsive Design
- Mobile-first approach
- Adaptive layouts for tablets and desktops
- Touch-friendly interactions
- Optimized performance across devices

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with `npm run build`

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Manual Deployment
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🤝 Contributing

We welcome contributions to AMRUTAM! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by traditional Ayurvedic practices
- Built with modern web technologies
- Dedicated to promoting authentic wellness solutions

## 📞 Support

For support, email support@amrutam.com or join our community forum.

---

**AMRUTAM** - *Where Ancient Wisdom Meets Modern Wellness* 🌿✨
