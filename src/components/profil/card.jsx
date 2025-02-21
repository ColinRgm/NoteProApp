function Card({
                  width,
                  height,
                  first_name,
                  last_name,
                  role,
                  email
              }) {
    return (

        <>

            <div className={ `border-1 ${ width } ${ height } flex items-center justify-center flex-col  shadow-lg` }>
                <p>{ first_name } { last_name }</p>
                <p>{ role }</p>

                <p>
                    <a href={`mailto:${email}`}>{email}</a>
                </p>
            </div>

        </>

    )
}

export default Card;