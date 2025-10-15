"use client"

import { useState, useEffect } from "react"
import { courses } from "./data"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Play, Calendar, Clock, CheckCircle, PieChart } from "lucide-react"

interface StudyItem {
  courseTitle: string;
  courseUrl: string;
  moduleName: string;
  durationStudied: number;
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

  const parseTimeToMinutes = (time: string): number => {
    let totalMinutes = 0
    const hoursMatch = time.match(/(\d+)h/)
    const minutesMatch = time.match(/(\d+)min|(\d+)m/)
    const secondsMatch = time.match(/(\d+)s/)

    if (hoursMatch) totalMinutes += parseInt(hoursMatch[1]) * 60
    if (minutesMatch) totalMinutes += parseInt(minutesMatch[1] || minutesMatch[2])
    if (secondsMatch) totalMinutes += parseInt(secondsMatch[1]) / 60

    return Math.ceil(totalMinutes)
  }

  const getStudyMinutesForDate = (date: Date): number => {
    const localDate = new Date(date.toLocaleString('en-US', { timeZone: 'America/Porto_Velho' }));
    const dayOfWeek = localDate.getDay();

    const vacationStart = new Date('2025-10-20T00:00:00-04:00');
    const vacationEnd = new Date('2025-11-10T23:59:59-04:00');

    if (localDate >= vacationStart && localDate <= vacationEnd) {
      return 9 * 60;
    }
    
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      return (2 * 60) + 20;
    }
    if (dayOfWeek === 6) {
      return 9 * 60;
    }
    if (dayOfWeek === 0) {
      return 7 * 60;
    }
    
    return 0;
  };

  useEffect(() => {
    const generatePlan = () => {
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
      // DATA DE INÍCIO AJUSTADA: 16/10/2025
      const currentDate = new Date("2025-10-16T00:00:00-04:00");
      let moduleIndex = 0;

      while(moduleIndex < allModules.length) {
        let minutesForToday = getStudyMinutesForDate(currentDate);
        const dateKey = currentDate.toLocaleDateString('pt-BR', {timeZone: 'America/Porto_Velho'});

        if (minutesForToday > 0) {
          dailyPlan[dateKey] = dailyPlan[dateKey] || [];
          
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
        currentDate.setDate(currentDate.getDate() + 1);
      }
      
      setStudyPlan(dailyPlan);
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