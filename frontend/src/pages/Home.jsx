// pages/Home.jsx
import React from 'react';

// Import Layout Components từ thư mục layouts
import { Header } from "../components/layout/Header"
import { Footer } from "../components/layout/Footer"

// Import Section Components từ thư mục components/
import { HeroCarousel } from "../components/HeroCarousel"
import { BlogSection } from "../components/BlogSection"
import { ServicesSection } from "../components/ServicesSection"
import { SolutionsSection } from "../components/SolutionsSection"
import { AboutSection } from "../components/AboutSection"
import { TeamSection } from "../components/TeamSection"
import { NewsletterSection } from "../components/NewsletterSection"


const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* 1. Header (Menu) */}
            <Header />

            {/* 2. Các Section chính của trang chủ */}
            <HeroCarousel />
            <BlogSection />
            <ServicesSection />
            <SolutionsSection />
            <AboutSection />
            <TeamSection />
            <NewsletterSection />

            {/* 3. Footer */}
            <Footer />
        </div>
    )
}

export default Home