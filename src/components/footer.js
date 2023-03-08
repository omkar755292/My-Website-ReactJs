import React from 'react'
import { Link } from "react-router-dom";

export default function footer() {
  return (
    <>
      <section class="section9">
        <div>
          <h1 class="tital">Start a project</h1>
        </div>
        <div>
          <p class="subtital"> Interested in creating beautifull Website</p>
          <p class="subtital"> I’m always open to discussing product design work , Just share your Idea with
            me.</p>
        </div>
        <div><Link to='/contact'> <button class="button2">Lets Do This</button></Link></div>
      </section>
      <footer >
        <section class="footer">
          <div>
            <label>Web Technology Project</label>
            <ul>
              <li>
                <a href="https://www.google.com">Free Meeting Scheduler App</a>
              </li>

              <li>
                <a href="https://www.google.com">Social Media Tools</a>
              </li>
              <li>
                <a href="https://www.google.com">Free Meeting Scheduler App</a>
              </li>

              <li>
                <a href="https://www.google.com">Social Media Tools</a>
              </li>
              <li>
                <a href="https://www.google.com">Free Meeting Scheduler App</a>
              </li>

              <li>
                <a href="https://www.google.com">Social Media Tools</a>
              </li>
            </ul>
          </div>
          <div class="middle">
            <label>Machine Learning Project</label>
            <ul>
              <li>
                <a href="https://www.google.com">Free Meeting Scheduler App</a>
              </li>

              <li>
                <a href="https://www.google.com">Social Media Tools</a>
              </li>
              <li>
                <a href="https://www.google.com">Free Meeting Scheduler App</a>
              </li>

              <li>
                <a href="https://www.google.com">Social Media Tools</a>
              </li>
              <li>
                <a href="https://www.google.com">Free Meeting Scheduler App</a>
              </li>

              <li>
                <a href="https://www.google.com">Social Media Tools</a>
              </li>
            </ul>
          </div>
          <div>
            <label>Android development Project</label>
            <ul>
              <li>
                <a href="https://www.google.com">Free Meeting Scheduler App</a>
              </li>

              <li>
                <a href="https://www.google.com">Social Media Tools</a>
              </li>
              <li>
                <a href="https://www.google.com">Free Meeting Scheduler App</a>
              </li>

              <li>
                <a href="https://www.google.com">Social Media Tools</a>
              </li>
              <li>
                <a href="https://www.google.com">Free Meeting Scheduler App</a>
              </li>

              <li>
                <a href="https://www.google.com">Social Media Tools</a>
              </li>
            </ul>
          </div>
        </section>
        <section class="sociallogo">
          <ul>
            <a href="https://www.facebook.com">Facebook</a>

            <a href="https://www.instagram.com">Instagram</a>

            <a href="https://youtube.com">Youtube</a>

            <a href="https://www.twitter.com">twitter</a>

            <a href="https://www.linkedin.com">linkedin</a>

            <a href="https://Github.com">Github</a>

          </ul>
        </section>
        <section class="copyright">
          <div>
            <p>Copyright © 2021 HubSpot, Inc.</p>
            <ul>

              <li><a href="https://google.com">Legal Stuff</a></li>

              <li><a href="https://google.com">Privacy Policy</a></li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  )
}
