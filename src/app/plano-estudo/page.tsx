"use client"

import { useState, useEffect } from "react"
// Importando os dados do nosso novo arquivo
import { courses } from "./data"
// Componentes de UI e Ícones
import { Sidebar } from "@/components/sidebar" // Supondo que você tenha este componente
import { Button } from "@/components/ui/button"  // Supondo que você tenha este componente
import { Play, Calendar, Clock, CheckCircle, PieChart } from "lucide-react"

// --- TIPOS E INTERFACES PARA O PLANO GERADO ---
interface StudyItem {
  courseTitle: string;
  courseUrl: string;
  moduleName: string;
  durationStudied: number; // in minutes
  isPartial: boolean;
  totalModuleDuration: number;
}

type StudyPlan = Record<string, StudyItem[]>;


export default function PlanoEstudoPage() {
  const [studyPlan, setStudyPlan] = useState<StudyPlan | null>(null)
  const [activeTab, setActiveTab] = useState<string>("")
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; url: string }>({
    isOpen: false,
    url: "",
  })

  // --- FUNÇÕES HELPER ---
  const parseTimeToMinutes = (time: string): number => {
    let totalMinutes = 0
    const hoursMatch = time.match(/(\d+)h/)
    const minutesMatch = time.match(/(\d+)min|(\d+)m/) // Adjusted to catch 'm' for minutes
    const secondsMatch = time.match(/(\d+)s/)

    if (hoursMatch) totalMinutes += parseInt(hoursMatch[1]) * 60
    if (minutesMatch) totalMinutes += parseInt(minutesMatch[1] || minutesMatch[2]) // Handle both 'min' and 'm'
    if (secondsMatch) totalMinutes += parseInt(secondsMatch[1]) / 60

    return Math.ceil(totalMinutes)
  }

  const getStudyMinutesForDate = (date: Date): number => {
    // Clone the date to avoid modifying the original date in the loop
    const localDate = new Date(date.toLocaleString('en-US', { timeZone: 'America/Porto_Velho' }));
    const dayOfWeek = localDate.getDay(); // 0=Domingo, 6=Sábado

    const vacationStart = new Date('2025-10-20T00:00:00-04:00');
    const vacationEnd = new Date('2025-11-10T23:59:59-04:00'); // Changed to 10/11 as per user

    // Check for vacation period first
    if (localDate >= vacationStart && localDate <= vacationEnd) {
      return 9 * 60; // 9 hours
    }
    
    // Weekdays (Monday to Friday)
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      return (2 * 60) + 20; // 2 hours 20 minutes
    }
    // Saturday
    if (dayOfWeek === 6) {
      return 9 * 60; // 9 hours (09:00-12:00 + 14:00-20:00)
    }
    // Sunday
    if (dayOfWeek === 0) {
      return 7 * 60; // 7 hours (13:00-20:00)
    }
    
    return 0;
  };

  // --- LÓGICA PRINCIPAL DE GERAÇÃO DO PLANO ---
  useEffect(() => {
    const generatePlan = () => {
      // 1. Achata todos os módulos de todos os cursos em uma única lista
      const allModules = courses.flatMap(course => 
        course.modules.map(module => ({
          courseTitle: course.title,
          courseUrl: course.url,
          moduleName: module.name,
          totalDuration: parseTimeToMinutes(module.time),
          remainingDuration: parseTimeToMinutes(module.time),
        }))
      );

      const dailyPlan: StudyPlan = {};
      // 2. Define a data de início
      const currentDate = new Date("2025-10-16T00:00:00-04:00"); // Updated start date to 16/10/2025
      let moduleIndex = 0;

      // 3. Loop continua até todos os módulos serem agendados
      while(moduleIndex < allModules.length) {
        let minutesForToday = getStudyMinutesForDate(currentDate);
        // Use 'pt-BR' locale with a fixed timezone for consistent date keys
        const dateKey = currentDate.toLocaleDateString('pt-BR', {timeZone: 'America/Porto_Velho'});

        if (minutesForToday > 0) {
          dailyPlan[dateKey] = dailyPlan[dateKey] || []; // Ensure array exists for the date
          
          // 4. Preenche o dia com módulos até o tempo acabar
          while (minutesForToday > 0 && moduleIndex < allModules.length) {
            const currentModule = allModules[moduleIndex];
            const timeToStudy = Math.min(minutesForToday, currentModule.remainingDuration);

            dailyPlan[dateKey].push({
              courseTitle: currentModule.courseTitle,
              courseUrl: currentModule.courseUrl,
              moduleName: currentModule.moduleName,
              durationStudied: timeToStudy,
              isPartial: timeToStudy < currentModule.totalDuration,
              totalModuleDuration: currentModule.totalDuration,
            });

            currentModule.remainingDuration -= timeToStudy;
            minutesForToday -= timeToStudy;

            if (currentModule.remainingDuration <= 0) {
              moduleIndex++;
            }
          }
        }
        // 5. Avança para o próximo dia
        currentDate.setDate(currentDate.getDate() + 1);
      }
      
      setStudyPlan(dailyPlan);
      // Define a aba ativa como o dia de hoje, ou o primeiro dia do plano.
      const todayKey = new Date().toLocaleDateString('pt-BR', {timeZone: 'America/Porto_Velho'});
      setActiveTab(dailyPlan[todayKey] ? todayKey : Object.keys(dailyPlan)[0] || "");
    };

    generatePlan();
  }, []);

  const openVideoModal = (url: string) => setVideoModal({ isOpen: true, url });
  const closeVideoModal = () => setVideoModal({ isOpen: false, url: "" });

  if (!studyPlan) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
          <h2 className="text-xl font-semibold animate-pulse text-foreground">Calculando seu plano de estudos...</h2>
        </div>
    );
  }

  const todayString = new Date().toLocaleDateString('pt-BR', {timeZone: 'America/Porto_Velho'});

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 md:ml-72 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-red-500 mb-8 text-center">Planejamento de Estudos Diário</h1>

          <div className="flex flex-wrap border-b border-border mb-8 overflow-x-auto bg-card rounded-t-lg">
            {Object.keys(studyPlan).map((date) => (
              <Button
                key={date}
                variant={activeTab === date ? "default" : "ghost"}
                className={`rounded-none border-b-2 whitespace-nowrap transition-all duration-200 ${
                  activeTab === date
                    ? "bg-red-500 text-white border-red-500 shadow-sm"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                } ${date === todayString ? 'ring-2 ring-offset-2 ring-offset-background ring-blue-500' : ''}`}
                onClick={() => setActiveTab(date)}
              >
                {date === todayString ? `Hoje (${date})` : date}
              </Button>
            ))}
          </div>

          {activeTab && studyPlan[activeTab] && (
              <div className="bg-card rounded-lg shadow-lg border border-border p-6 animate-fade-in">
                <div className="flex items-center gap-3 text-lg text-muted-foreground mb-6 pb-2 border-b border-dashed border-border">
                  <Calendar className="h-5 w-5 text-red-500" /> 
                  Tarefas para: <strong className="text-foreground">{activeTab}</strong>
                </div>

                <div className="space-y-6">
                {studyPlan[activeTab].map((item, index) => (
                    <div key={index} className="border-b border-border/50 pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <a href={item.courseUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-foreground text-lg hover:text-red-500 transition-colors">
                          {item.courseTitle}
                        </a>
                        <Button variant="outline" size="sm" onClick={() => openVideoModal(item.courseUrl)} className="flex items-center gap-2">
                          <Play className="h-3 w-3" /> Abrir Curso
                        </Button>
                      </div>
                      <div className="pl-4">
                          <h4 className="font-semibold text-md text-foreground mb-2">{item.moduleName}</h4>
                          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mb-3">
                              <div className="flex items-center gap-2" title="Tempo de estudo neste dia">
                                  <Clock className="h-4 w-4 text-blue-500"/>
                                  <span><strong>Estudar por:</strong> {item.durationStudied} min</span>
                              </div>
                              <div className="flex items-center gap-2" title="Status de conclusão do módulo">
                                {((item.isPartial && item.durationStudied < item.totalModuleDuration) || item.durationStudied < item.totalModuleDuration) ? (
                                    <>
                                        <PieChart className="h-4 w-4 text-yellow-500" />
                                        <span>Módulo em Progresso</span>
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span>Módulo Concluído neste dia</span>
                                    </>
                                )}
                              </div>
                          </div>
                          {((item.isPartial && item.durationStudied < item.totalModuleDuration) || item.durationStudied < item.totalModuleDuration) && (
                               <div className="text-sm text-muted-foreground italic pl-3 border-l-4 border-yellow-300 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-950/20 p-2 rounded-r">
                                  Você estudará <strong>{item.durationStudied} min</strong> de <strong>{item.totalModuleDuration} min</strong> deste módulo. O restante será agendado para o próximo dia.
                               </div>
                          )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          )}
        </div>
      </main>

      {videoModal.isOpen && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center" onClick={closeVideoModal}>
            <div className="bg-card rounded-lg shadow-xl p-6 w-11/12 max-w-lg relative" onClick={(e) => e.stopPropagation()}>
               <h3 className="text-lg font-bold mb-4">Abrir Link do Curso</h3>
               <p className="text-muted-foreground mb-6">Você será redirecionado para a plataforma do curso. Deseja continuar?</p>
               <div className="flex justify-end gap-4">
                 <Button variant="ghost" onClick={closeVideoModal}>Cancelar</Button>
                 <Button onClick={() => { window.open(videoModal.url, "_blank"); closeVideoModal(); }} className="bg-red-500 hover:bg-red-600">
                   Sim, abrir curso
                 </Button>
               </div>
            </div>
          </div>
      )}
    </div>
  )
}
