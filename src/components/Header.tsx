export function Header() {
  return (
    <header className="bg-teal-600 text-white py-4">
      <div className="w-full h-6 flex items-center justify-between px-6">
        <div className="flex items-center">
          <img
            src="src/assets/Bandeira_do_Maranhão.png"
            alt="Bandeira do Maranhão"
            className="w-12 mr-4"
          />
          <div className="text-lg font-bold">Federação de dama do Maranhão</div>
        </div>
        
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-teal-300 hover:underline">Sobre</a></li>
            <li><a href="#events" className="hover:text-teal-300 hover:underline">Eventos</a></li>
            <li><a href="#contact" className="hover:text-teal-300 hover:underline">Contato</a></li>
            <li><a href="#membership" className="hover:text-teal-300 hover:underline">Seja um participante</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
