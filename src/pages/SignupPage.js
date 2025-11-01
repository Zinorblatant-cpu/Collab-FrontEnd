// src/pages/SignupPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, googleProvider } from '../lib/firebase';
import { signInWithPopup } from 'firebase/auth';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    if (password.length < 6) {
      setError('A senha deve ter pelo menos 6 caracteres.');
      return;
    }
    console.log('Cadastro:', { email, password });
    setError('');
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // O Firebase cria a conta automaticamente se for novo
    } catch (err) {
      setError('Erro ao cadastrar com Google: ' + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-900/100 dark:text-white flex items-center justify-center p-4">
      <div className="bg-zinc-800 p-8 rounded-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Cadastro na COLL<span className="text-amber-500">AB</span>
        </h1>

        {error && (
          <div className="text-red-400 text-sm bg-red-900/20 p-3 rounded mb-4 text-center">
            {error}
          </div>
        )}

        {/* Botão Google */}
        <button
          type="button"
          onClick={handleGoogleSignup}
          className="w-full flex items-center justify-center gap-3 bg-white text-gray-800 font-medium py-3 rounded-lg mb-6 hover:bg-gray-100 transition"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path
              d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"
              fill="#4285F4"
            />
          </svg>
          Continuar com Google
        </button>

        <div className="relative flex items-center justify-center mb-6">
          <div className="absolute h-px bg-gray-700 w-full"></div>
          <span className="relative bg-zinc-800 px-4 text-gray-400 text-sm">ou</span>
        </div>

        {/* Formulário */}
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            className="w-full p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirmar Senha"
            className="w-full p-3 bg-zinc-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg"
          >
            Criar Conta
          </button>
        </form>

        {/* Link para Login */}
        <div className="mt-6 text-center">
          <p className="text-gray-300">
            Já tem conta?{' '}
            <Link to="/login" className="text-yellow-500 font-semibold hover:underline">
              Entrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}