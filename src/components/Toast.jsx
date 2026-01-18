"use client";
import { useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

const Toast = ({ toast, onRemove }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
        const timer = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => onRemove(toast.id), 300);
        }, toast.duration || 4000);

        return () => clearTimeout(timer);
    }, [toast, onRemove]);

    const getIcon = () => {
        switch (toast.type) {
            case 'success':
                return <CheckCircle size={20} />;
            case 'error':
                return <AlertCircle size={20} />;
            case 'warning':
                return <AlertTriangle size={20} />;
            case 'info':
            default:
                return <Info size={20} />;
        }
    };

    const getStyles = () => {
        switch (toast.type) {
            case 'success':
                return 'bg-success text-success-content border-success/20';
            case 'error':
                return 'bg-error text-error-content border-error/20';
            case 'warning':
                return 'bg-warning text-warning-content border-warning/20';
            case 'info':
            default:
                return 'bg-info text-info-content border-info/20';
        }
    };

    return (
        <div
            className={`transform transition-all duration-300 ease-out ${
                isVisible 
                    ? 'translate-x-0 opacity-100 scale-100' 
                    : 'translate-x-full opacity-0 scale-95'
            }`}
        >
            <div className={`flex items-center gap-3 p-4 rounded-2xl shadow-lg border backdrop-blur-sm ${getStyles()} min-w-[300px] max-w-md`}>
                <div className="flex-shrink-0">
                    {getIcon()}
                </div>
                <div className="flex-1">
                    {toast.title && (
                        <div className="font-bold text-sm mb-1">{toast.title}</div>
                    )}
                    <div className="text-sm opacity-90">{toast.message}</div>
                </div>
                <button
                    onClick={() => {
                        setIsVisible(false);
                        setTimeout(() => onRemove(toast.id), 300);
                    }}
                    className="flex-shrink-0 hover:bg-black/10 rounded-full p-1 transition-colors"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
};

export default Toast;