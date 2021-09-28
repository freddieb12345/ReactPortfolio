import React from 'react';
import './education.css'

const education = () => (
    <div class ="education" id="education">
        <h1 class="educationHeader">Education</h1>
        <section class="section3">
            
            <div class="container3">
                <div class = "box3">
                    <span></span>
                    <div class = "content3">
                        <h2>Cheadle Hulme School</h2>
                        <h1>2009 - 2016</h1>
                        <p> A-Levels: </p>
                        <ul class = "list">
                            <li>A - Maths</li>
                            <li>B - Physics</li>
                            <li>B - Biology</li>
                        </ul>
                        <p> Nine GCSE's from A* - C</p>
                        <ul class = "list">
                            <li>A* - Maths</li>
                            <li>A* - Physics</li>
                            <li>A - Biology</li>
                            <li>A - Chemistry</li>
                            <li>B - History</li>
                            <li>B - English Literature</li>
                            <li>C - English Language</li>
                            <li>C - Design & Technology</li>
                            <li>C - Spanish</li>
                        </ul>
                        <a href="https://www.cheadlehulmeschool.co.uk/" target="__blank">See school website</a>
                    </div>
                </div>

                <div class = "box3">
                    <span></span>
                    <div class = "content3">
                        <h2>Newcastle University</h2>
                        <h1>Mechanical Engineering - 2nd Class bEng</h1>
                        <h1>2017 - 2020</h1>
                        <p>Involved in project, coding and building a semi-autonomous remote-control vehicle.</p>
                        <p>Used coding languages native to arduino(Processing language) and matlab</p>
                        <a href="https://www.ncl.ac.uk/engineering/" target="__blank">See university website</a> 
                    </div>
                </div>

                <div class = "box3">
                    <span></span>
                    <div class = "content3">
                        <h2>Manchester University Bootcamp</h2>
                        <h1>Full Stack Web-Developer Course</h1>
                        <h1>2020 - 2021</h1>
                        <p>After developing a keen interest in coding from an engineering degree, I started a course during lockdown where I learned the skills required for a full stack web-developer</p>
                        <a href="https://www.manchester.ac.uk/study/cpd/coding-bootcamp/" target="__blank">See university website</a>
                    </div>
                </div>
            </div>
        </section>
        {/* <hr class="rounded"></hr> */}
    </div>
)

export default education