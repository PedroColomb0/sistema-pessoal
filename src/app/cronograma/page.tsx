// app/cronograma/page.tsx

import { Sidebar } from "@/components/sidebar"

export default function CronogramaPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {/* CORREÇÃO: Adicionadas classes para o modo escuro */}
          <h1 className="text-3xl font-bold text-slate-800 dark:text-slate-200 mb-8">Cronograma</h1>

          {/* Segunda a Sexta */}
          <div className="mb-12">
            {/* CORREÇÃO: Adicionadas classes para o modo escuro */}
            <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-6">Segunda - Sexta</h2>
            {/* CORREÇÃO: Adicionadas classes para o modo escuro */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    {/* CORREÇÃO: Adicionadas classes para o modo escuro */}
                    <tr className="bg-slate-100 dark:bg-slate-900">
                      <th className="border border-slate-300 dark:border-slate-600 p-3 text-left font-semibold text-slate-700 dark:text-slate-300">
                        Horário
                      </th>
                      <th className="border border-slate-300 dark:border-slate-600 p-3 text-left font-semibold text-slate-700 dark:text-slate-300">
                        Segunda
                      </th>
                      <th className="border border-slate-300 dark:border-slate-600 p-3 text-left font-semibold text-slate-700 dark:text-slate-300">
                        Terça
                      </th>
                      <th className="border border-slate-300 dark:border-slate-600 p-3 text-left font-semibold text-slate-700 dark:text-slate-300">
                        Quarta
                      </th>
                      <th className="border border-slate-300 dark:border-slate-600 p-3 text-left font-semibold text-slate-700 dark:text-slate-300">
                        Quinta
                      </th>
                      <th className="border border-slate-300 dark:border-slate-600 p-3 text-left font-semibold text-slate-700 dark:text-slate-300">
                        Sexta
                      </th>
                    </tr>
                  </thead>
                  {/* CORREÇÃO: Adicionadas classes para o modo escuro */}
                  <tbody className="text-slate-600 dark:text-slate-400">
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">04:15 - 04:30</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Acordar - Café - Ir Estudar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Acordar - Café - Ir Estudar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Acordar - Café - Ir Estudar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Acordar - Café - Ir Estudar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Acordar - Café - Ir Estudar</td>
                    </tr>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                      <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">04:30 - 06:10</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Estudar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Estudar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Estudar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Estudar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Estudar</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">06:10 - 07:00</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Café + Arrumar + Estudar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Café + Arrumar + Estudar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Café + Arrumar + Estudar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Café + Arrumar + Estudar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Café + Arrumar + Estudar</td>
                    </tr>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                      <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">07:30 - 12:00</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Trabalhar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Trabalhar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Trabalhar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Trabalhar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Trabalhar</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">12:00 - 12:30</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Estudar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Estudar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Estudar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Estudar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Estudar</td>
                    </tr>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                      <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">13:10 - 13:30</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Descansar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Descansar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Descansar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Descansar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Descansar</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">13:10 - 13:30</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Almoçar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Almoçar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Almoçar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Almoçar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Almoçar</td>
                    </tr>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                      <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">13:30 - 17:48</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Trabalhar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Trabalhar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Trabalhar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Trabalhar</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Trabalhar</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">18:00 - 19:00</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Fisioterapia</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Fisioterapia</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Fisioterapia</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Fisioterapia</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Fisioterapia</td>
                    </tr>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                      <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">19:20 - 20:20</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Academia</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Academia</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Academia</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Academia</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Academia</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">20:20 - 21:15</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Banho - Arrumar Coisas outro dia - Dormir</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Banho - Arrumar Coisas outro dia - Dormir</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Banho - Arrumar Coisas outro dia - Dormir</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Banho - Arrumar Coisas outro dia - Dormir</td>
                      <td className="border border-slate-300 dark:border-slate-700 p-3">Ficar de Boa</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sábado */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-6">Sábado</h2>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-900">
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left font-semibold text-slate-700 dark:text-slate-300">
                      Horário
                    </th>
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left font-semibold text-slate-700 dark:text-slate-300">
                      Sábado
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 dark:text-slate-400">
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">07:40 - 08:00 - 09:00</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Acordar - Academia</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">09:00 - 09:30</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Banho + Água + Café da Manhã</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">09:30 - 12:00</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Estudar</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">12:00 - 14:00</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Almoço + Descanso</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">14:30 - 20:00</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Estudar</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Domingo */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-6">Domingo</h2>
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100 dark:bg-slate-900">
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left font-semibold text-slate-700 dark:text-slate-300">
                      Horário
                    </th>
                    <th className="border border-slate-300 dark:border-slate-600 p-3 text-left font-semibold text-slate-700 dark:text-slate-300">
                      Domingo
                    </th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 dark:text-slate-400">
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">07:40 - 08:15</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Acordar - Café - Banho</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">08:15 - 09:15</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Igreja</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">09:15 - 10:30</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Mercado</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">11:00 - 13:00</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Almoço + Descanso</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">13:00 - 19:00</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Estudar</td>
                  </tr>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <td className="border border-slate-300 dark:border-slate-700 p-3 font-medium">19:00 - 21:15</td>
                    <td className="border border-slate-300 dark:border-slate-700 p-3">Arrumar Coisas + Banho + Dormir</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}