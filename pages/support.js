import React from "react";
import Head from "next/head";
import { StickyNavbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { CommunitySection } from "../components/CommunitySection";

export default function Support() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#121212]">
      <Head>
        <title>Support - MRT Buddy</title>
      </Head>
      <StickyNavbar />
      <CommunitySection />

      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 dark:text-white">
            Get Support
          </h1>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border-2 border-[#1877F2] dark:border-[#1877F2]">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold dark:text-white flex items-center gap-3">
                  <span>Join Our Community</span>
                  <span className="text-2xl">👥</span>
                </h2>
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  Recommended
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                Get instant help from our active community of MRT Buddy users. Share experiences, ask questions, and stay updated!
              </p>
              <ul className="list-disc list-inside mb-8 text-gray-600 dark:text-gray-300 space-y-2">
                <li>Quick responses from community members</li>
                <li>Share tips and tricks with other users</li>
                <li>Get latest app updates and announcements</li>
                <li>Connect with fellow commuters</li>
              </ul>
              <a
                href="http://facebook.com/groups/596021299517064"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-[#1877F2] text-white px-6 py-4 rounded-lg hover:bg-[#1664d8] transition-colors text-lg font-medium gap-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Join Facebook Group
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-4 dark:text-white flex items-center gap-2">
                <span>Urgent Support</span>
                <span className="text-red-500">🚨</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                For critical technical issues that require immediate attention, you can submit a support ticket.
              </p>
              <a
                href="https://mrtbuddy.zohodesk.com/portal/en/newticket"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors underline text-sm"
              >
                Create Support Ticket →
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}