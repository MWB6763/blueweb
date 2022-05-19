import React from 'react'

export const IntroCard = (props)=>{
  return (
    <div className={"introCard"+props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}><span className="cm-keyword">const</span> <span className="cm-def">person</span> <span className="cm-operator">=</span> {"{"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">pseudoName</span>: <span className="cm-string">"Blue"</span>, &nbsp; </span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">lastname</span>: <span className="cm-string">"Edge"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">age</span>: <span className="cm-string">"little more than the age of the earth"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">gender</span>: <span className="cm-string">"male"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">hobbies</span>: [<span className="cm-string">"breathing"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-string">"programming"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-string">"playing video games"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-string">"hiding dead bodies"</span>],</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">state</span>: <span className="cm-string">"oblivion"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">funFact</span>: <span className="cm-string">"sdrawkcab etirw nac I"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{"}"}</span></pre>
      </div>
    </div>
  )
}

export const LangCard = (props)=>{
  return (
    <div className={"introCard"+props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}><span className="cm-keyword">const</span> <span className="cm-def">skills</span> <span className="cm-operator">=</span> {"{"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Python</span> : <span className="cm-string">"Intermediate"</span>, &nbsp; &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">React</span>: <span className="cm-string">"Intermediate"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">NodeJS</span>: <span className="cm-string">"Intermediate"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">JavaScript</span>: <span className="cm-string">"Expert"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">CSS</span>: <span className="cm-string">"Intermediate"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Git</span>: <span className="cm-string">"Expert"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Azure</span>: <span className="cm-string">"Intermediate"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">MongoDB</span>: <span className="cm-string">"Expert"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Unity</span>: <span className="cm-string">"Beginner"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Blender</span>: <span className="cm-string">"Intermediate"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Life</span>: <span className="cm-string">"Beginner"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{"}"}</span></pre>
      </div>
    </div>
  )
}

export const SocialCard = (props)=>{
  const stoprop = (e)=>{
    e.stopPropagation();
  }

  return (
    <div className={"introCard"+props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}><span className="cm-keyword">const</span> <span className="cm-def">socialLinks</span> <span className="cm-operator">=</span> {"{"}</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">GitHub</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://github.com/blueedgetechno"
            target="_blank" title="GitHub">"github.com/blueedgetechno"</a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Twitter</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://twitter.com/blueedgetechno"
            target="_blank" title="Twitter">"twitter.com/blueedgetechno"
          </a>
          </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">CodeForces</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://codeforces.com/profile/blueedge"
            target="_blank" title="CodeForces">"codeforces.com/profile/blueedge"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">GMail</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="mailto:blueedgetechno@gmail.com"
            target="_blank" title="GMail">"blueedgetechno@gmail.com"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Spotify</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://open.spotify.com/user/62axxw0etmycj09el078cock0"
            target="_blank" title="Spotify">"../user/62axxw0etmycj09el078cock0"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Behance</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://behance.net/blueedgetechno"
            target="_blank" title="Behance">"behance.net/blueedgetechno"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">CodePen</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://codepen.io/blueedgetechno"
            target="_blank" title="CodePen">"codepen.io/blueedgetechno"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Dev</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://dev.to/blueedgetechno"
            target="_blank" title="Dev">"dev.to/blueedgetechno"
          </a>
        </span></span>,</pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">StackOverflow</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://stackoverflow.com/users/12115721/blue-edge"
            target="_blank" title="StackOverflow">"../users/12115721/blue-edge"
          </a>
        </span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">Discord</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://discord.com/app"
            target="_blank" title="Discord">"Blue Edge#1017"
          </a>
        </span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">YouTube</span>: <span className="cm-string">
          <a className="sociolink" onClick={stoprop} href="https://youtube.com/c/BlueEdgeTechno"
            target="_blank" title="YouTube">"../c/BlueEdgeTechno"
          </a>
        </span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{"}"}</span></pre>
      </div>
    </div>
  )
}

export const ProjectCard = (props)=>{
  return (
    <div className={"introCard"+props.curState}>
      <div className="circles">
        <div className="navCircle red"></div>
        <div className="navCircle yellow"></div>
        <div className="navCircle green"></div>
      </div>
      <div className="procode">
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}><span className="cm-keyword">const</span> <span className="cm-def">projects</span> <span className="cm-operator">=</span> {"{"} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">BlueBlogs</span>: <span className="cm-string">"A social blogging platform for nerds"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="cm-operator">+</span><span className="cm-string">"made in flask"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">TheINTELLECTS</span>: <span className="cm-string">"A platform meant for engineering"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{" "}<span className="cm-tab" role="presentation"Cm-text="	">{" "}</span><span className="cm-tab" role="presentation"Cm-text="	">{"   "}</span> <span className="cm-operator">+</span><span className="cm-string">"pupils made in expressJs, ejs &amp; mongoDB"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">codeblue</span>:<span className="cm-string">"Atom package to help during codeforces"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{" "}<span className="cm-tab" role="presentation"Cm-text="	">{" "}</span><span className="cm-tab" role="presentation"Cm-text="	">{"   "}</span> &nbsp; <span className="cm-operator">+</span><span className="cm-string">"contest, made in ReactJs and Less.js"</span>,</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;</span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}> &nbsp;<span className="cm-property">BlueChats</span>: <span className="cm-string">"A desktop messaging application"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{" "}<span className="cm-tab" role="presentation"Cm-text="	">{" "}</span><span className="cm-tab" role="presentation"Cm-text="	">{"   "}</span> &nbsp;<span className="cm-operator">+</span><span className="cm-string">"made in Electron, expressJs &amp; MongoDB"</span></span></pre>
        <pre className="CodeMirror-line" role="presentation"><span role="presentation" style={{paddingRight: '0.1px'}}>{"}"} <span className="cm-comment">// And that's just the tip of the iceberg</span></span></pre>
      </div>
    </div>
  )
}
