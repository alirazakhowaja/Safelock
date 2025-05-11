import React from "react";
import "./HomeScreen.css"; // Import the CSS file for styling
import BrandLogo from './BrandLogo';
import Icon from './LockIcon';

function HomeScreen() {
  return (
    <div className="HomeScreen">
      <header>
        <h1>Welcome to Safelock <Icon /></h1>
        <p>Your trusted security partner powered with Artificial Intelligence</p>
      </header>

        {/* Trusted Brands Section */}
        <section className="trusted-brands-section">
          <h2>Trusted by major brands all over America</h2>
          <div className="logo-grid">
            <BrandLogo image="https://assets.api.uizard.io/api/cdn/stream/e08584bb-90d3-4dd3-81ba-ac6d24caf579.png" alt="Shell" />
            <BrandLogo image="https://assets.api.uizard.io/api/cdn/stream/1982bc75-0dcc-453a-8f47-5b69a6e3267a.png" alt="Dunkin" />
            <BrandLogo image="https://assets.api.uizard.io/api/cdn/stream/43cb4fce-51b7-45b4-93c2-e557889def58.png" alt="Hilton" />
            <BrandLogo image="https://assets.api.uizard.io/api/cdn/stream/a082b994-5eac-4b4d-8794-043af66ff944.png" alt="7-Eleven" />
            <BrandLogo image="https://assets.api.uizard.io/api/cdn/stream/88a9c915-493c-4b19-83b5-b61a795ec15e.png" alt="Popeyes" />
            <BrandLogo image="https://assets.api.uizard.io/api/cdn/stream/d53ed972-441e-4362-9f19-44ff6b04a85b.png" alt="McDonald's" />
            <BrandLogo image="https://assets.api.uizard.io/api/cdn/stream/0c3df04b-f7b6-403e-a307-2520b2801f8c.png" alt="Burger King" />
            <BrandLogo image="https://assets.api.uizard.io/api/cdn/stream/a7a7fe1f-85b1-4630-9ec9-fbf927ae8495.png" alt="CircleK" />
            <BrandLogo image="https://assets.api.uizard.io/api/cdn/stream/0414995e-a96c-46d4-b584-9cfa9636fe9f.png" alt="CVS" />
            <BrandLogo image="https://assets.api.uizard.io/api/cdn/stream/3b09af1a-81c4-466b-b3e1-085e6d060e10.png" alt="Chevron" />
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section">
          <h2>What can we help with?</h2>
          <div className="services-grid">
            <div className="service-box">
              <h3>Eliminate Costly Losses</h3>
              <p>Our AI meticulously analyzes real-time data from theft detection systems, employee performance metrics, and Point-of-Sale (POS) systems to pinpoint and address the root causes of daily losses.</p>
            </div>
            <div className="service-box">
              <h3>Skyrocket Sales with Intelligent Predictions</h3>
              <p>Leverage the power of predictive AI based on your sales data to anticipate trends, optimize inventory, and implement strategies that drive daily revenue growth.</p>
            </div>
            <div className="service-box">
              <h3>Gain Unwavering Real-Time Oversight</h3>
              <p>Stay informed with instant alerts whenever anomalies or potential issues arise, allowing you to take immediate action and prevent significant losses</p>
            </div>
            <div className="service-box">
              <h3>Reduce Fraud and Protect Your Bottom Line</h3>
              <p>Our AI helps identify and mitigate fraudulent chargebacks and provides data to support you in navigating unemployment claims effectively</p>
            </div>
          </div>
        </section>

        {/* Appreciation Section */}
        <section className="appreciation-section">
          <h2>Wall of Appreciation</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <img src="https://images.unsplash.com/photo-1585807515950-bc46d934c28b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzOHx8bWFufGVufDF8fHx8MTc0NTcwNDc1M3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Johnson Smith" />
              <div className="testimonial-name">Johnson Smith</div>
              <div className="testimonial-role">Shell Station</div>
              <div className="testimonial-comment">
                Safelock has revolutionized how we manage our convenience store. We've seen a significant decrease in theft and a noticeable increase in sales thanks to their AI-powered insights.
              </div>
            </div>
            <div className="testimonial-card">
              <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzMXx8bWFuYWdlcnxlbnwxfHx8fDE3NDU3MDQ5MTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Dominique Gatewood" />
              <div className="testimonial-name">Dominique Gatewood</div>
              <div className="testimonial-role">McDonald's</div>
              <div className="testimonial-comment">
                The real-time alerts have been invaluable in preventing losses at our restaurant. We can now address issues immediately, saving us time and money.
              </div>
            </div>
            <div className="testimonial-card">
              <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyMDUzMDJ8MHwxfHNlYXJjaHwzfHxpbmRpYW58ZW58MXx8fHwxNzQ1NzA1MjExfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Muhammad Ali" />
              <div className="testimonial-name">Muhammad Ali</div>
              <div className="testimonial-role">Retail Locations</div>
              <div className="testimonial-comment">
                Managing 19 retail locations used to be a constant challenge. Safelock provides the centralized oversight we need to optimize inventory and boost profitability across all our stores.
              </div>
            </div>
          </div>
        </section>

      <section className="trial-section">
        <h2>Start your free 30 days trial today.</h2>
        <form className="trial-form">
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Start Free Trial</button>
        </form>
      </section>
    </div>
  );
}

export default HomeScreen;