import { FaFlag } from "react-icons/fa6";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function AboutSection() {
  return (
    <section id="about" className=" bg-teal-600 py-8">
      <div className="container mx-auto px-6">
        <div className="flex items-center">
          <h2 className="text-3xl font-bold text-white mb-3 roboto">Sobre a federação</h2>
          <FaFlag className="text-white mb-1 ml-2" size={"20"}/>
        </div>

        <Carousel>

          <CarouselContent>

            <CarouselItem>
              <h3 className="text-xl font-semibold mb-4 text-white roboto">Missão</h3>
              <div className="flex items-center">
                <img src="/dama_escola.jpg" alt="Imagem de dama" className="w-64 rounded-lg" />
                <p className="w-1/2 ml-4 text-white text-left roboto">
                Promover e desenvolver o jogo de dama no Maranhão, fomentando a participação e a excelência em todas as faixas etárias e níveis de habilidade. Buscamos criar um ambiente inclusivo, onde jogadores novatos e experientes possam aprender, competir e compartilhar o amor pelo jogo. Além de promover campeonatos locais e regionais, trabalhamos para integrar o esporte às comunidades, escolas e espaços públicos.
                </p>
              </div>
            </CarouselItem>

            <CarouselItem>
              <h3 className="text-xl font-semibold mb-4 text-white roboto">História</h3>
              <div className="flex items-center">
                <img src="/dotinha.jpeg" alt="" className="w-64 rounded-lg"/>
                <p className="w-1/2 ml-4 text-white text-left roboto">
                Fundada em 06/03/1979, a Federação Maranhense de Dama celebra décadas de impulso ao esporte no estado, sendo um dos principais pilares no fortalecimento dessa modalidade no Maranhão. Além de seu papel competitivo, a federação também se dedica ao aspecto educacional, oferecendo cursos, oficinas e treinamentos para difundir o conhecimento do jogo de dama.
                </p>
              </div>
            </CarouselItem>

            <CarouselItem>
              <h3 className="text-xl font-semibold mb-4 text-white roboto">Valores</h3>
              <div className="flex items-center">
                <img src="/campeonato_dama.jpg" alt="" className="w-64 rounded-lg"/>
                <p className="w-1/2 ml-4 text-white text-left roboto">
                Paixão, integridade, trabalho em equipe e excelência guiam nossas ações em cada etapa do nosso trabalho. A paixão pelo jogo de dama e pelo seu desenvolvimento nos impulsiona a buscar sempre mais, promovendo o esporte com dedicação e entusiasmo. Agimos com transparência, respeito e responsabilidade em relação a todos os nossos membros e à comunidade.
                </p>
              </div>
            </CarouselItem>

          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </section>
  );
}
