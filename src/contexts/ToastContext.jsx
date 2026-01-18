"use client";
import { createContext, useContext, useState } from 'react';
import Toast from '@/components/Toast';

const ToastContext = createContext();

export const useToast = () => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

export const ToastProvider = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (toast) => {
        const id = Date.now() + Math.random();
        const newToast = { id, ...toast };
        setToasts(prev => [...prev, newToast]);
        console.log('Toast added:', newToast); // Debug log
        return id;
    };

    const removeToast = (id) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
        console.log('Toast removed:', id); // Debug log
    };

    const toast = {
        success: (message, title, duration) => addToast({ type: 'success', message, title, duration }),
        error: (message, title, duration) => addToast({ type: 'error', message, title, duration }),
        warning: (message, title, duration) => addToast({ type: 'warning', message, title, duration }),
        info: (message, title, duration) => addToast({ type: 'info', message, title, duration }),
    };

    console.log('Current toasts:', toasts); // Debug log

    return (
        <ToastContext.Provider value={{ toast, addToast, removeToast }}>
            {children}
            
            {/* Toast Container */}
            <div className="fixed top-4 right-4 z-[9999] space-y-3">
                {toasts.map(toastItem => (
                    <Toast
                        key={toastItem.id}
                        toast={toastItem}
                        onRemove={removeToast}
                    />
                ))}
            </div>
        </ToastContext.Provider>
    );
};