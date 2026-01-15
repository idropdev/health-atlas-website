import React from 'react';
import Layout from '../components/Layout';
import Section from '../components/Section';

const TermsOfService = () => {
    const lastUpdated = "January 14, 2026";

    return (
        <Layout>
            {/* Hero Section */}
            <section className="relative pt-24 pb-16 overflow-hidden bg-gradient-to-b from-[#f0f7ff] to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 tracking-tight">
                            Terms and Conditions
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                            Last updated {lastUpdated}
                        </p>
                    </div>
                </div>
            </section>

            {/* Terms Content */}
            <Section className="bg-white py-16">
                <div className="max-w-4xl mx-auto prose prose-lg prose-gray">
                    {/* Agreement to Terms */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">AGREEMENT TO OUR LEGAL TERMS</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We are <strong>HealthAtlas</strong> ("Company," "we," "us," "our"), a company registered in the United States.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            We operate the website <a href="https://www.healthatlas.health" className="text-primary hover:underline">healthatlas.health</a> (the "Site"), as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            HealthAtlas is a health data aggregation and organization platform that helps patients collect, organize, and understand their medical records while enabling authorized healthcare providers to access comprehensive patient health histories.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            You can contact us by email at <a href="mailto:team@dropdev.co" className="text-primary hover:underline">team@dropdev.co</a>.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and HealthAtlas, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. <strong>IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</strong>
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4">
                            The Services are intended for users who are at least 18 years old. Persons under the age of 18 are not permitted to use or register for the Services.
                        </p>
                        <p className="text-gray-600 leading-relaxed mt-4 italic">
                            We recommend that you print a copy of these Legal Terms for your records.
                        </p>
                    </div>

                    {/* Table of Contents */}
                    <div className="mb-12 bg-[#f8fafc] rounded-xl p-6">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">TABLE OF CONTENTS</h2>
                        <ol className="list-decimal pl-6 space-y-2 text-primary">
                            <li><a href="#tos-1" className="hover:underline">Our Services</a></li>
                            <li><a href="#tos-2" className="hover:underline">Intellectual Property Rights</a></li>
                            <li><a href="#tos-3" className="hover:underline">User Representations</a></li>
                            <li><a href="#tos-4" className="hover:underline">User Registration</a></li>
                            <li><a href="#tos-5" className="hover:underline">Purchases and Payment</a></li>
                            <li><a href="#tos-6" className="hover:underline">Subscriptions</a></li>
                            <li><a href="#tos-7" className="hover:underline">Prohibited Activities</a></li>
                            <li><a href="#tos-8" className="hover:underline">User Generated Contributions</a></li>
                            <li><a href="#tos-9" className="hover:underline">Contribution License</a></li>
                            <li><a href="#tos-10" className="hover:underline">Third-Party Websites and Content</a></li>
                            <li><a href="#tos-11" className="hover:underline">Services Management</a></li>
                            <li><a href="#tos-12" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#tos-13" className="hover:underline">Term and Termination</a></li>
                            <li><a href="#tos-14" className="hover:underline">Modifications and Interruptions</a></li>
                            <li><a href="#tos-15" className="hover:underline">Governing Law</a></li>
                            <li><a href="#tos-16" className="hover:underline">Dispute Resolution</a></li>
                            <li><a href="#tos-17" className="hover:underline">Corrections</a></li>
                            <li><a href="#tos-18" className="hover:underline">Disclaimer</a></li>
                            <li><a href="#tos-19" className="hover:underline">Limitations of Liability</a></li>
                            <li><a href="#tos-20" className="hover:underline">Indemnification</a></li>
                            <li><a href="#tos-21" className="hover:underline">User Data</a></li>
                            <li><a href="#tos-22" className="hover:underline">Electronic Communications, Transactions, and Signatures</a></li>
                            <li><a href="#tos-23" className="hover:underline">California Users and Residents</a></li>
                            <li><a href="#tos-24" className="hover:underline">Miscellaneous</a></li>
                            <li><a href="#tos-25" className="hover:underline">Contact Us</a></li>
                        </ol>
                    </div>

                    {/* Section 1 */}
                    <div id="tos-1" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. OUR SERVICES</h2>
                        <p className="text-gray-600 mb-4">
                            The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country.
                        </p>
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl mb-4">
                            <h3 className="text-lg font-semibold text-amber-800 mb-2">⚠️ Important Healthcare Disclaimer</h3>
                            <p className="text-amber-700">
                                <strong>HealthAtlas does not provide medical advice, diagnosis, or treatment.</strong> The Services are designed to help you organize and understand your health records, but should not be used as a substitute for professional medical advice. Always consult with qualified healthcare professionals for medical decisions.
                            </p>
                        </div>
                        <p className="text-gray-600">
                            While HealthAtlas is designed to work with health information and implements HIPAA-compliant security measures, you are responsible for ensuring your use of the Services complies with all applicable laws and regulations in your jurisdiction.
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div id="tos-2" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. INTELLECTUAL PROPERTY RIGHTS</h2>

                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Our intellectual property</h3>
                        <p className="text-gray-600 mb-4">
                            We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").
                        </p>
                        <p className="text-gray-600 mb-4">
                            Our Content and Marks are protected by copyright and trademark laws and treaties in the United States and around the world. The Content and Marks are provided in or through the Services "AS IS" for your personal use only.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Your use of our Services</h3>
                        <p className="text-gray-600 mb-4">
                            Subject to your compliance with these Legal Terms, we grant you a non-exclusive, non-transferable, revocable license to:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li>Access the Services; and</li>
                            <li>Download or print a copy of any portion of the Content to which you have properly gained access,</li>
                        </ul>
                        <p className="text-gray-600 mb-4">
                            solely for your personal, non-commercial use or internal business purpose related to managing your health information.
                        </p>
                        <p className="text-gray-600">
                            We reserve all rights not expressly granted to you in and to the Services, Content, and Marks. Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.
                        </p>
                    </div>

                    {/* Section 3 */}
                    <div id="tos-3" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. USER REPRESENTATIONS</h2>
                        <p className="text-gray-600 mb-4">
                            By using the Services, you represent and warrant that:
                        </p>
                        <ol className="list-decimal pl-6 mb-4 text-gray-600 space-y-2">
                            <li>All registration information you submit will be true, accurate, current, and complete;</li>
                            <li>You will maintain the accuracy of such information and promptly update such registration information as necessary;</li>
                            <li>You have the legal capacity and you agree to comply with these Legal Terms;</li>
                            <li>You are not a minor in the jurisdiction in which you reside;</li>
                            <li>You will not access the Services through automated or non-human means, whether through a bot, script or otherwise;</li>
                            <li>You will not use the Services for any illegal or unauthorized purpose;</li>
                            <li>Your use of the Services will not violate any applicable law or regulation; and</li>
                            <li>Any health information you provide is accurate and relates to you or individuals for whom you have legal authority to share such information.</li>
                        </ol>
                        <p className="text-gray-600">
                            If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services.
                        </p>
                    </div>

                    {/* Section 4 */}
                    <div id="tos-4" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. USER REGISTRATION</h2>
                        <p className="text-gray-600 mb-4">
                            You may be required to register to use the Services. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.
                        </p>
                        <p className="text-gray-600">
                            Given the sensitive nature of health information, you are responsible for maintaining the security of your account credentials and for ensuring that only authorized individuals access your account.
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div id="tos-5" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. PURCHASES AND PAYMENT</h2>
                        <p className="text-gray-600 mb-4">We accept the following forms of payment:</p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-1">
                            <li>Visa</li>
                            <li>Mastercard</li>
                            <li>American Express</li>
                            <li>PayPal</li>
                        </ul>
                        <p className="text-gray-600 mb-4">
                            You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in US dollars.
                        </p>
                        <p className="text-gray-600">
                            We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order.
                        </p>
                    </div>

                    {/* Section 6 */}
                    <div id="tos-6" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. SUBSCRIPTIONS</h2>

                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Billing and Renewal</h3>
                        <p className="text-gray-600 mb-4">
                            Your subscription will continue and automatically renew unless canceled. You consent to our charging your payment method on a recurring basis without requiring your prior approval for each recurring charge, until such time as you cancel the applicable order.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Cancellation</h3>
                        <p className="text-gray-600 mb-4">
                            All purchases are non-refundable. You can cancel your subscription at any time by logging into your account or contacting us. Your cancellation will take effect at the end of the current paid term.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Fee Changes</h3>
                        <p className="text-gray-600">
                            We may, from time to time, make changes to the subscription fee and will communicate any price changes to you in accordance with applicable law.
                        </p>
                    </div>

                    {/* Section 7 */}
                    <div id="tos-7" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. PROHIBITED ACTIVITIES</h2>
                        <p className="text-gray-600 mb-4">
                            You may not access or use the Services for any purpose other than that for which we make the Services available. As a user of the Services, you agree not to:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li>Systematically retrieve data or other content from the Services to create or compile a collection, database, or directory without written permission from us.</li>
                            <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account or health information.</li>
                            <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
                            <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
                            <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
                            <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
                            <li>Use the Services in a manner inconsistent with any applicable laws or regulations, including HIPAA.</li>
                            <li>Engage in unauthorized framing of or linking to the Services.</li>
                            <li>Upload or transmit viruses, Trojan horses, or other material that interferes with the Services.</li>
                            <li>Engage in any automated use of the system, such as using scripts to send comments or messages.</li>
                            <li>Attempt to impersonate another user or person or use the username of another user.</li>
                            <li>Upload or transmit any material that acts as a passive or active information collection mechanism.</li>
                            <li>Interfere with, disrupt, or create an undue burden on the Services.</li>
                            <li>Attempt to bypass any measures of the Services designed to prevent or restrict access.</li>
                            <li>Copy or adapt the Services' software.</li>
                            <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising the Services.</li>
                            <li>Access or upload health information belonging to others without proper authorization.</li>
                            <li>Use the Services to store or transmit health information in violation of HIPAA or other applicable regulations.</li>
                        </ul>
                    </div>

                    {/* Section 8 */}
                    <div id="tos-8" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. USER GENERATED CONTRIBUTIONS</h2>
                        <p className="text-gray-600 mb-4">
                            The Services may provide you with the opportunity to create, submit, post, display, transmit, or broadcast content and materials, including but not limited to health documents, notes, comments, or other material (collectively, "Contributions").
                        </p>
                        <p className="text-gray-600 mb-4">
                            When you create or make available any Contributions, you represent and warrant that:
                        </p>
                        <ul className="list-disc pl-6 mb-4 text-gray-600 space-y-2">
                            <li>Your Contributions do not infringe the proprietary rights of any third party.</li>
                            <li>You are the creator and owner of or have the necessary rights and permissions to share your Contributions.</li>
                            <li>Your Contributions are not false, inaccurate, or misleading.</li>
                            <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
                            <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
                        </ul>
                    </div>

                    {/* Section 9 */}
                    <div id="tos-9" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. CONTRIBUTION LICENSE</h2>
                        <p className="text-gray-600 mb-4">
                            You and the Services agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).
                        </p>
                        <p className="text-gray-600 mb-4">
                            By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.
                        </p>
                        <p className="text-gray-600">
                            We do not assert any ownership over your Contributions, including your health records and personal health information. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions.
                        </p>
                    </div>

                    {/* Section 10 */}
                    <div id="tos-10" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">10. THIRD-PARTY WEBSITES AND CONTENT</h2>
                        <p className="text-gray-600 mb-4">
                            The Services may contain links to other websites ("Third-Party Websites") as well as articles, photographs, text, graphics, pictures, designs, information, applications, software, and other content belonging to or originating from third parties ("Third-Party Content").
                        </p>
                        <p className="text-gray-600 mb-4">
                            Such Third-Party Websites and Third-Party Content are not investigated, monitored, or checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party Websites accessed through the Services or any Third-Party Content.
                        </p>
                        <p className="text-gray-600">
                            If you decide to leave the Services and access Third-Party Websites or to use or install any Third-Party Content, you do so at your own risk. You should review the applicable terms and policies, including privacy and data gathering practices, of any website to which you navigate from the Services.
                        </p>
                    </div>

                    {/* Section 11 */}
                    <div id="tos-11" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">11. SERVICES MANAGEMENT</h2>
                        <p className="text-gray-600">
                            We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
                        </p>
                    </div>

                    {/* Section 12 */}
                    <div id="tos-12" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">12. PRIVACY POLICY</h2>
                        <p className="text-gray-600 mb-4">
                            We care about data privacy and security. Please review our Privacy Policy at <a href="/privacy" className="text-primary hover:underline">healthatlas.health/privacy</a>. By using the Services, you agree to be bound by our Privacy Policy, which is incorporated into these Legal Terms.
                        </p>
                        <p className="text-gray-600">
                            Please be advised the Services are hosted in the United States. If you access the Services from any other region of the world with laws governing personal data collection, use, or disclosure that differ from applicable laws in the United States, then through your continued use of the Services, you are transferring your data to the United States, and you expressly consent to have your data transferred to and processed in the United States.
                        </p>
                    </div>

                    {/* Section 13 */}
                    <div id="tos-13" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">13. TERM AND TERMINATION</h2>
                        <p className="text-gray-600 mb-4">
                            These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION.
                        </p>
                        <p className="text-gray-600 mb-4">
                            We may terminate your use or participation in the Services or delete your account and any content or information that you posted at any time, without warning, in our sole discretion.
                        </p>
                        <p className="text-gray-600">
                            If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action.
                        </p>
                    </div>

                    {/* Section 14 */}
                    <div id="tos-14" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">14. MODIFICATIONS AND INTERRUPTIONS</h2>
                        <p className="text-gray-600 mb-4">
                            We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.
                        </p>
                        <p className="text-gray-600">
                            We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services.
                        </p>
                    </div>

                    {/* Section 15 */}
                    <div id="tos-15" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">15. GOVERNING LAW</h2>
                        <p className="text-gray-600">
                            These Legal Terms and your use of the Services are governed by and construed in accordance with the laws of the State of Texas applicable to agreements made and to be entirely performed within the State of Texas, without regard to its conflict of law principles.
                        </p>
                    </div>

                    {/* Section 16 */}
                    <div id="tos-16" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">16. DISPUTE RESOLUTION</h2>

                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Informal Negotiations</h3>
                        <p className="text-gray-600 mb-4">
                            To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a "Dispute"), the Parties agree to first attempt to negotiate any Dispute informally for at least ninety (90) days before initiating arbitration. Such informal negotiations commence upon written notice from one Party to the other Party.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Binding Arbitration</h3>
                        <p className="text-gray-600 mb-4">
                            If the Parties are unable to resolve a Dispute through informal negotiations, the Dispute will be finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT WITHOUT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL. The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association ("AAA").
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Restrictions</h3>
                        <p className="text-gray-600 mb-4">
                            The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
                        </p>

                        <h3 className="text-lg font-semibold text-gray-800 mb-3">Exceptions</h3>
                        <p className="text-gray-600">
                            The Parties agree that the following Disputes are not subject to the above provisions concerning informal negotiations and binding arbitration: (a) any Disputes seeking to enforce or protect intellectual property rights; (b) any Dispute related to theft, piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief.
                        </p>
                    </div>

                    {/* Section 17 */}
                    <div id="tos-17" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">17. CORRECTIONS</h2>
                        <p className="text-gray-600">
                            There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
                        </p>
                    </div>

                    {/* Section 18 */}
                    <div id="tos-18" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">18. DISCLAIMER</h2>
                        <p className="text-gray-600 mb-4 uppercase text-sm">
                            THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                        </p>
                        <p className="text-gray-600 uppercase text-sm">
                            WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS.
                        </p>
                    </div>

                    {/* Section 19 */}
                    <div id="tos-19" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">19. LIMITATIONS OF LIABILITY</h2>
                        <p className="text-gray-600 uppercase text-sm">
                            IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
                        </p>
                    </div>

                    {/* Section 20 */}
                    <div id="tos-20" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">20. INDEMNIFICATION</h2>
                        <p className="text-gray-600">
                            You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services.
                        </p>
                    </div>

                    {/* Section 21 */}
                    <div id="tos-21" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">21. USER DATA</h2>
                        <p className="text-gray-600 mb-4">
                            We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services.
                        </p>
                        <p className="text-gray-600">
                            You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.
                        </p>
                    </div>

                    {/* Section 22 */}
                    <div id="tos-22" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">22. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
                        <p className="text-gray-600 mb-4">
                            Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing.
                        </p>
                        <p className="text-gray-600">
                            YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES.
                        </p>
                    </div>

                    {/* Section 23 */}
                    <div id="tos-23" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">23. CALIFORNIA USERS AND RESIDENTS</h2>
                        <p className="text-gray-600">
                            If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.
                        </p>
                    </div>

                    {/* Section 24 */}
                    <div id="tos-24" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">24. MISCELLANEOUS</h2>
                        <p className="text-gray-600">
                            These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions.
                        </p>
                    </div>

                    {/* Section 25 */}
                    <div id="tos-25" className="mb-12 scroll-mt-24">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">25. CONTACT US</h2>
                        <p className="text-gray-600 mb-4">
                            In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
                        </p>
                        <div className="bg-[#f8fafc] rounded-xl p-6 text-gray-700">
                            <p className="font-semibold">HealthAtlas</p>
                            <p>United States</p>
                            <p>Email: <a href="mailto:team@dropdev.co" className="text-primary hover:underline">team@dropdev.co</a></p>
                        </div>
                    </div>

                    {/* Acceptance */}
                    <div className="border-t border-gray-200 pt-8 mt-12">
                        <p className="text-gray-600 text-center italic">
                            By using HealthAtlas, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                        </p>
                    </div>
                </div>
            </Section>
        </Layout>
    );
};

export default TermsOfService;
