import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { FormEvent, ChangeEvent } from '../types';
import Alert from './Alert';

const LogIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password).catch((error) => {
      console.log(error.code);
      const errorMessage = handleError(error.code);
      setErrorMessage(errorMessage);
    });
  };

  const handleError = (errorCode: string) => {
    switch (errorCode) {
      case 'auth/invalid-credential':
        return 'Las credenciales proporcionadas no son válidas.';
      case 'auth/user-disabled':
        return 'Tu cuenta ha sido deshabilitada. Por favor, contacta al soporte.';
      default:
        return 'Ocurrió un error al iniciar sesión. Por favor, inténtalo de nuevo más tarde.';
    }
  };
  

  const handleEmailChange = (e: ChangeEvent) => setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent) => setPassword(e.target.value);

  const closeAlert = () => setErrorMessage('');

  return (
    <div className="max-w-sm mx-auto mt-11">
      {errorMessage && <Alert type="error" message={errorMessage} onClose={closeAlert} />}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-slate-800 p-5 rounded-xl"
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            onChange={handleEmailChange}
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@domain.com"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            onChange={handlePasswordChange}
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogIn;
