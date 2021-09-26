import React from 'react';
import Fred from '../../assets/fred.png'
import styles from './hero.css'

const Hero = () => (
  <div>
    <section className="section">
      <div class="container">
        <div class ="card">
          <div class="content">
            <h2>Freddie Brewin</h2>
            <p>
              Full stack web developer
            </p>
            <p>
              Mechanical engineering graduate
            </p>
            <p>
              Freelance CAD modeler / 3D printer
            </p>
          </div>
          <img src={Fred}></img>  
        </div>
      </div>
    </section>
    <hr class="rounded"></hr>
  </div>
  )
  
  export default Hero