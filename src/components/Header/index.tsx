import { useState } from 'react';
import { CiMenuBurger } from 'react-icons/ci';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-teal-600 text-white py-2">
      <div className="flex items-center justify-between px-6">
        <div className="flex items-center">
          <img
            src="/logo_federacao.svg"
            alt="Bandeira do Maranhão"
            className="w-10 mr-4"
          />
          <div className="text-lg font-bold roboto">Federação de damas do Maranhão</div>
        </div>

        <div className="block md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none focus:ring-2 focus:ring-white"
          >
            <CiMenuBurger className="w-6 h-6" />
          </button>
        </div>

        <nav className={`md:flex md:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md: bg-teal-600 w-full md:w-auto top-16 left-0`}>
          <ul className="flex flex-col md:flex-row md:gap-5">
            <li>
              <a href="/#about" className="hover:text-teal-300 hover:underline roboto py-2">Sobre</a>
            </li>
            <li>
              <a href="/#events" className="hover:text-teal-300 hover:underline roboto py-2">Eventos</a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-teal-300 hover:underline roboto py-2">Contato</a>
            </li>
            <li>
              <a href="/user" className="hover:text-teal-300 hover:underline roboto py-2">Seja um participante</a>
            </li>
            <li>
              <a href="/admin/login" className="hover:text-teal-300 hover:underline roboto py-2">Área do admin</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
