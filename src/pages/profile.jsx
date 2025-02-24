import Card from "../components/profil/card.jsx";
import { useNavigate } from "react-router-dom";

function Profile() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    return (

        <>
            <div className="grid items-center justify-center grid-cols-2 gap-10">

                {/* Colonne droite */}
                <div>
                    <Card
                        width="w-100"
                        height="h-150"
                        first_name="Colin"
                        last_name="Regamey"
                        role="Apprenti"
                        email="colin.regamey@jobtrek.ch"
                    />
                </div>

                {/* Colonne gauche */}
                <div className="grid grid-rows-2 gap-y-10">
                    <div className="container-fluid">
                        <Card
                            width="w-100"
                            height="h-70"
                            first_name="Bastien"
                            last_name="Nicoud"
                            role="Formateur"
                            email="bastien.nicoud@jobtrek.ch"
                        />
                    </div>
                    <div className="container-fluid">
                        <Card
                            width="w-100"
                            height="h-70"
                        />
                    </div>
                </div>
<div className="col-start-1 col-end-3 text-center">
                <button onClick={handleLogout} className="bg-[#141e66] text-white px-10 py-2 rounded-md border-1 hover:bg-[#141e66ba] transition cursor-pointer">Se déconnecter</button>
</div>
            </div>
        </>

    )

}

export default Profile