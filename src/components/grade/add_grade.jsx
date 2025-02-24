import Popup from "reactjs-popup";

function AddGrade() {

    /* Fonction pour ajouter les :
    *
    * Les modules
    * Les semestres
    *
    * -> dans le select coresspondant
    *
    */



    /* Fonction pour récupérer les valeurs de :
    *
    * Les modules
    * Les semestres
    *
    * -> Les ajouter dans la base de données
    *
    */

    return (

        <>

            <div className="flex items-center justify-center">
                <Popup
                    trigger={
                        <button
                            className="bg-[#141e66] text-white px-10 py-2 rounded-md border-1 hover:bg-[#141e66ba] transition cursor-pointer">
                            Ajouter note
                        </button>
                    }
                    modal
                    nested
                >
                    { close => (
                        <div
                            className="fixed inset-0 flex items-center justify-center ml-[225px] bg-black-100 bg-opacity-10 backdrop-blur-md">
                            {/* Contenu de la popup */ }
                            <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg flex flex-col">
                                <h2 className="text-xl font-bold mb-4 text-center">Ajout d'une note</h2>


                                {/* Module */ }
                                <label className="font-medium mb-1">Module :</label>
                                <select className="w-full border rounded-md p-2 mb-3">
                                    <option value="117">Module 117 - Infrastructure</option>
                                </select>


                                {/* Semestre */ }
                                <label className="font-medium mb-1">Semestre :</label>
                                <select className="w-full border rounded-md p-2 mb-3">
                                    <option value="1">Semestre 1</option>
                                </select>


                                {/* PDF */ }
                                <label className="font-medium mb-1">Ajouter un PDF :</label>
                                <input type="file" className="w-full border rounded-md p-2 mb-3"/>


                                {/* Note */ }
                                <label className="font-medium mb-1">Note :</label>
                                <select className="w-full border rounded-md p-2 mb-4">
                                    <option value="6">6</option>
                                </select>


                                {/* Boutons */ }
                                <div className="flex justify-between">
                                    <button
                                        className="bg-red-400 text-white px-4 py-2 rounded-md transition cursor-pointer"
                                        onClick={ () => close() }
                                    >
                                        Annuler
                                    </button>

                                    <button
                                        className="bg-[#8fc62e] text-white px-4 py-2 rounded-md cursor-pointer transition"
                                        onClick={ () => close() }
                                    >
                                        Ajouter
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) }
                </Popup>
            </div>

        </>

    );

}


export default AddGrade;