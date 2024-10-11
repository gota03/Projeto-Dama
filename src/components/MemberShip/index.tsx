import { FiUserPlus } from "react-icons/fi";
import ShimmerButton from "../ui/shimmer-button";
import { useNavigate } from "react-router-dom";

export function MembershipSection() {
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleButtonClick = () => {
    navigate('/user'); // Altere '/inscricao' para a rota desejada
  }
  return (
    <section id="membership" className="bg-teal-600 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold mb-8 roboto">Seja um participante </h2>
          <FiUserPlus className="mt-3 ml-4" size={"20"}/>
        </div>

        <p className="text-lg mb-6 roboto">Torne-se um membro da federação de dama do Maranhão e participe de eventos exclusivos.</p>
        <div className="relative flex justify-center">
          <ShimmerButton 
            className="bg-white text-teal-600 py-3 px-6 rounded-lg shadow-lg font-semibold roboto" 
            background="white" 
            shimmerColor="#2de5d3" 
            shimmerSize="0.2rem"
            onClick={handleButtonClick}
            >
            Inscreva-se agora!
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
