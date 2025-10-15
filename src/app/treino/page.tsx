"use client"

import React, { useState, useEffect } from "react"
import { Check, Droplets, Play, Footprints, AlertTriangle } from "lucide-react"

// --- COMPONENTES ADICIONADOS PARA CORRIGIR ERROS ---

// Componente Sidebar Simples
const Sidebar = () => (
  <div className="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:w-72 bg-card border-r border-border p-6">
    <h2 className="text-2xl font-bold text-red-500">Meu Treino</h2>
    <p className="text-sm text-muted-foreground mt-2">Seu plano semanal personalizado.</p>
    <div className="mt-8 text-sm text-muted-foreground">
        <p>Domingo: Descanso ativo (alongamento, caminhada leve ou mobilidade).</p>
    </div>
  </div>
);

// Componente Button Simples (CORRIGIDO)
const Button = ({ children, onClick, className, variant: _variant, size: _size }: { children: React.ReactNode, onClick?: () => void, className?: string, variant?: string, size?: string }) => {
    // As props 'variant' e 'size' são renomeadas com '_' para indicar ao ESLint que não estão sendo usadas intencionalmente.
    return (
        <button onClick={onClick} className={className}>
            {children}
        </button>
    );
};

// Componente VideoModal Simples
const VideoModal = ({ isOpen, onClose, exerciseName }: { isOpen: boolean; onClose: () => void; exerciseName: string }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-card rounded-lg shadow-2xl p-6 w-full max-w-lg mx-4" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center border-b border-border pb-3 mb-4">
          <h3 className="text-xl font-bold text-foreground">{exerciseName}</h3>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground text-2xl font-bold">&times;</button>
        </div>
        <div className="aspect-video bg-muted rounded-md flex items-center justify-center">
          <p className="text-muted-foreground">Vídeo de demonstração indisponível.</p>
        </div>
        <div className="mt-4 text-right">
            <Button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                Fechar
            </Button>
        </div>
      </div>
    </div>
  );
};

// --- CÓDIGO ORIGINAL COM AJUSTES ---

// ADIÇÃO: Definição de tipo para um exercício, para evitar o uso de `any`
type ExerciseType = {
  name: string;
  sets: string;
  reps: string;
  note: string;
};

// Dicas de hidratação
const waterTips = [
  { time: "04:30 - 06:30", volume: 600, label: "600ML" },
  { time: "07:30 - 11:00", volume: 600, label: "600ML" },
  { time: "12:00 - 13:00", volume: 600, label: "600ML" },
  { time: "14:00 - 15:00", volume: 600, label: "600ML" },
  { time: "15:00 - 18:00", volume: 600, label: "600ML" },
  { time: "18:00 - 20:00", volume: 1200, label: "1200ML" },
  { time: "SOMA", volume: 4200, label: "4.200ML" },
]

// Plano de cardio detalhado
const cardioPlan = {
  seg: {
    title: "Caminhada Rápida",
    totalTime: "30 min",
    details: [
      { step: "Aquecimento", duration: "5 min", intensity: "Ritmo Leve" },
      { step: "Parte Principal", duration: "20 min", intensity: "Ritmo Rápido e Constante" },
      { step: "Desaquecimento", duration: "5 min", intensity: "Ritmo Leve" },
    ],
  },
  ter: {
    title: "Caminhada Rápida",
    totalTime: "30 min",
    details: [
      { step: "Aquecimento", duration: "5 min", intensity: "Ritmo Leve" },
      { step: "Parte Principal", duration: "20 min", intensity: "Ritmo Rápido e Constante" },
      { step: "Desaquecimento", duration: "5 min", intensity: "Ritmo Leve" },
    ],
  },
  qua: {
    title: "Caminhada Rápida",
    totalTime: "30 min",
    details: [
      { step: "Aquecimento", duration: "5 min", intensity: "Ritmo Leve" },
      { step: "Parte Principal", duration: "20 min", intensity: "Ritmo Rápido e Constante" },
      { step: "Desaquecimento", duration: "5 min", intensity: "Ritmo Leve" },
    ],
  },
  qui: {
    title: "Caminhada Rápida",
    totalTime: "30 min",
    details: [
      { step: "Aquecimento", duration: "5 min", intensity: "Ritmo Leve" },
      { step: "Parte Principal", duration: "20 min", intensity: "Ritmo Rápido e Constante" },
      { step: "Desaquecimento", duration: "5 min", intensity: "Ritmo Leve" },
    ],
  },
  sex: {
    title: "Caminhada Rápida",
    totalTime: "30 min",
    details: [
      { step: "Aquecimento", duration: "5 min", intensity: "Ritmo Leve" },
      { step: "Parte Principal", duration: "20 min", intensity: "Ritmo Rápido e Constante" },
      { step: "Desaquecimento", duration: "5 min", intensity: "Ritmo Leve" },
    ],
  },
  sab: {
    title: "Cardio Longo",
    totalTime: "45 min",
    details: [
      { step: "Aquecimento", duration: "5 min", intensity: "Ritmo Leve" },
      { step: "Parte Principal", duration: "35 min", intensity: "Caminhada Leve/Moderada" },
      { step: "Desaquecimento", duration: "5 min", intensity: "Ritmo Leve" },
    ],
  },
}

// Estrutura de dados para os treinos
const trainingPlan = {
  seg: {
    title: "Peito + Abdômen",
    focus: "Evitar arco exagerado no supino para proteger a lombar.",
    exercises: [
      { name: "Supino Reto com Barra", sets: "4x", reps: "10", note: "Use carga leve a moderada, focando na contração." },
      { name: "Supino Inclinado com Halteres", sets: "3x", reps: "12", note: "Controle o movimento, sem pressa." },
      { name: "Peck Deck (Voador)", sets: "3x", reps: "15", note: "Amplitude controlada para sentir o peitoral." },
      { name: "Flexão no Solo", sets: "3x", reps: "Máx.", note: "Faça o máximo de repetições com boa forma. Apoie os joelhos se necessário." },
      { name: "Abdômen Máquina (Deitado)", sets: "3x", reps: "15", note: "Mantenha o abdômen contraído durante todo o exercício." },
      { name: "Prancha Frontal", sets: "3x", reps: "30s", note: "Coluna reta, core ativado, não deixe o quadril cair." },
    ]
  },
  ter: {
    title: "Pernas (Ênfase: Quadríceps e Glúteos)",
    focus: "Foco em exercícios que evitam compressão lombar.",
    exercises: [
      { name: "Leg Press 45°", sets: "4x", reps: "12", note: "Mantenha a lombar totalmente apoiada no banco. Não tire o quadril do apoio." },
      { name: "Cadeira Extensora", sets: "3x", reps: "15", note: "Movimento controlado, principalmente na descida." },
      { name: "Cadeira Abdutora", sets: "3x", reps: "15", note: "Sente-se com a postura ereta, contraia o glúteo." },
      { name: "Elevação Pélvica (Glute Bridge)", sets: "3x", reps: "12", note: "Contraia bem os glúteos no topo do movimento." },
      { name: "Panturrilha no Leg Press", sets: "3x", reps: "20", note: "Alongue e contraia bem a panturrilha." },
    ]
  },
  qua: {
    title: "Costas + Core",
    focus: "Foco em postura e estabilização para fortalecer o suporte da coluna.",
    exercises: [
      { name: "Puxada Alta (Pegada Aberta)", sets: "4x", reps: "10", note: "Puxe a barra em direção ao peito, mantendo o tronco estável." },
      { name: "Puxada Baixa (Remada Sentada)", sets: "3x", reps: "12", note: "Mantenha a coluna reta, sem balançar o tronco." },
      { name: "Remada com Halteres (Apoiado no Banco)", sets: "3x", reps: "10", note: "Apoie uma mão e um joelho no banco para máxima estabilidade." },
      { name: "Pulldown com Polia (Braços Estendidos)", sets: "3x", reps: "12", note: "Exercício focado no latíssimo, movimento de cima para baixo." },
      { name: "Prancha Lateral", sets: "3x", reps: "20s (cada lado)", note: "Corpo reto como uma tábua, de lado." },
      { name: "Crunch na Máquina", sets: "3x", reps: "15", note: "Use o abdômen para mover o peso, não o pescoço ou braços." },
    ]
  },
  qui: {
    title: "Ombros + Abdômen",
    focus: "Trabalho com cargas leves para evitar sobrecarga cervical e na lombar.",
    exercises: [
      { name: "Desenvolvimento com Halteres (Sentado)", sets: "4x", reps: "12", note: "Mantenha as costas bem apoiadas no banco." },
      { name: "Elevação Lateral com Halteres", sets: "3x", reps: "15", note: "Não ultrapasse a linha dos ombros, controle a descida." },
      { name: "Elevação Frontal com Halteres", sets: "3x", reps: "15", note: "Eleve os halteres alternadamente ou juntos, sem balançar o corpo." },
      { name: "Encolhimento de Ombro (Shrug)", sets: "3x", reps: "15", note: "Apenas eleve os ombros, sem girá-los." },
      { name: "Prancha Frontal", sets: "3x", reps: "40s", note: "Aumente o tempo conforme for ficando mais fácil." },
      { name: "Abdominal Infra (Apoiado)", sets: "3x", reps: "12", note: "Eleve as pernas com o abdômen, sem forçar a lombar." },
    ]
  },
  sex: {
    title: "Pernas (Ênfase: Posterior e Glúteos)",
    focus: "Uso de máquinas para maior segurança e isolamento muscular.",
    exercises: [
      { name: "Cadeira Flexora", sets: "4x", reps: "12", note: "Concentre a força no posterior da coxa." },
      { name: "Leg Sentado (Máquina Articulada)", sets: "3x", reps: "12", note: "Mantenha a postura e controle o movimento." },
      { name: "Glúteo na Máquina (Kickback)", sets: "3x", reps: "15", note: "Foque na contração máxima do glúteo." },
      { name: "Elevação Pélvica com Barra (Hip Thrust)", sets: "3x", reps: "12", note: "Use um apoio para as costas, barra sobre o quadril." },
      { name: "Panturrilha Sentada", sets: "3x", reps: "20", note: "Amplitude máxima no movimento." },
    ]
  },
  sab: {
    title: "Core + Cardio Longo",
    focus: "Fortalecimento completo do abdômen e lombar, seguido de cardio prolongado.",
    exercises: [
      { name: "Prancha Frontal", sets: "3x", reps: "40s", note: "Mantenha a contração do core o tempo todo." },
      { name: "Abdominal na Máquina", sets: "3x", reps: "15", note: "Movimento focado no abdômen." },
      { name: "Crunch no Solo", sets: "3x", reps: "20", note: "Queixo longe do peito, força no abdômen." },
      { name: "Abdominal Infra (Pernas Estendidas)", sets: "3x", reps: "12", note: "Desça as pernas lentamente, sem deixar a lombar arquear." },
      { name: "Alongamento", sets: "1x", reps: "10 min", note: "Foque em alongar lombar, posteriores de coxa e quadríceps." },
    ]
  },
}

// Componente para renderizar um único exercício
const Exercise = ({ name, sets, reps, note, onVideoClick }: { name: string, sets: string, reps: string, note: string, onVideoClick: (name: string) => void }) => (
  <div className="border-b border-border/50 pb-4">
    <div className="flex items-center justify-between mb-2">
      <div className="font-bold text-foreground text-lg">{name}</div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onVideoClick(name)}
        className="flex items-center gap-2 hover:bg-red-50 hover:border-red-200 hover:text-red-600 dark:hover:bg-red-950 dark:hover:border-red-800 px-3 py-1 border rounded-md text-sm"
      >
        <Play className="h-3 w-3" />
        Ver Vídeo
      </Button>
    </div>
    <div className="grid grid-cols-3 gap-4 text-sm text-muted-foreground mb-2">
      <span className="font-medium">{sets}</span>
      <span className="font-medium">{reps}</span>
      <span className="font-medium">Moderado</span>
    </div>
    <div className="text-sm text-muted-foreground italic pl-3 border-l-4 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 p-2 rounded-r">
      {note}
    </div>
  </div>
);

// Componente para renderizar um dia de treino (CORRIGIDO)
const TrainingDay = ({ day, onVideoClick }: { day: { title: string, focus: string, exercises: ExerciseType[] }, onVideoClick: (name: string) => void }) => (
  <div className="bg-card rounded-lg shadow-lg border border-border p-6">
    <div className="text-lg text-muted-foreground mb-6 pb-2 border-b border-dashed border-border">
      {day.title}
    </div>
    <div className="space-y-6">
      {day.exercises.map((exercise, index) => (
        <Exercise key={index} {...exercise} onVideoClick={onVideoClick} />
      ))}
    </div>
    <div className="mt-6 bg-yellow-50 dark:bg-yellow-950/20 p-4 rounded-lg border-l-4 border-yellow-500 flex items-start gap-3">
      <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" />
      <div>
        <h4 className="text-yellow-800 dark:text-yellow-200 font-bold">Atenção!</h4>
        <p className="text-yellow-700 dark:text-yellow-300 text-sm font-medium">
          {day.focus} Sempre mantenha a coluna neutra e o abdômen firme. Se sentir qualquer dor na lombar, pare imediatamente e reduza a carga.
        </p>
      </div>
    </div>
  </div>
);

export default function TreinoPage() {
  const [activeTab, setActiveTab] = useState("seg")
  const [waterProgress, setWaterProgress] = useState<Record<number, boolean>>({})
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; exerciseName: string }>({
    isOpen: false,
    exerciseName: "",
  })

  useEffect(() => {
    const saved = localStorage.getItem("waterProgress")
    if (saved) {
      setWaterProgress(JSON.parse(saved))
    }
  }, [])

  const toggleWaterTip = (index: number) => {
    const newProgress = {
      ...waterProgress,
      [index]: !waterProgress[index],
    }
    setWaterProgress(newProgress)
    localStorage.setItem("waterProgress", JSON.stringify(newProgress))
  }

  const getTotalWaterConsumed = () => {
    return waterTips.reduce((total, tip, index) => {
      if (tip.time === "SOMA") return total; // Não somar a linha de SOMA
      return total + (waterProgress[index] ? tip.volume : 0)
    }, 0)
  }

  const getWaterProgressPercent = () => {
    return Math.min((getTotalWaterConsumed() / 4200) * 100, 100)
  }

  const tabs = [
    { id: "seg", label: "SEGUNDA" },
    { id: "ter", label: "TERÇA" },
    { id: "qua", label: "QUARTA" },
    { id: "qui", label: "QUINTA" },
    { id: "sex", label: "SEXTA" },
    { id: "sab", label: "SÁBADO" },
    { id: "cardio", label: "CARDIO" },
  ]

  const openVideoModal = (exerciseName: string) => {
    setVideoModal({ isOpen: true, exerciseName })
  }

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, exerciseName: "" })
  }

  const dayMap: { [key: string]: keyof typeof cardioPlan } = {
    dom: "seg", seg: "seg", ter: "ter", qua: "qua", qui: "qui", sex: "sex", sáb: "sab",
  }
  const todayKey = new Date().toLocaleString("pt-BR", { weekday: "short" }).toLowerCase().replace(".", "")
  const currentCardioPlan = cardioPlan[dayMap[todayKey]] || cardioPlan.seg

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 md:ml-72 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-red-500 mb-8 text-center">Planejamento de Treino Semanal</h1>
          <div className="flex flex-wrap border-b border-border mb-8 overflow-x-auto bg-card rounded-t-lg">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                className={`rounded-none border-b-2 border-transparent whitespace-nowrap transition-all duration-200 px-4 py-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? "bg-red-500 text-white border-red-500 shadow-sm"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>

          {activeTab === "seg" && <TrainingDay day={trainingPlan.seg} onVideoClick={openVideoModal} />}
          {activeTab === "ter" && <TrainingDay day={trainingPlan.ter} onVideoClick={openVideoModal} />}
          {activeTab === "qua" && <TrainingDay day={trainingPlan.qua} onVideoClick={openVideoModal} />}
          {activeTab === "qui" && <TrainingDay day={trainingPlan.qui} onVideoClick={openVideoModal} />}
          {activeTab === "sex" && <TrainingDay day={trainingPlan.sex} onVideoClick={openVideoModal} />}
          {activeTab === "sab" && <TrainingDay day={trainingPlan.sab} onVideoClick={openVideoModal} />}

          {activeTab === "cardio" && (
            <div className="bg-card rounded-lg shadow-lg border border-border p-6">
              <div className="flex items-center gap-3 text-lg text-muted-foreground mb-6 pb-2 border-b border-dashed border-border">
                <Footprints className="text-red-500" />
                <span>Cardio de Hoje: {currentCardioPlan.title}</span>
              </div>
              <div className="space-y-6">
                {currentCardioPlan.details.map((item, index) => (
                  <div key={index} className="border-b border-border/50 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-bold text-foreground text-lg">{item.step}</div>
                      <span className="font-mono text-sm bg-muted text-muted-foreground px-2 py-1 rounded">
                        {item.duration}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground italic pl-3 border-l-4 border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20 p-2 rounded-r">
                      {item.intensity}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-red-50 dark:bg-red-950/20 p-4 rounded-lg border-l-4 border-red-500">
                <div className="text-red-700 dark:text-red-300 text-sm font-medium">
                  <strong>Duração Total Estimada:</strong> {currentCardioPlan.totalTime}
                  <br /><br />
                  <strong>Importante:</strong> Mantenha a postura correta, com a coluna reta. Pare imediatamente se sentir dor. Use tênis com bom amortecimento.
                </div>
              </div>
            </div>
          )}

          <div className="mt-12 bg-blue-50 dark:bg-blue-950/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-bold mb-4 text-lg">
              <Droplets className="w-5 h-5" />
              Hidratação Diária
            </div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-blue-600 dark:text-blue-400">Meta: 4.2L</span>
            </div>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm text-blue-600 dark:text-blue-400">Progresso:</span>
              <div className="flex-1 h-6 bg-blue-200 dark:bg-blue-900 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-500 transition-all duration-500"
                  style={{ width: `${getWaterProgressPercent()}%` }}
                />
              </div>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {(getTotalWaterConsumed() / 1000).toFixed(1)}L / 4.2L
              </span>
            </div>
            <div className="space-y-2">
              {waterTips.filter(tip => tip.time !== "SOMA").map((tip, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 text-sm transition-all duration-200 ${
                    waterProgress[index] ? "line-through text-muted-foreground" : "text-blue-700 dark:text-blue-300"
                  }`}
                >
                  <button
                    onClick={() => toggleWaterTip(index)}
                    className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200 hover:scale-110 ${
                      waterProgress[index]
                        ? "bg-blue-500 border-blue-500 shadow-sm"
                        : "border-blue-300 dark:border-blue-600 hover:border-blue-400 dark:hover:border-blue-500"
                    }`}
                  >
                    {waterProgress[index] && <Check className="w-3 h-3 text-white" />}
                  </button>
                  <strong>
                    {tip.time} | {tip.label}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <VideoModal isOpen={videoModal.isOpen} onClose={closeVideoModal} exerciseName={videoModal.exerciseName} />
    </div>
  )
}