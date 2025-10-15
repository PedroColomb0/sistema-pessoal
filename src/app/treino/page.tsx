"use client"

import React, { useState, useEffect } from "react"
import { Check, Droplets, Play, Footprints, AlertTriangle } from "lucide-react"

// --- COMPONENTES ---
const Sidebar = () => (
  <div className="hidden md:flex md:flex-col md:fixed md:inset-y-0 md:w-72 bg-card border-r border-border p-6">
    <h2 className="text-2xl font-bold text-red-500">Meu Treino</h2>
    <p className="text-sm text-muted-foreground mt-2">Plano ABC 2x - Foco em Segurança Lombar</p>
    <div className="mt-8 text-sm text-muted-foreground">
      <p><strong>Segunda/Quinta:</strong> Peito, Ombros, Tríceps</p>
      <p><strong>Terça/Sexta:</strong> Costas, Bíceps, Core</p>
      <p><strong>Quarta/Sábado:</strong> Pernas e Core</p>
      <p><strong>Domingo:</strong> Descanso</p>
    </div>
  </div>
);

const Button = ({ children, onClick, className, variant: _variant, size: _size }: { children: React.ReactNode, onClick?: () => void, className?: string, variant?: string, size?: string }) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

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

// --- ESTRUTURA DE DADOS ATUALIZADA ---
type ExerciseType = {
  name: string;
  sets: string;
  reps: string;
  note: string;
};

// Plano de treino ABC 2x
const trainingPlan = {
  seg: {
    title: "Treino A: Peito, Ombros e Tríceps",
    focus: "Evitar arco exagerado no supino. Foco em estabilidade.",
    exercises: [
      { name: "Supino Deitado com Halteres", sets: "3x", reps: "10-12", note: "Halteres dão mais estabilidade. Desça controladamente." },
      { name: "Peck Deck (Voador)", sets: "3x", reps: "12-15", note: "Concentre-se em 'espremer' o peitoral." },
      { name: "Desenvolvimento com Halteres (Sentado)", sets: "3x", reps: "10-12", note: "Costas bem apoiadas no banco a 90°." },
      { name: "Puxada Alta com Polia para Tríceps", sets: "3x", reps: "12-15", note: "Cotovelos parados ao lado do corpo." },
    ]
  },
  ter: {
    title: "Treino B: Costas, Bíceps e Core", 
    focus: "Fortalecer músculos de suporte da coluna. Postura ereta.",
    exercises: [
      { name: "Puxada Alta (Puxador Frontal)", sets: "3x", reps: "10-12", note: "Puxe a barra em direção ao peito, tronco estável." },
      { name: "Puxada Baixa (Remada Sentado)", sets: "3x", reps: "10-12", note: "Coluna reta, sem balançar o tronco." },
      { name: "Rosca Direta com Halteres (Sentado)", sets: "3x", reps: "12-15", note: "Sentado para evitar compensação lombar." },
      { name: "Prancha Isométrica", sets: "3x", reps: "30-60s", note: "Corpo reto como uma tábua. Core ativado." },
      { name: "Prancha Lateral", sets: "3x", reps: "20-40s", note: "20-40 segundos cada lado." },
    ]
  },
  qua: {
    title: "Treino C: Pernas e Core",
    focus: "Evitar compressão lombar. Lombar sempre apoiada.",
    exercises: [
      { name: "Leg Press 45°", sets: "3x", reps: "10-15", note: "NÃO tire quadril e lombar do banco. Mantenha apoiado." },
      { name: "Cadeira Extensora", sets: "3x", reps: "12-15", note: "Movimento controlado, isolado para quadríceps." },
      { name: "Cadeira Flexora", sets: "3x", reps: "12-15", note: "Foco no posterior da coxa." },
      { name: "Cadeira Abdutora", sets: "3x", reps: "15-20", note: "Glúteos e parte externa das coxas." },
      { name: "Cadeira Adutora", sets: "3x", reps: "15-20", note: "Parte interna das coxas." },
      { name: "Prancha Isométrica", sets: "3x", reps: "30-60s", note: "Fortalece core sem flexionar coluna." },
    ]
  },
  qui: {
    title: "Treino A: Peito, Ombros e Tríceps",
    focus: "Repetição do treino A com possível aumento progressivo de carga.",
    exercises: [
      { name: "Supino Deitado com Halteres", sets: "3x", reps: "10-12", note: "Tente aumentar carga se estiver fácil." },
      { name: "Peck Deck (Voador)", sets: "3x", reps: "12-15", note: "Mantenha amplitude controlada." },
      { name: "Desenvolvimento com Halteres (Sentado)", sets: "3x", reps: "10-12", note: "Costas apoiadas, evite arquear." },
      { name: "Puxada Alta com Polia para Tríceps", sets: "3x", reps: "12-15", note: "Foco na contração do tríceps." },
    ]
  },
  sex: {
    title: "Treino B: Costas, Bíceps e Core",
    focus: "Ênfase na execução perfeita. Core sempre ativado.",
    exercises: [
      { name: "Puxada Alta (Puxador Frontal)", sets: "3x", reps: "10-12", note: "Progressão de carga se possível." },
      { name: "Puxada Baixa (Remada Sentado)", sets: "3x", reps: "10-12", note: "Ombro para trás, peito estufado." },
      { name: "Rosca Direta com Halteres (Sentado)", sets: "3x", reps: "12-15", note: "Evite balançar o corpo." },
      { name: "Prancha Isométrica", sets: "3x", reps: "30-60s", note: "Aumente tempo conforme evolução." },
      { name: "Prancha Lateral", sets: "3x", reps: "20-40s", note: "20-40 segundos cada lado." },
    ]
  },
  sab: {
    title: "Treino C: Pernas e Core",
    focus: "Último treino da semana. Foco em segurança acima de tudo.",
    exercises: [
      { name: "Leg Press 45°", sets: "3x", reps: "10-15", note: "ATENÇÃO: Lombar SEMPRE colada no banco." },
      { name: "Cadeira Extensora", sets: "3x", reps: "12-15", note: "Controle a descida do peso." },
      { name: "Cadeira Flexora", sets: "3x", reps: "12-15", note: "Isolamento seguro do posterior." },
      { name: "Cadeira Abdutora", sets: "3x", reps: "15-20", note: "Contração consciente dos glúteos." },
      { name: "Cadeira Adutora", sets: "3x", reps: "15-20", note: "Movimento controlado." },
      { name: "Prancha Isométrica", sets: "3x", reps: "30-60s", note: "Core forte = coluna protegida." },
    ]
  },
}

// Cardio plano (mantido igual)
const cardioPlan = {
  seg: { title: "Caminhada Rápida", totalTime: "30 min", details: [
    { step: "Aquecimento", duration: "5 min", intensity: "Ritmo Leve" },
    { step: "Parte Principal", duration: "20 min", intensity: "Ritmo Rápido e Constante" },
    { step: "Desaquecimento", duration: "5 min", intensity: "Ritmo Leve" },
  ]},
  ter: { title: "Caminhada Rápida", totalTime: "30 min", details: [
    { step: "Aquecimento", duration: "5 min", intensity: "Ritmo Leve" },
    { step: "Parte Principal", duration: "20 min", intensity: "Ritmo Rápido e Constante" },
    { step: "Desaquecimento", duration: "5 min", intensity: "Ritmo Leve" },
  ]},
  qua: { title: "Caminhada Rápida", totalTime: "30 min", details: [
    { step: "Aquecimento", duration: "5 min", intensity: "Ritmo Leve" },
    { step: "Parte Principal", duration: "20 min", intensity: "Ritmo Rápido e Constante" },
    { step: "Desaquecimento", duration: "5 min", intensity: "Ritmo Leve" },
  ]},
  qui: { title: "Caminhada Rápida", totalTime: "30 min", details: [
    { step: "Aquecimento", duration: "5 min", intensity: "Ritmo Leve" },
    { step: "Parte Principal", duration: "20 min", intensity: "Ritmo Rápido e Constante" },
    { step: "Desaquecimento", duration: "5 min", intensity: "Ritmo Leve" },
  ]},
  sex: { title: "Caminhada Rápida", totalTime: "30 min", details: [
    { step: "Aquecimento", duration: "5 min", intensity: "Ritmo Leve" },
    { step: "Parte Principal", duration: "20 min", intensity: "Ritmo Rápido e Constante" },
    { step: "Desaquecimento", duration: "5 min", intensity: "Ritmo Leve" },
  ]},
  sab: { title: "Cardio Longo", totalTime: "45 min", details: [
    { step: "Aquecimento", duration: "5 min", intensity: "Ritmo Leve" },
    { step: "Parte Principal", duration: "35 min", intensity: "Caminhada Leve/Moderada" },
    { step: "Desaquecimento", duration: "5 min", intensity: "Ritmo Leve" },
  ]},
}

// Hidratação (mantido igual)
const waterTips = [
  { time: "04:30 - 06:30", volume: 600, label: "600ML" },
  { time: "07:30 - 11:00", volume: 600, label: "600ML" },
  { time: "12:00 - 13:00", volume: 600, label: "600ML" },
  { time: "14:00 - 15:00", volume: 600, label: "600ML" },
  { time: "15:00 - 18:00", volume: 600, label: "600ML" },
  { time: "18:00 - 20:00", volume: 1200, label: "1200ML" },
  { time: "SOMA", volume: 4200, label: "4.200ML" },
]

// --- COMPONENTES DE EXERCÍCIO E TREINO ---
const Exercise = ({ name, sets, reps, note, onVideoClick }: { name: string, sets: string, reps: string, note: string, onVideoClick: (name: string) => void }) => (
  <div className="border-b border-border/50 pb-4">
    <div className="flex items-center justify-between mb-2">
      <div className="font-bold text-foreground text-lg">{name}</div>
      <Button
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
          {day.focus} QUALQUER DOR NA LOMBAR = PARE IMEDIATAMENTE. Execute com controle total.
        </p>
      </div>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL ---
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
      if (tip.time === "SOMA") return total;
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
          <h1 className="text-3xl font-bold text-red-500 mb-8 text-center">Plano ABC 2x - Segurança Lombar</h1>
          <div className="flex flex-wrap border-b border-border mb-8 overflow-x-auto bg-card rounded-t-lg">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
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