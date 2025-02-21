import Popup from "reactjs-popup";

function AddGrade() {

    return (

        <>

            <div className="flex items-center justify-center">
                <Popup
                    trigger={
                        <button className="bg-[#141e66] text-white px-10 py-2 rounded-md hover:bg-[#8fc62e] hover:text-[#141e66] transition">
                            Ajouter note
                        </button>
                    }
                    modal
                    nested
                >
                    {close => (
                        <div>
                            <div className="bg-white w-[400px] p-6 rounded-lg shadow-lg flex flex-col ml-[225px]">
                                <h2 className="text-xl font-bold mb-4 text-center">Ajout d'une note</h2>

                                {/* Module */}
                                <label className="font-medium mb-1">Module :</label>
                                <select className="w-full border rounded-md p-2 mb-3">
                                    <option value="117">Module 117 - Infrastructure</option>
                                    <option value="122">Module 122 - Automatisation</option>
                                    {/* Ajoute d'autres modules si nécessaire */}
                                </select>

                                {/* Semestre */}
                                <label className="font-medium mb-1">Semestre :</label>
                                <select className="w-full border rounded-md p-2 mb-3">
                                    <option value="1">Semestre 1</option>
                                    <option value="2">Semestre 2</option>
                                    <option value="3">Semestre 3</option>
                                    <option value="4">Semestre 4</option>
                                </select>

                                {/* Upload PDF */}
                                <label className="font-medium mb-1">Ajouter un PDF :</label>
                                <input type="file" className="w-full border rounded-md p-2 mb-3" />

                                {/* Note */}
                                <label className="font-medium mb-1">Note :</label>
                                <select className="w-full border rounded-md p-2 mb-4">
                                    <option value="6">6</option>
                                    <option value="5.5">5.5</option>
                                    <option value="5">5</option>
                                    <option value="4.5">4.5</option>
                                    <option value="4">4</option>
                                    <option value="3.5">3.5</option>
                                    <option value="3">3</option>
                                    <option value="2.5">2.5</option>
                                    <option value="2">2</option>
                                    <option value="1.5">1.5</option>
                                    <option value="1">1</option>
                                </select>

                                {/* Boutons */}
                                <div className="flex justify-between">
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                                        onClick={() => close()}
                                    >
                                        Annuler
                                    </button>
                                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                                        onClick={() => close()}
                                    >
                                        Ajouter
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </Popup>
            </div>

        </>

    )
}

export default AddGrade;