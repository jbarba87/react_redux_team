import React from 'react'
import { connect } from 'react-redux'

const Suplentes = ({suplentes, quitarSuplente}) => {
  return (
    <section>
      <h2>Suplentes</h2>
      <div className="cancha">
      {
            suplentes.map( s => (
              <article className='suplente' key={s.id}>
                <img src={s.avatar} alt={s.first_name} />
                <div>
                  <button onClick={()=>quitarSuplente(s)}>X</button>
                  <p>{s.first_name} {s.last_name}</p>
                </div>
              </article>

            ))
          }
      </div>
    </section>
  )
}
const mapStateToProps = state => ({
  suplentes: state.suplentes
})
const mapDispatchToProps = dispatch => ({
  quitarSuplente(jugador){
    dispatch({
      type: "QUITAR_SUPLENTE",
      jugador
    })
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(Suplentes)