import React from 'react'
import styles from './projects.css'


const Projects = () => (
    <div class ="projects" id="projects">
        <h1 class="projectsheader">Recent Projects</h1>
        <section class="section2">
            
            <div class="container2">
                <div class = "box2">
                    <span></span>
                    <div class = "content2">
                        <h2>Outgrown</h2>
                        <p>E-commerce app that allows parents to buy used baby items or sell any items they have that are going unused.</p>
                        <a href="https://outgrown-app.herokuapp.com/" target="__blank">See deployed app here</a>
                        <a href="https://github.com/wa20/outgrown" target="__blank">See github repo here</a> 
                    </div>
                </div>

                <div class = "box2">
                    <span></span>
                    <div class = "content2">
                        <h2>Budget Tracker</h2>
                        <p>App that allows users to track their budget.Users input their funds and purchases and the app displays all this data in a graph</p>
                        <a href="https://frozen-tundra-37761.herokuapp.com/" target="__blank">See deployed app here</a> 
                        <a href="https://github.com/freddieb12345/BudgetTracker" target="__blank">See github repo here</a> 
                    </div>
                </div>

                <div class = "box2">
                    <span></span>
                    <div class = "content2">
                        <h2>Fitness Tracker</h2>
                        <p>App that allows users to plan and track their workouts by allowing them to input all their data from a workout. The app then displays all this data in various graphs</p>
                        <a href="https://stark-woodland-99025.herokuapp.com/?id=6123ccd49fa2ee0016fed818" target="__blank">See deployed app here</a>
                        <a href="https://github.com/freddieb12345/FitnessTracker" target="__blank">See github repo here</a>  
                    </div>
                </div>
            </div>
        </section>
        {/* <hr class="rounded"></hr> */}
    </div>

)

export default Projects