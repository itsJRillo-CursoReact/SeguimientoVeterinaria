import { useEffect } from "react";
import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente}) => {

  /* Reto 2
    useEffect(() => {
      if(pacientes.length > 0){
        console.log("nuevo paciente")
      }
    }, [pacientes])
  */

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {pacientes && pacientes.length ? (
        // Si hay pacientes
        <>
          <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
          <p className="text-center text-xl mt-5 mb-10">
            Administra tus {""}
            <span className="text-amber-400 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map(paciente => (
              <Paciente 
            key={paciente.id} 
            paciente={paciente} 
            setPaciente={setPaciente} 
            eliminarPaciente={eliminarPaciente}
            />
          ))}

        </>
      ) : (
        // No hay pacientes
        <>
          <h2 className="font-black text-center text-3xl">Listado Pacientes</h2>
          <p className="text-center text-xl mt-5 mb-10">
            Comienza agregando pacientes {""}
            <span className="text-amber-400 font-bold">
              y aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
