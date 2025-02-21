function Average_card({ title }) {
    return (

        <>

            <div>
                {/* Titre de la carte */ }
                <div className="relative pr-5 py-3 w-fit mb-[-27px] ml-[-20px] bg-white">
                    <h1 className="text-xl font-bold">{ title }</h1>
                </div>

                {/* Contenu de la carte */ }
                <div className="border-1 h-40 w-40 flex items-center justify-center  shadow-lg">
                    <h1 className="text-3xl font-bold">6</h1>
                </div>
            </div>
        </>

    )
}

export default Average_card;