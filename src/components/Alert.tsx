import { useEffect } from "react";
import { AlertProps } from "../types";

useEffect
const Alert: React.FC<AlertProps> = ({ type, message, onClose, duration = 5000 }) => {
  let alertClasses = '';

  if (type === 'error') {
    alertClasses = 'bg-red-100 border-l-4 border-red-500 text-red-700';
  } else if (type === 'warning') {
    alertClasses = 'bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700';
  } else {
    alertClasses = 'bg-blue-100 border-l-4 border-blue-500 text-blue-700';
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed inset-x-0 top-4 flex items-center justify-center z-50">
      <div className={`p-4 ${alertClasses} rounded shadow-lg`} role="alert">
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold">Alert</p>
            <p>{message}</p>
          </div>
          <button onClick={onClose} className="text-2xl leading-none">&times;</button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
