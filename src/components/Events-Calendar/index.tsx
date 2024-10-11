import { FaCalendarAlt } from "react-icons/fa";

export function EventsSection() {
  return (
    <section id="events" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <div className="flex items-center">
          <h2 className="text-3xl font-bold text-teal-600 mb-8 roboto">Eventos e calendários</h2>
          <FaCalendarAlt className="text-teal-600 mb-6 ml-4" size={"20"}/>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 roboto">Campeonato maranhense</h3>
            <p>A maior competição estadual, reunindo os melhores enxadristas do Maranhão.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 roboto">Torneios regionais</h3>
            <p>Eventos que fomentam a prática do jogo em todas as regiões do Maranhão.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 roboto">Workshops e clínicas</h3>
            <p>Oportunidades de aprimorar habilidades e compartilhar conhecimento.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4 roboto">Calendário de competições</h3>
            <p>Acompanhe as datas dos próximos eventos e torneios pelo nosso calendário oficial.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
