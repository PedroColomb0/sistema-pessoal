"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar" // Importação do Sidebar
import { Button } from "@/components/ui/button"
import { StudyDay, studyDays } from "../data/study-schedule"

// 🎯 Importando a interface e os dados do arquivo dedicado

export default function PlanoEstudoPage() {
    // Definindo o estado inicial para a nova primeira aba do array de estudos: Seg, 06/10
    const [activeTab, setActiveTab] = useState(studyDays[0].id)

    // Função para aplicar estilos de botão com base no tipo de dia.
    const getTabStyle = (day: StudyDay) => {
        // Estilo especial para a aba ativa que é o dia de hoje
        const isToday = day.id === studyDays[0].id && activeTab === day.id;

        if (day.isBirthday) return "bg-pink-100 border-pink-300 text-pink-700 hover:bg-pink-200"
        if (day.isCompleted) return "bg-green-100 border-green-300 text-green-700 hover:bg-green-200"
        if (day.isVacation) return "bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-200"
        if (day.isIntensive && !day.isVacation) return "bg-orange-100 border-orange-300 text-orange-700 hover:bg-orange-200"
        
        // Estilo padrão ou se for o dia ativo
        return isToday ? "bg-indigo-100 border-indigo-300 text-indigo-700 hover:bg-indigo-200" : "bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200"
    }

    // Função para aplicar estilos de fundo e barra lateral ao painel de conteúdo.
    const getContentStyle = (day: StudyDay) => {
        if (day.isBirthday) return "bg-pink-50 border-l-pink-500"
        if (day.isCompleted) return "bg-green-50 border-l-green-500"
        if (day.isVacation) return "bg-blue-50 border-l-blue-500"
        if (day.isIntensive && !day.isVacation) return "bg-orange-50 border-l-orange-500"
        return "bg-slate-50 border-l-slate-500"
    }

    // Encontra o objeto do dia ativo (o dia selecionado) para exibir seu conteúdo.
    const activeDay = studyDays.find((day) => day.id === activeTab)

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar agora está ativa no layout */}
            <Sidebar />
            <main className="flex-1 p-4 sm:p-8">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">
                        Plano de Estudos - Jornada Full-Stack (v15 - Seg, 06/10)
                    </h1>
                    <p className="text-slate-600 mb-8">
                        Seu cronograma recalculado, com o novo início em <strong>06 de Outubro de 2025</strong> e o progresso detalhado dos cursos.
                    </p>

                    {/* Legenda de cores */}
                    <div className="flex flex-wrap gap-4 text-xs mb-6 text-slate-600">
                        <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></span> Dia Inicial</span>
                        <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-orange-500 mr-2"></span> Ritmo Intensivo</span>
                        <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span> Férias Intensivas</span>
                        <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-pink-500 mr-2"></span> Descanso</span>
                        <span className="flex items-center"><span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span> Concluído</span>
                    </div>

                    {/* Abas com os dias de estudo */}
                    <div className="flex flex-wrap border-b border-slate-200 mb-8 overflow-x-auto gap-1">
                        {studyDays.map((day) => (
                            <Button
                                key={day.id}
                                variant="ghost"
                                size="sm"
                                onClick={() => setActiveTab(day.id)}
                                // Estilos dinâmicos para a aba ativa e os tipos de dia
                                className={`rounded-t-lg border-b-2 border-transparent whitespace-nowrap text-xs px-3 py-2 h-auto transition-all duration-150 shadow-sm ${
                                    activeTab === day.id 
                                        ? `font-bold border-indigo-600 shadow-lg ${getTabStyle(day)}` 
                                        : `hover:bg-slate-200 bg-slate-50 text-slate-600 ${getTabStyle(day)}`
                                }`}
                            >
                                {day.label}
                            </Button>
                        ))}
                    </div>

                    {/* Conteúdo do dia selecionado */}
                    {activeDay && (
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden transition-all duration-300">
                            <div className="p-6 sm:p-8">
                                <h2 className="text-2xl font-semibold text-slate-800 mb-4">{activeDay.label}</h2>

                                <div className="bg-slate-100 rounded-xl p-4 sm:p-6 mb-6">
                                    <h3 className="font-extrabold text-lg text-slate-800 mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        Conteúdo do Dia
                                    </h3>
                                    <p className="text-slate-700 font-mono tracking-tight text-base break-words">
                                        {activeDay.content}
                                    </p>
                                </div>

                                <div className={`p-4 sm:p-6 rounded-xl border-l-4 ${getContentStyle(activeDay)}`}>
                                    <h4 className="font-extrabold text-lg text-slate-800 mb-2 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.664a2 2 0 01-1.789-2.894l3.5-7A2 2 0 0114 10zM12 10V7a4 4 0 00-8 0v3"></path></svg>
                                        Foco Principal:
                                    </h4>
                                    <p className="text-slate-700 text-base" dangerouslySetInnerHTML={{ __html: activeDay.focus.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}></p>
                                </div>

                                {/* Mensagens dinâmicas baseadas no tipo de dia */}
                                {activeDay.isIntensive && !activeDay.isVacation && (
                                    <div className="mt-6 bg-orange-50 p-4 rounded-lg border border-orange-200">
                                        <p className="text-orange-800 text-sm font-semibold flex items-center">
                                            <span className="text-xl mr-2">⚡</span>
                                            Ritmo Intensivo: Dia de estudo estendido. Mantenha a hidratação e aproveite o foco extra!
                                        </p>
                                    </div>
                                )}
                                
                                {activeDay.isVacation && activeDay.isIntensive && (
                                    <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                                        <p className="text-blue-800 text-sm font-semibold flex items-center">
                                            <span className="text-xl mr-2">🏖️</span>
                                            Modo Férias Ativado! Ritmo super intensivo. Aproveite ao máximo para finalizar a jornada!
                                        </p>
                                    </div>
                                )}

                                {!activeDay.isIntensive && !activeDay.isBirthday && !activeDay.isCompleted && !activeDay.isVacation && (
                                    <div className="mt-6 bg-slate-100 p-4 rounded-lg border border-slate-200">
                                        <p className="text-slate-700 text-sm font-medium flex items-center">
                                            <span className="text-xl mr-2">🕒</span>
                                            Ritmo Normal: Foco de 2h 30m com consistência e qualidade.
                                        </p>
                                    </div>
                                )}

                                {activeDay.isBirthday && (
                                    <div className="mt-6 bg-pink-100 p-4 rounded-lg border border-pink-300">
                                        <p className="text-pink-800 text-sm font-semibold flex items-center">
                                            <span className="text-xl mr-2">🎂</span>
                                            Aproveite muito o seu dia de descanso merecido.
                                        </p>
                                    </div>
                                )}
                                
                                {activeDay.isCompleted && (
                                    <div className="mt-6 bg-green-100 p-4 rounded-lg border border-green-300">
                                        <p className="text-green-800 text-sm font-semibold flex items-center">
                                            <span className="text-xl mr-2">✅</span>
                                            🏆 Parabéns pela incrível dedicação! É hora de celebrar e planejar seus próximos passos como dev!
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}