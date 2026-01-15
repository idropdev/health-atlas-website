import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';

const PrivacyPolicy = () => {
    const lastUpdated = "January 14, 2026";

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#f0f7ff] to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                            Last updated {lastUpdated}
                        </p>
                    </div>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <Section className="bg-white py-16">
                <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
                    {/* Introduction */}
                    <div className="mb-12">
                        <p className="text-gray-600 leading-relaxed">
                            This Privacy Notice for <strong>HealthAtlas</strong> ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:
                        </p>
                        <ul className="list-disc pl-6 mt-4 text-gray-600 space-y-2">
                            <li>Visit our website at <a href="https://www.healthatlas.health" className="text-primary hover:underline">www.healthatlas.health</a> or any website of ours that links to this Privacy Notice</li>
                            <li>Use our health data aggregation and organization platform</li>
                            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
                        </ul>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:team@dropdev.co" className="text-primary hover:underline">team@dropdev.co</a>.
                        </p>
                    </div>

                    {/* Summary of Key Points */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Summary of Key Points</h2>
                        <p className="text-gray-600 mb-6 italic">
                            This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by reviewing the full sections below.
                        </p>

                        <div className="space-y-4 text-gray-600">
                            <p><strong className="text-gray-800">What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.</p>

                            <p><strong className="text-gray-800">Do we process any sensitive personal information?</strong> We may process health-related information that you voluntarily provide to us for the purpose of organizing and presenting your health records. We handle all health information in accordance with HIPAA requirements.</p>

                            <p><strong className="text-gray-800">Do we collect any information from third parties?</strong> With your authorization, we may collect health records from healthcare providers, laboratories, pharmacies, and other medical facilities to aggregate your health history.</p>

                            <p><strong className="text-gray-800">How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process your information only when we have a valid legal reason to do so.</p>

                            <p><strong className="text-gray-800">How do we keep your information safe?</strong> We have robust organizational and technical processes and procedures in place to protect your personal and health information, including encryption, access controls, and HIPAA-compliant security measures.</p>

                            <p><strong className="text-gray-800">What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.</p>
                        </div>
                    </div>

                    {/* Table of Contents */}
                    <div className="mb-12 bg-[#f8fafc] rounded-xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Table of Contents</h2>
                        <ol className="list-decimal pl-6 space-y-2 text-primary">
                            <li><a href="#section-1" className="hover:underline">What Information Do We Collect?</a></li>
                            <li><a href="#section-2" className="hover:underline">How Do We Process Your Information?</a></li>
                            <li><a href="#section-3" className="hover:underline">When and With Whom Do We Share Your Personal Information?</a></li>
                            <li><a href="#section-4" className="hover:underline">Do We Use Cookies and Other Tracking Technologies?</a></li>
                            <li><a href="#section-5" className="hover:underline">Do We Offer Artificial Intelligence-Based Products?</a></li>
                            <li><a href="#section-6" className="hover:underline">How Long Do We Keep Your Information?</a></li>
                            <li><a href="#section-7" className="hover:underline">How Do We Keep Your Information Safe?</a></li>
                            <li><a href="#section-8" className="hover:underline">Do We Collect Information From Minors?</a></li>
                            <li><a href="#section-9" className="hover:underline">What Are Your Privacy Rights?</a></li>
                            <li><a href="#section-10" className="hover:underline">Controls for Do-Not-Track Features</a></li>
                            <li><a href="#section-11" className="hover:underline">Do United States Residents Have Specific Privacy Rights?</a></li>
                            <li><a href="#section-12" className="hover:underline">Do We Make Updates to This Notice?</a></li>
                            <li><a href="#section-13" className="hover:underline">How Can You Contact Us About This Notice?</a></li>
                            <li><a href="#section-14" className="hover:underline">How Can You Review, Update, or Delete the Data We Collect From You?</a></li>
                        </ol>
                    </div>

                    {/* Section 1 */}
                    <div id="section-1" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. What Information Do We Collect?</h2>

                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal information you disclose to us</h3>
                        <p className="text-gray-600 mb-4 italic">In Short: We collect personal information that you provide to us.</p>

                        <p className="text-gray-600 mb-4">
                            We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                        </p>

                        <p className="text-gray-600 mb-2"><strong>Personal Information Provided by You.</strong> The personal information we collect may include:</p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-1">
                            <li>Names</li>
                            <li>Phone numbers</li>
                            <li>Email addresses</li>
                            <li>Usernames</li>
                            <li>Date of birth</li>
                        </ul>

                        <p className="text-gray-600 mb-2"><strong>Health Information.</strong> With your explicit authorization, we may collect and process:</p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-1">
                            <li>Medical records from healthcare providers</li>
                            <li>Laboratory and diagnostic test results</li>
                            <li>Prescription and medication history</li>
                            <li>Immunization records</li>
                            <li>Other health-related documents you choose to share</li>
                        </ul>

                        <p className="text-gray-600 mb-4">
                            All personal and health information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such information.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Information automatically collected</h3>
                        <p className="text-gray-600 mb-4 italic">In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>

                        <p className="text-gray-600 mb-4">
                            We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information.
                        </p>

                        <p className="text-gray-600 mb-2">The information we collect includes:</p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li><strong>Log and Usage Data.</strong> Service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services.</li>
                            <li><strong>Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise based on your device settings.</li>
                        </ul>
                    </div>

                    {/* Section 2 */}
                    <div id="section-2" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How Do We Process Your Information?</h2>
                        <p className="text-gray-600 mb-4 italic">In Short: We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</p>

                        <p className="text-gray-600 mb-4">We process your personal information for a variety of reasons, including:</p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li><strong>To aggregate and organize your health records</strong> from multiple sources into a unified, accessible format.</li>
                            <li><strong>To translate complex medical information</strong> into plain language that you can understand.</li>
                            <li><strong>To share your health information</strong> with healthcare providers you authorize.</li>
                            <li><strong>To send you service-related communications</strong> about your account and platform updates.</li>
                            <li><strong>To protect our Services</strong> and maintain security.</li>
                            <li><strong>To comply with legal obligations</strong> including HIPAA requirements.</li>
                        </ul>
                    </div>

                    {/* Section 3 */}
                    <div id="section-3" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. When and With Whom Do We Share Your Personal Information?</h2>
                        <p className="text-gray-600 mb-4 italic">In Short: We may share information in specific situations described in this section and/or with specific parties you authorize.</p>

                        <p className="text-gray-600 mb-4">We may need to share your personal information in the following situations:</p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li><strong>With Healthcare Providers.</strong> When you authorize us to share your health records with specific clinicians or healthcare organizations.</li>
                            <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                            <li><strong>With Service Providers.</strong> We may share your information with third-party vendors and service providers who perform services for us, subject to appropriate confidentiality and security obligations.</li>
                        </ul>
                    </div>

                    {/* Section 4 */}
                    <div id="section-4" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Do We Use Cookies and Other Tracking Technologies?</h2>
                        <p className="text-gray-600 mb-4 italic">In Short: We may use cookies and other tracking technologies to collect and store your information.</p>

                        <p className="text-gray-600 mb-4">
                            We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.
                        </p>

                        <p className="text-gray-600">
                            Most web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services.
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div id="section-5" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Do We Offer Artificial Intelligence-Based Products?</h2>
                        <p className="text-gray-600 mb-4 italic">In Short: We offer features powered by artificial intelligence to help translate and organize your health information.</p>

                        <p className="text-gray-600 mb-4">
                            As part of our Services, we offer features powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Features"). These features are designed to:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li>Translate complex medical terminology into plain language</li>
                            <li>Organize and structure health records from various sources</li>
                            <li>Identify and highlight important health information</li>
                        </ul>

                        <p className="text-gray-600 mb-4">
                            <strong>Important:</strong> Our AI Features are designed to help you understand your health information. They do not provide medical advice, diagnoses, or treatment recommendations. Always consult with qualified healthcare professionals for medical decisions.
                        </p>

                        <p className="text-gray-600">
                            All personal information processed using our AI Features is handled in line with this Privacy Notice and applicable data protection laws, including HIPAA.
                        </p>
                    </div>

                    {/* Section 6 */}
                    <div id="section-6" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. How Long Do We Keep Your Information?</h2>
                        <p className="text-gray-600 mb-4 italic">In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>

                        <p className="text-gray-600 mb-4">
                            We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, HIPAA, or other legal requirements).
                        </p>

                        <p className="text-gray-600">
                            When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible, then we will securely store your personal information and isolate it from any further processing until deletion is possible.
                        </p>
                    </div>

                    {/* Section 7 */}
                    <div id="section-7" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. How Do We Keep Your Information Safe?</h2>
                        <p className="text-gray-600 mb-4 italic">In Short: We aim to protect your personal and health information through a system of organizational and technical security measures.</p>

                        <p className="text-gray-600 mb-4">
                            We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal and health information we process. These measures include:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li>Encryption of data in transit and at rest</li>
                            <li>Role-based access controls</li>
                            <li>Regular security audits and assessments</li>
                            <li>HIPAA-compliant infrastructure and processes</li>
                            <li>Employee training on privacy and security</li>
                        </ul>

                        <p className="text-gray-600">
                            However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure. You should only access the Services within a secure environment.
                        </p>
                    </div>

                    {/* Section 8 */}
                    <div id="section-8" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Do We Collect Information From Minors?</h2>
                        <p className="text-gray-600 mb-4 italic">In Short: We do not knowingly collect data from or market to children under 18 years of age without parental consent.</p>

                        <p className="text-gray-600 mb-4">
                            We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services.
                        </p>

                        <p className="text-gray-600">
                            If we learn that personal information from users less than 18 years of age has been collected without proper parental consent, we will take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:team@dropdev.co" className="text-primary hover:underline">team@dropdev.co</a>.
                        </p>
                    </div>

                    {/* Section 9 */}
                    <div id="section-9" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. What Are Your Privacy Rights?</h2>
                        <p className="text-gray-600 mb-4 italic">In Short: You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>

                        <p className="text-gray-600 mb-4">
                            <strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent by contacting us using the contact details provided below.
                        </p>

                        <p className="text-gray-600 mb-4">
                            <strong>Opting out of marketing communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us. You will then be removed from marketing lists. However, we may still communicate with you for service-related purposes.
                        </p>

                        <p className="text-gray-600">
                            If you have questions or comments about your privacy rights, you may email us at <a href="mailto:team@dropdev.co" className="text-primary hover:underline">team@dropdev.co</a>.
                        </p>
                    </div>

                    {/* Section 10 */}
                    <div id="section-10" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Controls for Do-Not-Track Features</h2>
                        <p className="text-gray-600 mb-4">
                            Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
                        </p>
                    </div>

                    {/* Section 11 */}
                    <div id="section-11" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Do United States Residents Have Specific Privacy Rights?</h2>
                        <p className="text-gray-600 mb-4 italic">In Short: If you are a resident of certain US states, you may have additional rights regarding your personal information.</p>

                        <p className="text-gray-600 mb-4">
                            If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-8">Categories of Personal Information We Collect</h3>
                        <p className="text-gray-600 mb-4">
                            The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect all personal information we may collect from you. For a comprehensive inventory of all personal information we process, please refer to the section "WHAT INFORMATION DO WE COLLECT?"
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Category</th>
                                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900 border-b">Examples</th>
                                        <th className="px-4 py-3 text-center text-sm font-semibold text-gray-900 border-b w-24">Collected</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr className="bg-white">
                                        <td className="px-4 py-3 text-sm text-gray-700 align-top font-medium">A. Identifiers</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 text-center align-middle">YES</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-3 text-sm text-gray-700 align-top font-medium">B. Personal information as defined in the California Customer Records statute</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">Name, contact information, education, employment, employment history, and financial information</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 text-center align-middle">NO</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-3 text-sm text-gray-700 align-top font-medium">C. Protected classification characteristics under state or federal law</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 text-center align-middle">NO</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-3 text-sm text-gray-700 align-top font-medium">D. Commercial information</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">Transaction information, purchase history, financial details, and payment information</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 text-center align-middle">NO</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-3 text-sm text-gray-700 align-top font-medium">E. Biometric information</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">Fingerprints and voiceprints</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 text-center align-middle">NO</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-3 text-sm text-gray-700 align-top font-medium">F. Internet or other similar network activity</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 text-center align-middle">YES</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-3 text-sm text-gray-700 align-top font-medium">G. Geolocation data</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">Device location</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 text-center align-middle">NO</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-3 text-sm text-gray-700 align-top font-medium">H. Audio, electronic, sensory, or similar information</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">Images and audio, video or call recordings created in connection with our business activities</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 text-center align-middle">NO</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-3 text-sm text-gray-700 align-top font-medium">I. Professional or employment-related information</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 text-center align-middle">NO</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-3 text-sm text-gray-700 align-top font-medium">J. Education Information</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">Student records and directory information</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 text-center align-middle">NO</td>
                                    </tr>
                                    <tr className="bg-white">
                                        <td className="px-4 py-3 text-sm text-gray-700 align-top font-medium">K. Inferences drawn from collected personal information</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 text-center align-middle">NO</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="px-4 py-3 text-sm text-gray-700 align-top font-medium">L. Sensitive personal Information</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">Health information (with your authorization)</td>
                                        <td className="px-4 py-3 text-sm text-gray-600 text-center align-middle">YES</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-gray-600 mb-4">
                            We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:
                        </p>
                        <ul className="list-disc pl-6 mb-6 text-gray-600 space-y-2">
                            <li>Receiving help through our customer support channels;</li>
                            <li>Participation in customer surveys or contests; and</li>
                            <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-8">Your Rights</h3>
                        <p className="text-gray-600 mb-4">
                            You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li>Right to know whether or not we are processing your personal data</li>
                            <li>Right to access your personal data</li>
                            <li>Right to correct inaccuracies in your personal data</li>
                            <li>Right to request the deletion of your personal data</li>
                            <li>Right to obtain a copy of the personal data you previously shared with us</li>
                            <li>Right to non-discrimination for exercising your rights</li>
                            <li>Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling</li>
                        </ul>

                        <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-8">How to Exercise Your Rights</h3>
                        <p className="text-gray-600">
                            To exercise these rights, you can contact us by emailing <a href="mailto:team@dropdev.co" className="text-primary hover:underline">team@dropdev.co</a>. Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.
                        </p>
                    </div>

                    {/* Section 12 */}
                    <div id="section-12" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Do We Make Updates to This Notice?</h2>
                        <p className="text-gray-600 mb-4 italic">In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>

                        <p className="text-gray-600">
                            We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Last updated" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.
                        </p>
                    </div>

                    {/* Section 13 */}
                    <div id="section-13" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">13. How Can You Contact Us About This Notice?</h2>
                        <p className="text-gray-600 mb-4">
                            If you have questions or comments about this notice, you may email us at <a href="mailto:team@dropdev.co" className="text-primary hover:underline">team@dropdev.co</a> or contact us by post at:
                        </p>
                        <div className="bg-[#f8fafc] rounded-xl p-6 text-gray-700">
                            <p className="font-semibold">HealthAtlas</p>
                            <p>United States</p>
                        </div>
                    </div>

                    {/* Section 14 */}
                    <div id="section-14" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">14. How Can You Review, Update, or Delete the Data We Collect From You?</h2>
                        <p className="text-gray-600">
                            Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. To request to review, update, or delete your personal information, please contact us at <a href="mailto:team@dropdev.co" className="text-primary hover:underline">team@dropdev.co</a>.
                        </p>
                    </div>
                </div>
            </Section>
        </Layout>
    );
};

export default PrivacyPolicy;
