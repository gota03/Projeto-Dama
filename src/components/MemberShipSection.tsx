import ShimmerButton from "./ui/shimmer-button";
import { FiUserPlus } from "react-icons/fi";

export function MembershipSection() {
  return (
    <section id="membership" className="bg-teal-600 text-white py-16">
      <div className="container mx-auto px-6 text-center">
        
        <div className="flex justify-center">
          <h2 className="text-3xl font-bold mb-8">Seja um participante </h2>
          <FiUserPlus className="mt-3 ml-4" size={"20"}/>
        </div>

        <p className="text-lg mb-6">Torne-se um membro da federação de dama do Maranhão e participe de eventos exclusivos.</p>
        <div className="relative flex justify-center">
          <ShimmerButton className="bg-white text-teal-600 py-3 px-6 rounded-lg shadow-lg font-semibold" background="white" shimmerColor="#2de5d3" shimmerSize="0.2rem">Inscreva-se agora!</ShimmerButton>
        </div>
      </div>
    </section>
  );
}
