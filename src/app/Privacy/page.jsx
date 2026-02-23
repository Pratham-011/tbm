"use client";

import React from "react"; // Ensure React is imported
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const PrivacyPage = () => { // Ensure this is a valid React functional component
    return (
        <>
            <Navigation />
            <main className="container mx-auto px-5">
                <section className="py-20">

                    {/* Heading */}
                    <div className="text-center mb-16">
                        <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold uppercase tracking-wider py-10">
                            <span className="text-[#f85a23]">Privacy</span>{" "}
                            <span className="text-white">Policy</span>
                        </h1>
                        <p className="text-white/60 mt-4 text-sm">
                            Last Updated: February 23, 2026
                        </p>
                    </div>

                    {/* Content */}
                    <div className="space-y-12 max-w-4xl mx-auto">

                        {/* Section 1 */}
                        <div>
                            <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">
                                1. Introduction
                            </h2>
                            <p className="text-white/60 leading-relaxed">
                                Welcome to True Bridge Media. We respect your privacy and are
                                committed to protecting your personal information. This Privacy
                                Policy explains how we collect, use, and safeguard your data when
                                you interact with our website, services, and advertising
                                campaigns.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">
                                2. Information We Collect
                            </h2>
                            <p className="text-white/60 leading-relaxed mb-3">
                                We may collect the following types of information:
                            </p>
                            <ul className="space-y-2 text-white/60 list-disc pl-5">
                                <li>Name and contact information</li>
                                <li>Email address</li>
                                <li>Business details</li>
                                <li>Advertising and analytics data (when applicable)</li>
                                <li>Information provided through forms or communication</li>
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">
                                3. How We Use Your Information
                            </h2>
                            <ul className="space-y-2 text-white/60 list-disc pl-5">
                                <li>To provide and improve our services</li>
                                <li>To manage advertising campaigns</li>
                                <li>To communicate with clients and partners</li>
                                <li>To analyze performance and optimize campaigns</li>
                                <li>To comply with legal obligations</li>
                            </ul>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">
                                4. Data Sharing
                            </h2>
                            <p className="text-white/60 leading-relaxed">
                                We do not sell or rent your personal information. Data may be
                                shared only with trusted service providers necessary for
                                delivering our services, or when required by law.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div>
                            <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">
                                5. Data Security
                            </h2>
                            <p className="text-white/60 leading-relaxed">
                                We implement appropriate security measures to protect your
                                personal information against unauthorized access, alteration,
                                disclosure, or destruction.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div>
                            <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">
                                6. Data Retention
                            </h2>
                            <p className="text-white/60 leading-relaxed">
                                We retain personal information only as long as necessary to
                                provide our services and comply with legal obligations.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div>
                            <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">
                                7. Your Rights
                            </h2>
                            <p className="text-white/60 leading-relaxed">
                                You may request access, correction, or deletion of your personal
                                data at any time by contacting us.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div>
                            <h2 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">
                                8. Contact Us
                            </h2>
                            <p className="text-white/60 leading-relaxed">
                                If you have any questions about this Privacy Policy, please
                                contact us at:
                            </p>
                            <p className="text-[#f85a23] font-medium mt-2">
                                hello@truebridgemedia.com
                            </p>
                        </div>

                    </div>
                </section>
                <Footer />
            </main>
        </>
    );
};

export default PrivacyPage; // Ensure the default export is correct