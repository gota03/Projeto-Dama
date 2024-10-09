import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-teal-600 mb-8">Contatos</h2>
        <p className="text-lg mb-6">Entre em contato conosco para saber mais sobre a federação e os nossos eventos.</p>
        <ul>
          <li className="flex items-center mb-2">
            <FaLocationDot className="mr-2 text-teal-600" />
            Endereço:
            <a href="https://maps.app.goo.gl/39kzRjG2gb2T8MsYA" target="blank" className="ml-1 hover:text-teal-600 hover:underline">
            Rua da alegria, 155 Centro, São Luís - MA
            </a>
          </li>

          <li className="flex items-center mb-2">
            <BsFillTelephoneFill className="mr-2 text-teal-600" />
            Telefone:
            <span className="ml-1">(98) 3333-4444</span>
          </li>

          <li className="flex items-center">
            <MdEmail className="mr-2 text-teal-600" />
            Email:
            <span className="ml-1">contato@federacaodamasma.org.br</span>
          </li>
        </ul>

      </div>
    </section>
  );
}
