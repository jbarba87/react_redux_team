import React from 'react'
import { connect } from 'react-redux';

const Titulares = ({titulares, quitarTitular}) => {
  return (
    <section>
      <h2>Titulares</h2>
      <div className="cancha">
      {
            titulares.map( t => (
              <article className='titular'  key={t.id}>
                <img src={t.avatar} alt={t.first_name} />
                <div>
                  <button onClick={() => quitarTitular(t)}>X</button>
                  <p>{t.first_name} {t.last_name}</p>
                </div>
              </article>

            ))
          }
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  titulares: state.titulares
})
const mapDispatchToProps = dispatch => ({
  quitarTitular(jugador){
    dispatch({
      type: "QUITAR_TITULAR",
      jugador
    })
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Titulares)