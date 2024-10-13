export function HeroSection() {
  return (
    <section className="bg-white py-32 bg-no-repeat bg-cover bg-bottom" style={{
      backgroundImage: 'url(/imagem_tabuleiro.jpg)'
    }}>
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-white mb-6 roboto">Celebrando a tradição do jogo de dama</h1>
        <p className="text-lg text-slate-200 roboto">A federação de damas do Maranhão promove a excelência e o desenvolvimento do jogo de damas em todas as categorias.</p>
      </div>
    </section>
  );
}
