import React from 'react';
import { motion } from 'framer-motion';
import { useAuthStore } from '../../store/authStore';
import ThemeToggle from '../../components/layout/ThemeToggle';
import { LogOut, BookOpen, Trophy, Target } from 'lucide-react';
import Button from '../../components/ui/Button';

const StudentDashboard = () => {
    const { logout, user } = useAuthStore();

    return (
        <div className="min-h-screen bg-light-canvas dark:bg-dark-canvas transition-colors duration-500 p-6 md:p-12 font-sans text-light-border dark:text-white">
            {/* Header */}
            <header className="flex items-center justify-between mb-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-black mb-2 tracking-tighter">
                        Hello, {user?.name || 'Student'}! 👋
                    </h1>
                    <p className="font-script text-xl text-gray-500 dark:text-gray-400">
                        Ready to level up your skills today?
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Button
                        onClick={logout}
                        variant="secondary"
                        className="!px-4 !py-2 !text-sm flex items-center gap-2"
                    >
                        <LogOut className="w-4 h-4" /> Sign Out
                    </Button>
                </div>
            </header>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Stat Card 1 */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-dark-card border-2 border-light-border dark:border-gray-700 rounded-[3rem] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-none"
                >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-4 text-blue-500">
                        <Trophy className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Skill Score</h3>
                    <p className="text-4xl font-black text-black dark:text-white">850</p>
                    <p className="text-sm text-gray-400 mt-2 font-mono">Top 5% of students</p>
                </motion.div>

                {/* Stat Card 2 */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-dark-card border-2 border-light-border dark:border-gray-700 rounded-[3rem] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-none"
                >
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-4 text-green-500">
                        <BookOpen className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Active Courses</h3>
                    <p className="text-4xl font-black text-black dark:text-white">3</p>
                    <p className="text-sm text-gray-400 mt-2 font-mono">2 assignments pending</p>
                </motion.div>

                {/* Stat Card 3 */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-dark-card border-2 border-light-border dark:border-gray-700 rounded-[3rem] p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-none"
                >
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-4 text-purple-500">
                        <Target className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Next Goal</h3>
                    <p className="text-xl font-bold text-black dark:text-white line-clamp-2">Complete "Advanced React Patterns" module</p>
                </motion.div>

                {/* Main Content Area */}
                <div className="md:col-span-2 lg:col-span-3 bg-white dark:bg-dark-card border-2 border-light-border dark:border-gray-700 rounded-[3rem] p-8 min-h-[300px] flex items-center justify-center border-dashed">
                    <div className="text-center text-gray-400">
                        <p className="font-bold text-lg mb-2">My Learning Path</p>
                        <p className="font-script">Widgets coming soon...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
