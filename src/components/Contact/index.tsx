import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-teal-600 mb-8 roboto">Contatos</h2>
        <p className="text-lg mb-6 roboto">Entre em contato conosco para saber mais sobre a federação e os nossos eventos.</p>
        <ul>
          <li className="flex items-center mb-2">
            <FaLocationDot className="mr-2 text-teal-600" />
            <p className="roboto">Endereço:</p> 
            <a href="https://maps.app.goo.gl/39kzRjG2gb2T8MsYA" target="blank" className="ml-1 hover:text-teal-600 hover:underline roboto">
            Rua da alegria, 155 Centro, São Luís - MA
            </a>
          </li>

          <li className="flex items-center mb-2">
            <BsFillTelephoneFill className="mr-2 text-teal-600" />
            <p className="roboto">Telefone:</p>
            <span className="ml-1 roboto">(98) 3333-4444</span>
          </li>

          <li className="flex items-center">
            <MdEmail className="mr-2 text-teal-600" />
            <p className="roboto">Email:</p>
            <span className="ml-1 roboto">contato@federacaodamasma.org.br</span>
          </li>
        </ul>

      </div>
    </section>
  );
}
