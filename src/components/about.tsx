"use client";

import React, { useState } from "react";
import { HelpCircle, X, Award, User, Code, Info } from "lucide-react";

export default function DiplomaInfoModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. КРУГЛА КНОПКА ЗІ ЗНАКОМ ПИТАННЯ */}
      {/* Вона зафіксована у правому нижньому кутку (fixed bottom-6 right-6) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 p-3.5 bg-slate-900 hover:bg-indigo-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group border border-slate-700/50"
        title="Про програму (Довідка КР)"
      >
        {/* Іконка знаку питання. Якщо немає lucide-react, можна замінити просто на текст "?" */}
        <HelpCircle className="w-6 h-6 transition-transform group-hover:rotate-12" />

        {/* Спливаюча підказка при наведенні */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs px-2.5 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-md border border-slate-800">
          Про програму
        </span>
      </button>

      {/* 2. МОДАЛЬНЕ ВІКНО (Рендериться тільки коли isOpen === true) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)} // ЗАКРИТТЯ ПРИ КЛІКУ НА БУДЬ-ЯКЕ МІСЦЕ ФОНУ
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        >
          {/* Контентна картка довідки */}
          <div
            onClick={(e) => e.stopPropagation()} // Важливо! Запобігає закриттю, коли клікають ВСЕРЕДИНІ довідки
            className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden relative animate-in zoom-in-95 duration-200"
          >
            {/* Кнопка-хрестик для закриття (про всяк випадок у кутку) */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white/80 z-10 p-1.5 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* ШАПКА ДОВІДКИ */}
            <div className="bg-slate-900 p-6 text-white text-center border-b border-slate-800">
              <h2 className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                Нововолинський електромеханічний фаховий коледж
              </h2>
              <h1 className="text-xl font-bold mt-1 text-white">
                Довідка про програмний комплекс
              </h1>
            </div>

            {/* ОСНОВНИЙ КОНТЕНТ */}
            <div className="p-6 space-y-5 text-slate-700 max-h-[80vh] overflow-y-auto">
              {/* Тема */}
              <div className="flex gap-3.5 items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Award className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900 text-xs uppercase tracking-wide">
                    Кваліфікаційна робота
                  </h3>
                  <p className="text-base font-medium text-slate-800 mt-1 leading-relaxed">
                    «Проектування та реалізація програмного комплексу управління
                    IT-проектами за Scrum методологією»
                  </p>
                </div>
              </div>

              {/* Студент та Керівник */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex gap-3.5 items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <User className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wide">
                      Виконав студент 4 курсу
                    </h4>
                    <p className="text-base font-medium text-slate-800 mt-0.5">
                      Милисюк Р. В.
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                      Спеціальність 123 «Комп’ютерна інженерія»
                      <br />
                      Група 2-КТ-22
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5 items-start p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <User className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wide">
                      Науковий керівник
                    </h4>
                    <p className="text-base font-medium text-slate-800 mt-0.5">
                      Ільїна Т. В.
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5 leading-tight">
                      Циклова комісія комп’ютерної інженерії
                    </p>
                  </div>
                </div>
              </div>

              {/* Стек */}
              <div className="flex gap-3.5 items-start bg-slate-50 p-4 rounded-xl border border-slate-100">
                <Code className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-slate-900 text-xs uppercase tracking-wide">
                    Технологічний стек розробки
                  </h3>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {[
                      "Next.js",
                      "TypeScript",
                      "Tailwind CSS",
                      "Hono Framework",
                      "Appwrite BaaS",
                      "React Query",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="bg-white text-slate-800 text-[11px] font-medium px-2 py-0.5 rounded border border-slate-200 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Примітки */}
              <div className="flex gap-3 items-start px-2">
                <Info className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Даний інструмент є невід'ємною частиною практичної
                  кваліфікаційної роботи на здобуття ступеня «Фаховий молодший
                  бакалавр». Надійно інтегровано з хмарними сервісами
                  аутентифікації та NoSQL базами даних.
                </p>
              </div>
            </div>

            {/* ФУТЕР */}
            <div className="bg-slate-50 px-6 py-3.5 border-t border-slate-100 text-center text-[11px] text-slate-400 font-medium">
              Нововолинськ, 2026
            </div>
          </div>
        </div>
      )}
    </>
  );
}
