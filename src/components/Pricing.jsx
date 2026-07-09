import React from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      id: 1,
      title: 'Brand Foundations',
      description: 'For startups and creators needing essential branding and website setups.',
      price: '$950.00',
      features: [
        'Brand kit and logo design foundations',
        'Responsive one-page website development',
        'Basic Search Engine Optimization (SEO)',
        'Social media templates and guidelines',
        'Up to 5 team members support',
        '2 weeks post-delivery support',
        'Standard customer support',
      ],
      isPopular: false,
    },
    {
      id: 2,
      title: 'Growth Marketing',
      description: 'For scaling brands seeking end-to-end tech design and digital marketing.',
      price: '$2,450.00',
      features: [
        'Full-stack multi-page website development',
        'Advanced brand identity system design',
        'Strategic Digital Marketing setup & SEO',
        'AI-driven customer analytics dashboards',
        'Up to 25 team members integration',
        'OpenAI and dynamic CRM integrations',
        'Priority 24/7 slack and chat support',
      ],
      isPopular: true,
    },
  ];

  return (
    <section className="section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="pricing-wrapper">
          <div className="section-header">
            <div className="section-heading-wrap pricing">
              <h2 className="section-heading">Flexible Pricing Plan</h2>
            </div>
          </div>
          <div className="space-3-large"></div>
          <div className="pricing-card-wrapper">
            <div className="w-layout-grid pricing-grid">
              {plans.map((plan) => (
                <div key={plan.id} className={`pricing-card ${plan.isPopular ? 'black' : ''}`}>
                  <div className="pricing-card-content">
                    <div className="pricing-card-top">
                      <div className="pricing-icon-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="pricing-icon">
                          <path d="M8.82522 2.78813C7.93056 2.78813 7.20522 3.5132 7.20522 4.40813C7.20522 5.16174 7.72005 5.79423 8.41661 5.97563L6.75986 9.81638C7.50409 9.95162 8.06791 10.6031 8.06791 11.3867C8.06791 12.2682 7.354 12.9834 6.47275 12.9834C5.59141 12.9834 4.8775 12.2682 4.8775 11.3866C4.8775 10.7599 5.23858 10.2183 5.76372 9.95696L3.38181 6.24352C3.75714 5.97071 4.0015 5.52915 4.0015 5.02923C4.0015 4.19987 3.33053 3.52641 2.5015 3.52641C1.67238 3.52641 1 4.20001 1 5.02923C1 5.85859 1.67238 6.53073 2.50141 6.53073C2.53581 6.53073 2.57022 6.53007 2.60397 6.52782L4.56836 17.1684H19.3809L21.3466 6.52782C21.3804 6.53007 21.4148 6.53077 21.4492 6.53077C22.2782 6.53077 22.9506 5.85859 22.9506 5.02927C22.9506 4.19991 22.2782 3.52646 21.4492 3.52646C20.6201 3.52646 19.9478 4.20005 19.9478 5.02927C19.9477 5.53191 20.1955 5.97554 20.5746 6.24802L18.2001 9.97609C 18.7053 10.2442 19.0498 10.7748 19.0498 11.3867C19.0498 12.2683 18.3359 12.9834 17.4546 12.9834C16.5734 12.9834 15.8594 12.2682 15.8594 11.3867C15.8594 10.5847 16.4501 9.92105 17.2202 9.80762L15.5912 5.9858C16.3073 5.81813 16.8408 5.17548 16.8408 4.40813C16.8408 3.5131 16.1155 2.78813 15.2208 2.78813C14.326 2.78813 13.6006 3.5132 13.6006 4.40813C13.6006 5.10179 14.0369 5.69321 14.6494 5.9243L12.5621 9.4854C13.2474 9.69727 13.7457 10.3344 13.7457 11.0894C13.7457 12.0173 12.9932 12.7695 12.0655 12.7695C11.1378 12.7695 10.3868 12.0173 10.3868 11.0893C10.3868 10.3788 10.8276 9.77204 11.4503 9.52637L9.38195 5.93012C10.0023 5.70301 10.4455 5.10737 10.4455 4.40809C10.4455 3.51305 9.72006 2.78809 8.82531 2.78809L8.82522 2.78813ZM4.567 18.0444C3.44303 18.2207 3.49544 19.912 4.76331 19.912H5.07531L5.07831 19.9282H18.8727L18.8756 19.9121H19.2331C20.4534 19.9121 20.5399 18.228 19.4352 18.0445H4.56695L4.567 18.0444Z" fill="currentColor"></path>
                        </svg>
                      </div>
                      <div className="pricing-title-wrapper">
                        <div className="font-2-small">{plan.title}</div>
                        <div className="font-1-extra-small nobel">{plan.description}</div>
                      </div>
                      <div className="font-3-normal">{plan.price}</div>
                    </div>
                    <div className="pricing-list-wrapper">
                      {plan.features.map((feature, index) => (
                        <div key={index} className="pricing-list">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 15 15" fill="none" className="pricing-list-icon">
                            <g clipPath="url(#clip0_31_79)">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0 7.5C0 5.51088 0.790176 3.60322 2.1967 2.1967C3.60322 0.790176 5.51088 0 7.5 0C9.48912 0 11.3968 0.790176 12.8033 2.1967C14.2098 3.60322 15 5.51088 15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15C5.51088 15 3.60322 14.2098 2.1967 12.8033C0.790176 11.3968 0 9.48912 0 7.5ZM7.072 10.71L11.39 5.312L10.61 4.688L6.928 9.289L4.32 7.116L3.68 7.884L7.072 10.71Z" fill="currentColor"></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_31_79">
                                <rect width="15" height="15" fill="currentColor"></rect>
                              </clipPath>
                            </defs>
                          </svg>
                          <div className="font-1-extra-small nobel">{feature}</div>
                        </div>
                      ))}
                    </div>
                    <Link to="/contact" className="button w-inline-block">
                      <div className="button-text-wrapper">
                        <div className="button-text">Choose Plan</div>
                      </div>
                      <div className="button-icon-wrapper">
                        <div className="project-arrow-pill">
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-icon">
                            <path d="M4 11V13L16 13V15H18V13H20V11H18V9H16V11H4ZM14 7H16V9H14V7ZM14 7H12V5L14 5V7ZM14 17H16V15H14V17ZM14 17H12V19H14V17Z" fill="currentColor"></path>
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" className="button-icon">
                            <path d="M4 11V13L16 13V15H18V13H20V11H18V9H16V11H4ZM14 7H16V9H14V7ZM14 7H12V5L14 5V7ZM14 17H16V15H14V17ZM14 17H12V19H14V17Z" fill="currentColor"></path>
                          </svg>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="space-10-small"></div>
    </section>
  );
}
