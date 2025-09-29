import { Sidebar } from "@/components/sidebar"

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">Bem-vindo à Home</h1>
          <p className="text-lg text-slate-600">Essa é a página inicial.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Cronograma</h3>
              <p className="text-slate-600">Visualize sua rotina semanal organizada por horários.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Dieta</h3>
              <p className="text-slate-600">Acompanhe seu plano alimentar e lista de compras.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Treino</h3>
              <p className="text-slate-600">Seu planejamento de treino semanal completo.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Plano de Estudo</h3>
              <p className="text-slate-600">Jornada Full-Stack organizada por dias.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-3 text-slate-800">Calculadora</h3>
              <p className="text-slate-600">Calculadora de tempo para seus projetos.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
