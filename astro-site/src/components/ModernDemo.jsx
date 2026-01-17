import React, { useState } from 'react';

export default function ModernDemo() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto my-12 relative group">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>

      <div className="relative p-8 bg-slate-900 ring-1 ring-gray-900/5 rounded-2xl leading-none flex items-top justify-start space-x-6">
        <div className="space-y-4 w-full">
          <div className="flex items-center justify-between">
            <p className="text-slate-100 text-xl font-medium tracking-tight">
              React + Tailwind <span className="text-amber-400">Dark Mode</span>
            </p>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-amber-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed">
            Componente React interactivo con estilos utilitarios de Tailwind CSS.
            Diseño "Glassmorphism" oscuro premium.
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-slate-700">
            <button
              onClick={() => setCount(count + 1)}
              className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/30 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>Click me</span>
              <span className="bg-indigo-700 px-2 py-0.5 rounded text-xs">{count}</span>
            </button>

            <div className="flex space-x-1">
              <span className="text-xs font-mono text-slate-500">.jsx</span>
              <span className="text-xs font-mono text-slate-500">.tsx</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
