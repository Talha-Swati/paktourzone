import { useState, useMemo } from 'react';
import { useNavbarSetup } from '../hooks';
import SEO from '../components/common/SEO';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { FaQuoteLeft, FaMountain, FaUsers, FaHeart, FaAward, FaGlobeAsia, FaHandshake, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import talhadp from '../assets/talhadp.png';
import hammaddp from '../assets/hammaddp.jpeg';

const About = () => {
  const { navbarProps, isDarkMode } = useNavbarSetup();

  const teamMembers = [
    {
      id: 1,
      name: 'Talha Riaz',
      position: 'Co-Founder',
      avatar: talhadp,
      bio: 'Visionary leader with over 10 years of experience in tourism and hospitality industry. Talha founded PakTourZone with a dream to showcase the unparalleled beauty of Northern Pakistan to the world. His passion for adventure travel and deep understanding of local culture has transformed countless travelers\' experiences. Under his leadership, PakTourZone has become one of Pakistan\'s most trusted tour operators, serving thousands of satisfied clients from around the globe.',
      expertise: ['Strategic Leadership', 'Tourism Development', 'Business Growth', 'International Relations'],
      achievements: [
        'Successfully led 500+ international tours',
        'Established partnerships with 50+ global travel agencies',
        'Pioneer in sustainable tourism practices in Northern Pakistan',
        'Featured in top travel magazines and publications'
      ]
    },
    {
      id: 2,
      name: 'Muhammad Saeed',
      position: 'Co-Founder',
      avatar: 'https://ui-avatars.com/api/?name=Muhammad+Saeed&background=4DBBFF&color=fff&size=300&bold=true',
      bio: 'Operations expert with exceptional organizational skills and a keen eye for detail. Muhammad ensures every tour runs smoothly from start to finish. With extensive experience in logistics and customer service, he has built a reputation for delivering flawless travel experiences. His dedication to quality and safety has earned PakTourZone numerous accolades and repeat customers.',
      expertise: ['Operations Management', 'Logistics & Planning', 'Quality Assurance', 'Team Leadership'],
      achievements: [
        'Managed operations for 800+ successful tours',
        '99.5% customer satisfaction rating',
        'Implemented industry-leading safety protocols',
        'Built a network of 100+ local service providers'
      ]
    },
    {
      id: 3,
      name: 'Hammad Ashraf',
      position: 'Co-Founder',
      avatar: hammaddp,
      bio: 'Creative marketing strategist and digital innovation expert. Hammad has revolutionized how PakTourZone connects with travelers worldwide through cutting-edge digital marketing and engaging storytelling. His background in technology and passion for photography has helped showcase Pakistan\'s beauty to millions across social media platforms.',
      expertise: ['Digital Marketing', 'Brand Strategy', 'Social Media', 'Content Creation'],
      achievements: [
        'Grew social media following to 100K+ engaged travelers',
        'Launched viral marketing campaigns reaching 5M+ people',
        'Developed award-winning digital presence',
        'Created strategic partnerships with travel influencers'
      ]
    }
  ];

  const companyValues = [
    {
      icon: <FaHeart />,
      title: 'Passion for Travel',
      description: 'We live and breathe adventure, sharing our love for Pakistan\'s natural wonders with every traveler.'
    },
    {
      icon: <FaHandshake />,
      title: 'Trust & Transparency',
      description: 'Building lasting relationships through honest communication and reliable service delivery.'
    },
    {
      icon: <FaAward />,
      title: 'Excellence',
      description: 'Committed to exceeding expectations with meticulous planning and premium experiences.'
    },
    {
      icon: <FaGlobeAsia />,
      title: 'Cultural Connection',
      description: 'Bridging cultures by creating authentic connections between travelers and local communities.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Travelers' },
    { number: '50+', label: 'Destinations' },
    { number: '100+', label: 'Tour Packages' }
  ];

  // SEO structured data
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PakTourZone",
    "description": "Leading tour operator in Northern Pakistan, offering adventure tours, cultural experiences, and customized travel packages.",
    "url": "https://paktourzone.com",
    "logo": "https://paktourzone.com/logo.png",
    "foundingDate": "2016",
    "founders": [
      {
        "@type": "Person",
        "name": "Talha Riaz",
        "jobTitle": "Co-Founder"
      },
      {
        "@type": "Person",
        "name": "Muhammad Saeed",
        "jobTitle": "Co-Founder"
      },
      {
        "@type": "Person",
        "name": "Hammad Ashraf",
        "jobTitle": "Co-Founder"
      }
    ]
  }), []);

  return (
    <>
      <SEO
        title="About Us - Meet Our Team | PakTourZone"
        description="Meet the passionate team behind PakTourZone. Founded by Talha Riaz, Muhammad Saeed, and Hammad Ashraf, we're dedicated to showcasing Northern Pakistan's beauty."
        keywords="about PakTourZone, tour company Pakistan, travel team, Talha Riaz, Muhammad Saeed, Hammad Ashraf"
        url="/about"
        structuredData={structuredData}
      />

      <div
        className={`min-h-screen transition-colors duration-500 ${
          isDarkMode ? 'bg-gradient-to-b from-[#0B0C0E] to-[#0F1419] text-[#E0E7EE]' : 'bg-gradient-to-b from-white to-[#F8FAFB] text-[#1F2937]'
        }`}
      >
        <Navbar {...navbarProps} />

        {/* Hero Section */}
        <section
          className={`relative py-20 overflow-hidden ${
            isDarkMode ? 'bg-gradient-to-br from-[#0B0C0E] via-[#0A3A67] to-[#0B0C0E]' : 'bg-gradient-to-br from-white via-[#EBF8FF] to-white'
          }`}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className={`inline-block p-4 rounded-full mb-6 ${isDarkMode ? 'bg-[#22D3EE]/10' : 'bg-blue-50'}`}>
                <FaUsers className={`text-5xl ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`} />
              </div>
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
                  isDarkMode ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF]' : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA]'
                } bg-clip-text text-transparent`}
              >
                About PakTourZone
              </h1>
              <p className={`text-lg md:text-xl mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                Turning travel dreams into unforgettable adventures since 2016
              </p>

              {/* Quote */}
              <div className={`relative p-8 rounded-xl ${isDarkMode ? 'bg-[#141A1F]' : 'bg-white'} max-w-3xl mx-auto`}>
                <FaQuoteLeft className={`absolute top-4 left-4 text-3xl ${isDarkMode ? 'text-[#22D3EE]/20' : 'text-[#3B82F6]/20'}`} />
                <p className={`text-xl italic ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                  "We believe every journey should be more than just a trip—it should be a transformative experience that connects you with nature, culture, and yourself."
                </p>
                <p className={`mt-4 font-semibold ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                  - Core Team, PakTourZone
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className={`py-16 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={`text-center p-6 rounded-xl ${
                    isDarkMode ? 'bg-[#141A1F]' : 'bg-white'
                  }`}
                >
                  <div className={`text-4xl font-bold mb-2 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm ${isDarkMode ? 'text-[#8B949E]' : 'text-[#6B7280]'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className={`text-3xl md:text-4xl font-bold mb-8 text-center ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                Our Story
              </h2>
              <div className={`space-y-6 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'} text-lg leading-relaxed`}>
                <p>
                  PakTourZone was born from a simple yet powerful vision: to share the breathtaking beauty of Northern Pakistan with the world. What started as a passion project by three friends who loved adventure and exploration has grown into one of Pakistan's most trusted tour operators.
                </p>
                <p>
                  In 2016, Talha Riaz, Muhammad Saeed, and Hammad Ashraf came together with a shared dream. Talha, with his entrepreneurial spirit and deep love for mountain landscapes, saw the untapped potential of Pakistan's northern regions. Muhammad brought his expertise in operations and unwavering commitment to quality. Hammad contributed his creative vision and digital expertise to tell Pakistan's story to the world.
                </p>
                <p>
                  Today, PakTourZone is more than just a tour company—we're a community of passionate travelers, experienced guides, and local partners who work together to create extraordinary experiences. We've helped thousands of travelers from around the globe discover the magic of places like Hunza Valley, Skardu, Fairy Meadows, and the legendary Karakoram Highway.
                </p>
                <p>
                  Our commitment goes beyond tourism. We believe in responsible travel that benefits local communities, preserves natural beauty, and creates meaningful cultural exchanges. Every tour we organize contributes to the economic development of the regions we visit, supporting local businesses and families.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={`py-16 ${isDarkMode ? 'bg-[#0F1419]' : 'bg-gray-50'}`}>
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
              Meet Our Leadership Team
            </h2>

            <div className="space-y-12">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className={`rounded-2xl overflow-hidden ${
                    isDarkMode ? 'bg-[#141A1F]' : 'bg-white'
                  } shadow-xl`}
                >
                  <div className="md:flex">
                    {/* Photo */}
                    <div className="md:w-1/3 overflow-hidden group">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-full h-full object-cover min-h-[300px] transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="md:w-2/3 p-8">
                      <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                        {member.name}
                      </h3>
                      <p className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                        {member.position}
                      </p>

                      <p className={`mb-6 leading-relaxed ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                        {member.bio}
                      </p>

                      {/* Expertise */}
                      <div className="mb-6">
                        <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                          Areas of Expertise
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1 rounded-full text-sm ${
                                isDarkMode
                                  ? 'bg-[#22D3EE]/10 text-[#22D3EE]'
                                  : 'bg-blue-50 text-[#3B82F6]'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className={`font-semibold mb-3 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                          Key Achievements
                        </h4>
                        <ul className={`space-y-2 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                          {member.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className={`mt-1 ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>✓</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className={`text-3xl md:text-4xl font-bold mb-12 text-center ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyValues.map((value, idx) => (
                <div
                  key={idx}
                  className={`p-6 rounded-xl text-center transition-all duration-300 hover:shadow-xl ${
                    isDarkMode
                      ? 'bg-[#141A1F] hover:bg-[#1A2129]'
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    isDarkMode ? 'bg-[#22D3EE]/10' : 'bg-blue-50'
                  }`}>
                    <div className={`text-3xl ${isDarkMode ? 'text-[#22D3EE]' : 'text-[#3B82F6]'}`}>
                      {value.icon}
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
                    {value.title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section
          className={`py-16 ${
            isDarkMode ? 'bg-gradient-to-r from-[#0F1419] to-[#141A1F]' : 'bg-gradient-to-r from-gray-50 to-blue-50'
          }`}
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className={`text-3xl font-bold mb-4 ${isDarkMode ? 'text-[#E0E7EE]' : 'text-[#1F2937]'}`}>
              Ready to Start Your Adventure?
            </h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-[#C4CCD4]' : 'text-[#4A5568]'}`}>
              Join thousands of satisfied travelers and explore Northern Pakistan with us
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/destinations"
                className={`inline-block px-8 py-4 rounded-lg font-bold transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gradient-to-r from-[#22D3EE] to-[#4DBBFF] text-[#0B0C0E] hover:shadow-lg hover:shadow-[#22D3EE]/50'
                    : 'bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white hover:shadow-lg hover:shadow-blue-500/50'
                } transform hover:scale-105`}
              >
                Explore Destinations
              </a>
              <a
                href="/contact"
                className={`inline-block px-8 py-4 rounded-lg font-bold transition-all duration-300 border-2 ${
                  isDarkMode
                    ? 'border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#0B0C0E]'
                    : 'border-[#3B82F6] text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white'
                }`}
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
};

export default About;
