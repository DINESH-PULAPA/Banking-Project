import React, { useState } from 'react';
import '../styles/landing.css';
import Login from '../components/Login';
import Register from '../components/Register';
import About2 from '../assets/about2.png'; // import the image

const bankHeroImg = "https://images.unsplash.com/photo-1508385082359-f48b1c7b6a11?auto=format&fit=crop&w=800&q=80"; // modern bank building image
const featureImg1 = "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80";
const featureImg2 = "https://images.unsplash.com/photo-1523289333742-be1143f6b766?auto=format&fit=crop&w=600&q=80";

const Landing = () => {
    const [isLoginBox, setIsLoginBox] = useState(true);

    return (
        <div className='landingPage'>
            <header className="modern-header">
                <div className="modern-logo">
                    <span role="img" aria-label="bank" className="logo-icon">🏦</span>
                    <span className="logo-text">SB Bank</span>
                </div>
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#auth">Join Now</a></li>
                    </ul>
                </nav>
            </header>

            <main className="modern-main">
                <section className="modern-hero" id="home">
                    <div className="hero-content">
                        <h1>Modern Banking, Simplified</h1>
                        <p>Experience seamless, secure, and smart banking with SB Bank. Manage your finances with ease, anytime, anywhere.</p>
                        <a href="#auth" className="cta-btn">Get Started</a>
                    </div>
                    <div className="hero-image">
                        <img src={About2} alt="Modern Bank" />
                    </div>
                </section>

                <section className="modern-features" id="features">
                    <div className="feature-card">
                        <img src={featureImg1} alt="Secure Deposits" />
                        <h3>Secure Deposits</h3>
                        <p>Your money is protected with industry-leading security and insurance.</p>
                    </div>
                    <div className="feature-card">
                        <img src={featureImg2} alt="Smart Loans" />
                        <h3>Smart Loans</h3>
                        <p>Flexible loan options with instant approval and transparent rates.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">💳</span>
                        <h3>Instant Cards</h3>
                        <p>Get virtual and physical cards for all your needs, instantly.</p>
                    </div>
                </section>

                <section className="modern-auth-section" id="auth">
                    <div className="auth-card">
                        {isLoginBox ? (
                            <Login setIsLoginBox={setIsLoginBox} />
                        ) : (
                            <Register setIsLoginBox={setIsLoginBox} />
                        )}
                    </div>
                </section>
            </main>

            <footer className="modern-footer">
                <p>&copy; {new Date().getFullYear()} SB Bank. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Landing;