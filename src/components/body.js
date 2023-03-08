import React from 'react'
import { Link } from "react-router-dom";

export default function body() {
     return (
          <>
               <section class="section1">
                    <div class="introduction">
                         <h1 class="title">
                              Designer &amp; Front-end Developer
                         </h1>
                         <h2 class="subtitle">
                              I design and code beautifully simple things, and I love what I do.
                         </h2>
                         <img class="avatar" src="img/avatar.svg" alt='...' />
                    </div>
                    <div><img class="laptop" src="img/img.svg" alt='...' /></div>
               </section>
               <section class="section2">
                    <div>
                         <h1 class="title2">Hi, I’m Omkar. Nice to meet you.</h1>
                         <p class="subtitle2">
                              I am a student at NBN sinhgad college of engineering.
                         </p>
                    </div>
               </section>
               <section class="section3">
                    <div class="skill">
                         <div class="designer">
                              <img src="img/designer.svg" alt='...' />
                              <p class="primary">Designer</p>
                              <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                              <p class="primary">Things I enjoy designing:</p>
                              <p>UX, UI, Web, Mobile, Apps, Logos</p>
                              <p class="primary">Design Tools:</p>
                              <ul>
                                   <li>Balsamiq Mockups</li>
                                   <li>Figma</li>
                                   <li>Invision</li>
                                   <li>Marvel</li>
                                   <li>Pen &amp; Paper</li>
                                   <li>Sketch</li>
                                   <li>Webflow</li>
                                   <li>Zeplin</li>
                              </ul>
                         </div>
                         <div class="web">
                              <img src="img/frontend.svg" alt='...' />
                              <p class="primary">Web Development</p>
                              <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                              <p class="primary">Languages I speak:</p>
                              <p>HTML, Pug, Slim, CSS, Sass, Less</p>
                              <p class="primary">Dev Tools:</p>
                              <ul>
                                   <li>Atom</li>
                                   <li>Bitbucket</li>
                                   <li>Bootstrap</li>
                                   <li>Bulma</li>
                                   <li>Codekit</li>
                                   <li>Codepen</li>
                                   <li>Github</li>
                                   <li>Gitlab</li>
                                   <li>Terminal</li>
                              </ul>
                         </div>
                         <div class="android">
                              <img src="img/mentor.svg" alt='...' />
                              <p class="primary">Android Development</p>
                              <p>I genuinely care about people, and love helping fellow designers work on their craft.</p>
                              <p class="primary">Experiences I draw from:</p>
                              <p>UX/UI, Product design, Freelancing</p>
                              <p class="primary">Mentor Stats:</p>
                              <ul>
                                   <li>5 years experience</li>
                                   <li>26 short courses</li>
                                   <li>42 bootcamps</li>
                                   <li>125+ students</li>
                                   <li>1,400+ mentor sessions</li>
                                   <li>60+ group critiques</li>
                                   <li>12,000+ comments</li>
                              </ul>
                         </div>
                    </div>
               </section>
               <section class="section4">
                    <div>
                         <div class="projectinfo">
                              <h1 class="title2">My Recent Work</h1>
                              <h2 class="subtitle2">Here are a few design projects I've worked on recently. Want to see more?
                                   <a href="https://google.com">Email Me</a>
                              </h2>
                         </div>
                         <div class="project">
                              <div class="image">
                                   <img class="image-img" src="img/android-development.jpg" alt='...' />
                                   <div class="image-overlay">
                                        <div>
                                             <p class="image-title"> High-end, custom residential renovaters serving Fraser Valley
                                                  homeowners.</p>
                                             <a href="https://google.com"><span>Visit Website</span></a>
                                             <div><button class="button">Visit project</button></div>
                                        </div>
                                   </div>
                              </div>
                              <div class="image">
                                   <img class="image-img" src="img/Game_Development.png" alt="error" />
                                   <div class="image-overlay">
                                        <div>
                                             <p class="image-title"> High-end, custom residential renovaters serving Fraser Valley
                                                  homeowners.</p>
                                             <a href="https://google.com"><span>Visit Website</span></a>
                                             <div><button class="button">Visit project</button></div>
                                        </div>
                                   </div>
                              </div>
                              <div class="image">
                                   <img class="image-img" src="img/web-design.jpg" alt="error" />
                                   <div class="image-overlay">
                                        <div>
                                             <p class="image-title"> High-end, custom residential renovaters serving Fraser Valley
                                                  homeowners.</p>
                                             <a href="https://google.com"><span>Visit Website</span></a>
                                             <div><button class="button">Visit project</button></div>
                                        </div>
                                   </div>
                              </div>
                              <div class="image">
                                   <img class="image-img" src="img/android-development.jpg" alt="error" />
                                   <div class="image-overlay">
                                        <div>
                                             <p class="image-title"> High-end, custom residential renovaters serving Fraser Valley
                                                  homeowners.</p>
                                             <a href="https://google.com"><span>Visit Website</span></a>
                                             <div><button class="button">Visit project</button></div>
                                        </div>
                                   </div>
                              </div>
                              <div class="image">
                                   <img class="image-img" src="img/Game_Development.png" alt="error" />
                                   <div class="image-overlay">
                                        <div>
                                             <p class="image-title"> High-end, custom residential renovaters serving Fraser Valley
                                                  homeowners.</p>
                                             {/*  <a href="https://google.com"><span>Visit Website</span></a> */}
                                             <div><button class="button">Visit project</button></div>
                                        </div>
                                   </div>
                              </div>
                              <div class="image">
                                   <img class="image-img" src="img/web-design.jpg" alt="error" />
                                   <div class="image-overlay">
                                        <div>
                                             <p class="image-title"> High-end, custom residential renovaters serving Fraser Valley
                                                  homeowners.</p>
                                             {/* <a href="https://google.com"><span>Visit Website</span></a> */}
                                             <div><button class="button">Visit project</button></div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <Link to='/project'><button class="button4">View More</button></Link>
                    </div>
               </section>
               <section class="section8">
                    <div>
                         <p class="title2">I'm proud to have do Internship in some</p>
                         <p class="title2"> awesome companies:</p>
                    </div>
                    <div class="internship">
                         <div>
                              <figure><img src="img/internship/briteweb.svg" alt='...' /></figure>
                         </div>
                         <div>
                              <figure><img src="img/internship/chronicled.svg" alt='...' /></figure>
                         </div>
                         <div>
                              <figure><img src="img/internship/domain7.svg" alt='...' /></figure>
                         </div>
                    </div>
                    <div class="internship">
                         <div>
                              <figure><img src="img/internship/goodkind.svg" alt='...' /></figure>
                         </div>
                         <div>
                              <figure><img src="img/internship/redstamp.svg" alt='...' /></figure>
                         </div>
                         <div>
                              <figure><img src="img/internship/serpmetrics.svg" alt='...' /></figure>
                         </div>
                    </div>
               </section >
               <section class="section5">
                    <div>
                         <p class="title2">My Blog</p>
                         <p class="subtitle2">I'm a bit of a digital product junky. Over the years, I've used
                              hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it
                              would be a fun challenge to try designing and building my own.
                         </p>
                    </div>
               </section>
               <section class="section6">
                    <div class="blog">
                         <div class="blogpost">
                              <img src="img/blog/basin.svg" alt=".." />
                              <div>
                                   <p>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.
                                   </p>
                              </div>
                              <div><button class="button5">View Post</button></div>
                         </div>
                         <div class="blogpost">
                              <img src="img/blog/houston.svg" alt=".." />
                              <div>
                                   <p>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.
                                   </p>
                              </div>
                              <div><button class="button5">View Post</button></div>
                         </div>
                         <div class="blogpost">
                              <img src="img/blog/dovetail.svg" alt=".." />
                              <div>
                                   <p>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.
                                   </p>
                              </div>
                              <div><button class="button5">View Post</button></div>
                         </div>
                         <div class="blogpost">
                              <img src="img/blog/kybercore.svg" alt=".." />
                              <div>
                                   <p>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.
                                   </p>
                              </div>
                              <div><button class="button5">View Post</button></div>
                         </div>
                         <div class="blogpost">
                              <img src="img/blog/userforge.svg" alt=".." />
                              <div>
                                   <p>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.
                                   </p>
                              </div>
                              <div><button class="button5">View Post</button></div>
                         </div>
                         <div class="blogpost">
                              <img src="img/blog/ylbuilders.svg" alt=".." />
                              <div>
                                   <p>Next level plug and play chassis systems for custom do-it-yourself lightsaber builds.
                                   </p>
                              </div>
                              <div><button class="button5">View Post</button></div>
                         </div>

                    </div>
                    <Link to='/blog'><button class="button4">View More</button></Link>
               </section>
          </ >
     )
}
