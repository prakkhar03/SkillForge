import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Building, MapPin, Globe, Briefcase, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const ClientOnboarding = () => {
    const { user } = useAuthStore();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);

    // Simulate fetching existing profile data
    const [profile, setProfile] = useState({
        companyName: '',
        industry: '',
        website: '',
        location: '',
        description: ''
    });

    useEffect(() => {
        // In real implementation, fetch from /api/accounts/onboarding/
        // For now, prepopulate if we have some data from signup
        setProfile(prev => ({
            ...prev,
            companyName: 'Tech Innovators Inc.', // Dummy default
        }));
    }, []);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API update
        setTimeout(() => {
            setIsLoading(false);
            navigate('/client/dashboard');
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-light-canvas dark:bg-dark-canvas p-6 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-3xl w-full"
            >
                <header className="mb-12 text-center">
                    <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tighter text-black dark:text-white">
                        Welcome to the Forge <span className="text-orange-500">⚒️</span>
                    </h1>
                    <p className="font-script text-2xl text-gray-500 dark:text-gray-400 rotate-2">
                        Let's set up your HQ, {user?.email?.split('@')[0] || 'Partner'}!
                    </p>
                </header>

                <div className="bg-white dark:bg-dark-card border-4 border-black dark:border-gray-700 rounded-[3rem] p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-none relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-100 dark:bg-yellow-900/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />

                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="Company Name"
                                name="companyName"
                                value={profile.companyName}
                                onChange={handleChange}
                                icon={Building}
                                placeholder="e.g. Acme Corp"
                            />
                            <Input
                                label="Industry"
                                name="industry"
                                value={profile.industry}
                                onChange={handleChange}
                                icon={Briefcase}
                                placeholder="e.g. Fintech, EdTech"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                label="Website"
                                name="website"
                                value={profile.website}
                                onChange={handleChange}
                                icon={Globe}
                                placeholder="https://..."
                            />
                            <Input
                                label="Location"
                                name="location"
                                value={profile.location}
                                onChange={handleChange}
                                icon={MapPin}
                                placeholder="City, Country"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-1 ml-1">About the Company</label>
                            <textarea
                                name="description"
                                value={profile.description}
                                onChange={handleChange}
                                rows="4"
                                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-black dark:focus:border-white focus:ring-0 transition-all resize-none font-medium"
                                placeholder="Tell us about your mission..."
                            />
                        </div>

                        <div className="pt-4 flex justify-end">
                            <Button className="px-10 py-4 text-xl flex items-center gap-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none">
                                {isLoading ? 'Forging Profile...' : 'Complete Setup'}
                                {!isLoading && <ArrowRight />}
                            </Button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default ClientOnboarding;
