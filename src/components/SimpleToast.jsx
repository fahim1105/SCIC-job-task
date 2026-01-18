"use client";
import { useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

const SimpleToast = ({ message, type = 'info', onClose }) => {
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(false);
            setTimeout(onClose, 300);
        }, 4000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const getIcon = () => {
        switch (type) {
            case 'success': return <CheckCircle size={20} className="text-green-500" />;
            case 'error': return <AlertCircle size={20} className="text-red-500" />;
            case 'warning': return <AlertTriangle size={20} className="text-yellow-500" />;
            default: return <Info size={20} className="text-blue-500" />;
        }
    };

    const getBgColor = () => {
        switch (type) {
            case 'success': return 'bg-green-100 border-green-200 text-green-800';
            case 'error': return 'bg-red-100 border-red-200 text-red-800';
            case 'warning': return 'bg-yellow-100 border-yellow-200 text-yellow-800';
            default: return 'bg-blue-100 border-blue-200 text-blue-800';
        }
    };

    if (!show) return null;

    return (
        <div className={`fixed top-4 right-4 z-[9999] flex items-center gap-3 p-4 rounded-lg border shadow-lg ${getBgColor()} transform transition-all duration-300 ${show ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            {getIcon()}
            <span className="font-medium">{message}</span>
            <button
                onClick={() => {
                    setShow(false);
                    setTimeout(onClose, 300);
                }}
                className="ml-2 hover:bg-black/10 rounded-full p-1"
            >
                <X size={16} />
            </button>
        </div>
    );
};

export default SimpleToast;