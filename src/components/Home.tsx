export function Home() {
  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-teal-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-2xl font-bold">Federação de Damas do Maranhão</div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-teal-300">Sobre</a></li>
              <li><a href="#events" className="hover:text-teal-300">Eventos</a></li>
              <li><a href="#contact" className="hover:text-teal-300">Contato</a></li>
              <li><a href="#membership" className="hover:text-teal-300">Seja um Participante</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-teal-600 mb-6">Celebrando a Tradição do Jogo de Damas</h1>
          <p className="text-lg">A Federação de Damas do Maranhão promove a excelência e o desenvolvimento do jogo de damas em todas as categorias.</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-600 mb-8">Sobre a Federação</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Missão</h3>
              <p>Promover e desenvolver o jogo de damas no Maranhão, fomentando a participação e a excelência.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">História</h3>
              <p>Fundada em 1950, a Federação Maranhense de Damas celebra décadas de impulso ao esporte no estado.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Valores</h3>
              <p>Paixão, Integridade, Trabalho em Equipe e Excelência guiam nossas ações.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events and Calendar Section */}
      <section id="events" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-600 mb-8">Eventos e Calendários</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Campeonato Maranhense</h3>
              <p>A maior competição estadual, reunindo os melhores enxadristas do Maranhão.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Torneios Regionais</h3>
              <p>Eventos que fomentam a prática do jogo em todas as regiões do Maranhão.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Workshops e Clínicas</h3>
              <p>Oportunidades de aprimorar habilidades e compartilhar conhecimento.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Calendário de Competições</h3>
              <p>Acompanhe as datas dos próximos eventos e torneios pelo nosso calendário oficial.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Seja um Participante</h2>
          <p className="text-lg mb-6">Torne-se um membro da Federação de Damas do Maranhão e participe de eventos exclusivos.</p>
          <a href="#" className="bg-white text-teal-600 py-3 px-6 rounded-lg shadow-lg font-semibold hover:bg-gray-200 transition">Inscreva-se Agora</a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-teal-600 mb-8">Contato</h2>
          <p className="text-lg mb-6">Entre em contato conosco para saber mais sobre a Federação e os nossos eventos.</p>
          <ul>
            <li><strong>Endereço:</strong> Rua das Damas, 123 - Centro, São Luís - MA</li>
            <li><strong>Telefone:</strong> (98) 3333-4444</li>
            <li><strong>Email:</strong> contato@federacaodamasma.org.br</li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Federação de Damas do Maranhão. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
