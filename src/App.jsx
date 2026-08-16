import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";

import { Routes, Route, Navigate } from 'react-router-dom';
import { PageLoader } from './components/PageLoader';

import { LuxuryCursor } from './components/ui/LuxuryCursor';

import { HomePage } from './pages/HomePage';

import './App.css'

function App() {
    // Loader Conf
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.addEventListener("load", () => {
            setTimeout(() => {
                setLoading(false);
            }, 1500);
        });
    }, []);


    return (
        <>
            <LuxuryCursor />
            
            <AnimatePresence mode="wait">
                {
                    loading ? (
                        <PageLoader key="loader" />
                    ) : (
                        <motion.div
                            key="content"
                            initial={{
                                opacity: 0,
                                y: 30
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                        >
                            <Routes>
                                <Route
                                    path="/"
                                    element={<HomePage />}
                                />

                                <Route
                                    path="*"
                                    element={<Navigate to="/" replace />}
                                />
                            </Routes>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </>
    );
}

export default App