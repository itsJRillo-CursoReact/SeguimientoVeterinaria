const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  const {nombre,propietario,email,fecha,sintomas,id} = paciente

  const handleEliminar = () => {
    const res = confirm("Deseas eliminar este paciente?");
    if (res) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre:
        <span className="font-normal normal-case"> {nombre} </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:
        <span className="font-normal normal-case">
          {" "}
          {propietario}{" "}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        E-mail:
        <span className="font-normal normal-case"> {email} </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta:
        <span className="font-normal normal-case"> {fecha}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:
        <span className="font-normal normal-case"> {sintomas}</span>
      </p>

      <div className="flex justify-between mt-10">
        <button
          onClick={() => {
            setPaciente(paciente);
          }}
          className="py-2 px-10 bg-amber-400 hover:bg-amber-500 text-white uppercase font-bold rounded-md"
        >
          Editar
        </button>

        <button
          onClick={handleEliminar}
          className="py-2 px-10 bg-red-400 hover:bg-red-500 text-white uppercase font-bold rounded-md"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
