import { ReactTyped as Typed } from 'react-typed';
import "./HomePage.scss";
import { Link } from 'react-router-dom';
import NavBar from '../Navbar/NavBar';

function HomePage() {
    return (
        <div>
            <NavBar />
            <div className='HomePage'>
                <div className='main'>
                    <div className='content'>
                        <h2 className='typed'>
                            <Typed
                                strings={['Welcome to BECA Scholarships. ', 'Your gateway to educational opportunities.']}
                                typeSpeed={40}
                                backSpeed={16}
                                loop
                            />
                        </h2>
                        <p className='n'>
                            We specialize in linking students with valuable scholarships and educational resources. Our mission is to simplify the scholarship search process, ensuring seamless connections that benefit both students and educational institutions alike. Whether you're seeking scholarships for your next academic venture or looking to support talented students, BECA is committed to facilitating success and fostering growth through educational opportunities.
                        </p>
                    </div>
                    <div className='buttons'>
                        
                        <div>
                            <button>I'm an Institution</button>
                            <p>Partner with us to provide scholarships and support to a diverse pool of qualified students.</p>
                        </div>
                        <div>
                            <Link to="/registerseeker"><button>I'm a Student</button></Link>
                            <p>Start your scholarship search with us. Browse through our extensive listings to find the perfect match for your academic goals.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='service'>Our Services</h1>
                <div className='services'>
                    <div>
                        <h3>Comprehensive Scholarship Platform</h3>
                        <p>Welcome to BECA Scholarships, your comprehensive solution for streamlined scholarship management. With BECA, manage your entire scholarship application lifecycle seamlessly, from sourcing to awarding, all within one integrated system.</p>
                    </div>
                    <div>
                        <h3>Scholarship Management</h3>
                        <p>Efficiently manage your scholarship processes with BECA's integrated software. Enjoy the convenience of a unified platform where you can handle everything from application evaluations to award disbursements, directly linked with your institution's requirements.</p>
                    </div>
                    <div>
                        <h3>Application Pipelines</h3>
                        <p>Tailor your application workflows for each scholarship with flexibility and ease. BECA understands that every scholarship is unique, so customize your processes to suit specific requirements. Stay on track and ensure efficient applicant evaluation without unnecessary delays or miscommunications.</p>
                    </div>
                    <div>
                        <h3>Approval Processes</h3>
                        <p>Simplify your scholarship planning with streamlined approval workflows. BECA enables you to fast-track approval processes by involving relevant stakeholders across different departments. Cut through bureaucratic delays and get approvals swiftly.</p>
                    </div>
                </div>
            </div>
            <div className='company-info'>
                <h2 id="about">About BECA</h2>
                <p>
                    BECA is dedicated to revolutionizing the scholarship and educational resource industry by providing innovative solutions that connect talented students with rewarding academic opportunities. Our mission is to streamline the scholarship process and foster growth through seamless connections between students and institutions.
                </p>

                <h2 id="contact">Contact Us</h2>
                <p>
                    Sales: +91 123-456-7890<br />
                    Email: info@beca.com<br />
                    Address: Sector 19, Gurugram, Haryana, India<br />
                </p>

                <h2>Connect With Us</h2>
                <div className='social-links'>
                    <a href='#'>Facebook</a>
                    <a href='#'>Twitter</a>
                    <a href='#'>LinkedIn</a>
                    <a href='#'>Instagram</a>
                </div>
            </div>

            <div className='footer'>
                <p>2024 BECA Scholarships. All rights reserved.</p>
                <div className='legal-links'>
                    <a href='#'>Terms of Service</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Security Policy</a>
                    <a href='#'>GDPR Compliance</a>
                </div>
            </div>
        </div>
    )
}
export default HomePage;
