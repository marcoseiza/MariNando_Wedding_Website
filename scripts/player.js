let video_links = ['https://www.youtube.com/embed/videoseries?list=PLPVHEo5j6xenrnHfc6SRx3VmafRPsbU_j', 'https://www.youtube.com/embed/videoseries?list=PLPVHEo5j6xelnAuTR1dwP_jXRoWLEAZuy']
    URLparam = new URLSearchParams(window.location.search),
    URLhash = window.location.hash;

let player = `
<div class="player_shadow">
<input type="checkbox" name="rsvp" id="rsvp_checkbox">
<div class="player">
  <div class="player__content">
    <span>mariana + fernando</span>
    <a id="close_rsvp">
      <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 40 40">
        <line x1="2" y1="2" x2="38" y2="38"/>
        <line x1="38" y1="2" x2="2" y2="38"/>
      </svg>
    </a>
    <iframe id="media_player" src="https://www.youtube.com/embed/videoseries?list=PLPVHEo5j6xenrnHfc6SRx3VmafRPsbU_j" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <button id="player_button">
      <div class="button_menu">
        <a target="_blank" rel="noopener noreferrer" href="Mariana and Fernando's Wedding_pd59r2s2qm7sl2hicrtpm2rrs4@group.calendar.google.com.ics">
          <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 1000 1187.198" version="1.1"  id="svg2" inkscape:version="0.91 r13725" sodipodi:docname="Apple_1998.svg">
            <path d="m 979.04184,925.18785 c -17.95397,41.47737 -39.20563,79.65705 -63.82824,114.75895 -33.56298,47.8528 -61.04356,80.9761 -82.22194,99.3698 -32.83013,30.192 -68.00529,45.6544 -105.67203,46.5338 -27.04089,0 -59.6512,-7.6946 -97.61105,-23.3035 -38.08442,-15.5358 -73.08371,-23.2303 -105.08578,-23.2303 -33.56296,0 -69.55888,7.6945 -108.06101,23.2303 -38.5608,15.6089 -69.62484,23.7432 -93.37541,24.5493 -36.12049,1.5389 -72.1237,-14.3632 -108.06101,-47.7796 -22.93711,-20.0059 -51.62684,-54.3017 -85.99592,-102.8874 C 92.254176,984.54592 61.937588,924.38175 38.187028,855.7902 12.750995,781.70252 0,709.95986 0,640.50361 0,560.94181 17.191859,492.32094 51.626869,434.81688 78.689754,388.62753 114.69299,352.19192 159.75381,325.44413 c 45.06086,-26.74775 93.74914,-40.37812 146.18212,-41.25019 28.68971,0 66.3125,8.8744 113.06613,26.31542 46.62174,17.49964 76.55727,26.37404 89.68198,26.37404 9.8124,0 43.06758,-10.37669 99.4431,-31.06405 53.31237,-19.18512 98.30724,-27.12887 135.16787,-23.99975 99.8828,8.06098 174.92313,47.43518 224.82789,118.37174 -89.33023,54.12578 -133.51903,129.93556 -132.63966,227.18753 0.8061,75.75115 28.28668,138.78795 82.2952,188.8393 24.47603,23.23022 51.81008,41.18421 82.22186,53.93522 -6.59525,19.12648 -13.557,37.44688 -20.95846,55.03446 z M 749.96366,23.751237 c 0,59.37343 -21.69138,114.810233 -64.92748,166.121963 -52.17652,60.99961 -115.28658,96.24803 -183.72426,90.68597 -0.87204,-7.12298 -1.37769,-14.61967 -1.37769,-22.49743 0,-56.99843 24.81315,-117.99801 68.87738,-167.873453 21.99909,-25.25281 49.978,-46.25018 83.90738,-63.00018 C 686.57507,10.688027 718.59913,1.5631274 748.71783,5.2734376e-4 749.59727,7.9378274 749.96366,15.875627 749.96366,23.750467 Z" id="path4" inkscape:connector-curvature="0"/>
          </svg>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://calendar.google.com/calendar/r/eventedit?text=Mariana+and+Fernando%27s+Wedding+Day&dates=20210814/20210815&details=For+more+details,+vist+our+website:+https://www.marinando.com&location=Riverside,+Greenwich,+CT,+USA">            
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
          </svg>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="outlook_calendar.html">
          <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-2.61977004 -2.61977004 92.56520808 92.83416708" id="svg8375">
            <defs id="defs8377" />
            <path d="M 0,12.40183 35.68737,7.5416 35.70297,41.96435 0.03321,42.16748 z m 35.67037,33.52906 0.0277,34.45332 -35.66989,-4.9041 -0.002,-29.77972 z M 39.99644,6.90595 87.31462,0 l 0,41.527 -47.31818,0.37565 z M 87.32567,46.25471 87.31457,87.59463 39.9964,80.91625 39.9301,46.17767 z" id="path13" />
          </svg>
        </a>
      </div>
      <div class="button_content">
        <div class="calendar_icon">
          <span id="date_form">14</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.47 74.553">
            <g id="Icon_feather-calendar" transform="translate(2 2) scale(0.98)">
              <path id="Path_3" data-name="Path 3" class="cls-1" d="M11.108,6H57.362a6.762,6.762,0,0,1,6.608,6.907V61.253a6.762,6.762,0,0,1-6.608,6.907H11.108A6.762,6.762,0,0,1,4.5,61.253V12.907A6.762,6.762,0,0,1,11.108,6Z" transform="translate(-4.5 2.394)"/>
              <path id="Path_4" data-name="Path 4" class="cls-1" d="M24,3V19.788" transform="translate(18.95 -3)"/>
              <path id="Path_5" data-name="Path 5" class="cls-1" d="M12,3V19.788" transform="translate(4.519 -3)"/>
              <path id="Path_6" data-name="Path 6" class="cls-1" d="M4.5,15H63.97" transform="translate(-4.5 13.221)"/>
            </g>
          </svg>
        </div>
        <span>jot it down</span> 
      </div>
    </button>
    <label for="rsvp_checkbox" id="rsvp"><span></span>
      <svg id="rsvp_arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.996 104.339">
        <g data-name="Icon feather-arrow-down" transform="translate(2.828 2)">
          <path id="Path_9" data-name="Path 9" d="M18,7.5V107.839" transform="translate(32.169 -7.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
          <path id="Path_10" data-name="Path 10" d="M107.839,18,57.669,68.169,7.5,18" transform="translate(-7.5 32.169)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
        </g>
      </svg>
    </label>
  </div>
  <div class="player__rsvp">
    <form id="rsvp_form" name="rsvp_form">
      <span>
        we want to stay in contact with you!
      </span>
      <input type="text" pattern="[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*" name="name" id="rsvp_name" placeholder="FULL NAME *" required>
      <input type="email" name="email" id="rsvp_email" placeholder="EMAIL *" required>
      <input type="tel" pattern="[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[- ./0-9]*" name="phone" id="rsvp_phone" placeholder="PHONE">
      <input type="text" pattern="[0-9a-zA-Z .,#'&:;()\\-º/]+" name="address" id="rsvp_address" placeholder="ADDRESS">
      <button id="rsvp_submit" type="submit">Submit
        <svg id="rsvp_submit_arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.996 104.339" style="transform: rotate(-90deg);">
          <g data-name="Icon feather-arrow-down" transform="translate(2.828 2)">
            <path id="Path_9" data-name="Path 9" d="M18,7.5V107.839" transform="translate(32.169 -7.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
            <path id="Path_10" data-name="Path 10" d="M107.839,18,57.669,68.169,7.5,18" transform="translate(-7.5 32.169)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
          </g>
        </svg>
      </button>
    </form>
  </div>
</div>
</div>
`

let playeres = `
<div class="player_shadow">
<input type="checkbox" name="rsvp" id="rsvp_checkbox">
<div class="player">
  <div class="player__content">
    <span>mariana + fernando</span>
    <a id="close_rsvp">
      <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 40 40">
        <line x1="2" y1="2" x2="38" y2="38"/>
        <line x1="38" y1="2" x2="2" y2="38"/>
      </svg>
    </a>
    <iframe id="media_player" src="https://www.youtube.com/embed/videoseries?list=PLPVHEo5j6xenrnHfc6SRx3VmafRPsbU_j" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <button id="player_button">
      <div class="button_content">
        <div class="calendar_icon">
          <span id="date_form">14</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.47 74.553">
            <g id="Icon_feather-calendar" transform="translate(2 2) scale(0.98)">
              <path id="Path_3" data-name="Path 3" class="cls-1" d="M11.108,6H57.362a6.762,6.762,0,0,1,6.608,6.907V61.253a6.762,6.762,0,0,1-6.608,6.907H11.108A6.762,6.762,0,0,1,4.5,61.253V12.907A6.762,6.762,0,0,1,11.108,6Z" transform="translate(-4.5 2.394)"/>
              <path id="Path_4" data-name="Path 4" class="cls-1" d="M24,3V19.788" transform="translate(18.95 -3)"/>
              <path id="Path_5" data-name="Path 5" class="cls-1" d="M12,3V19.788" transform="translate(4.519 -3)"/>
              <path id="Path_6" data-name="Path 6" class="cls-1" d="M4.5,15H63.97" transform="translate(-4.5 13.221)"/>
            </g>
          </svg>
        </div>
        <span>anótalo</span> 
      </div>
      <div class="button_menu">
        <a target="_blank" rel="noopener noreferrer" href="Mariana and Fernando's Wedding_pd59r2s2qm7sl2hicrtpm2rrs4@group.calendar.google.com.ics">
          <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 1000 1187.198" version="1.1"  id="svg2" inkscape:version="0.91 r13725" sodipodi:docname="Apple_1998.svg">
            <path d="m 979.04184,925.18785 c -17.95397,41.47737 -39.20563,79.65705 -63.82824,114.75895 -33.56298,47.8528 -61.04356,80.9761 -82.22194,99.3698 -32.83013,30.192 -68.00529,45.6544 -105.67203,46.5338 -27.04089,0 -59.6512,-7.6946 -97.61105,-23.3035 -38.08442,-15.5358 -73.08371,-23.2303 -105.08578,-23.2303 -33.56296,0 -69.55888,7.6945 -108.06101,23.2303 -38.5608,15.6089 -69.62484,23.7432 -93.37541,24.5493 -36.12049,1.5389 -72.1237,-14.3632 -108.06101,-47.7796 -22.93711,-20.0059 -51.62684,-54.3017 -85.99592,-102.8874 C 92.254176,984.54592 61.937588,924.38175 38.187028,855.7902 12.750995,781.70252 0,709.95986 0,640.50361 0,560.94181 17.191859,492.32094 51.626869,434.81688 78.689754,388.62753 114.69299,352.19192 159.75381,325.44413 c 45.06086,-26.74775 93.74914,-40.37812 146.18212,-41.25019 28.68971,0 66.3125,8.8744 113.06613,26.31542 46.62174,17.49964 76.55727,26.37404 89.68198,26.37404 9.8124,0 43.06758,-10.37669 99.4431,-31.06405 53.31237,-19.18512 98.30724,-27.12887 135.16787,-23.99975 99.8828,8.06098 174.92313,47.43518 224.82789,118.37174 -89.33023,54.12578 -133.51903,129.93556 -132.63966,227.18753 0.8061,75.75115 28.28668,138.78795 82.2952,188.8393 24.47603,23.23022 51.81008,41.18421 82.22186,53.93522 -6.59525,19.12648 -13.557,37.44688 -20.95846,55.03446 z M 749.96366,23.751237 c 0,59.37343 -21.69138,114.810233 -64.92748,166.121963 -52.17652,60.99961 -115.28658,96.24803 -183.72426,90.68597 -0.87204,-7.12298 -1.37769,-14.61967 -1.37769,-22.49743 0,-56.99843 24.81315,-117.99801 68.87738,-167.873453 21.99909,-25.25281 49.978,-46.25018 83.90738,-63.00018 C 686.57507,10.688027 718.59913,1.5631274 748.71783,5.2734376e-4 749.59727,7.9378274 749.96366,15.875627 749.96366,23.750467 Z" id="path4" inkscape:connector-curvature="0"/>
          </svg>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://calendar.google.com/calendar/r/eventedit?text=Mariana+and+Fernando%27s+Wedding+Day&dates=20210814/20210815&details=For+more+details,+vist+our+website:+https://www.marinando.com&location=Riverside,+Greenwich,+CT,+USA">            
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"/>
          </svg>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="outlook_calendar.html">
          <svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-2.61977004 -2.61977004 92.56520808 92.83416708" id="svg8375">
            <defs id="defs8377" />
            <path d="M 0,12.40183 35.68737,7.5416 35.70297,41.96435 0.03321,42.16748 z m 35.67037,33.52906 0.0277,34.45332 -35.66989,-4.9041 -0.002,-29.77972 z M 39.99644,6.90595 87.31462,0 l 0,41.527 -47.31818,0.37565 z M 87.32567,46.25471 87.31457,87.59463 39.9964,80.91625 39.9301,46.17767 z" id="path13" />
          </svg>
        </a>
      </div>
    </button>
    <label for="rsvp_checkbox" id="rsvp"><span class="es"></span>
      <svg id="rsvp_arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.996 104.339">
        <g data-name="Icon feather-arrow-down" transform="translate(2.828 2)">
          <path id="Path_9" data-name="Path 9" d="M18,7.5V107.839" transform="translate(32.169 -7.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
          <path id="Path_10" data-name="Path 10" d="M107.839,18,57.669,68.169,7.5,18" transform="translate(-7.5 32.169)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
        </g>
      </svg>
    </label>
  </div>
  <div class="player__rsvp">
    <form id="rsvp_form" name="rsvp_form">
      <span>
        nosotros queremos seguir en contacto contigo!
      </span>
      <input type="text" pattern="[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*" name="name" id="rsvp_name" placeholder="NOMBRE *" required>
      <input type="email" name="email" id="rsvp_email" placeholder="EMAIL *" required>
      <input type="tel" pattern="[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[- ./0-9]*" name="phone" id="rsvp_phone" placeholder="TELÉFONO">
      <input type="text" pattern="[0-9a-zA-Z .,#'&:;()\\-º/]+" name="address" id="rsvp_address" placeholder="DIRECCIÓN">
      <button id="rsvp_submit" type="submit">Enviar
        <svg id="rsvp_submit_arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105.996 104.339" style="transform: rotate(-90deg);">
          <g data-name="Icon feather-arrow-down" transform="translate(2.828 2)">
            <path id="Path_9" data-name="Path 9" d="M18,7.5V107.839" transform="translate(32.169 -7.5)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
            <path id="Path_10" data-name="Path 10" d="M107.839,18,57.669,68.169,7.5,18" transform="translate(-7.5 32.169)" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
          </g>
        </svg>
      </button>
    </form>
  </div>
</div>
</div>
`

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

function eraseCookie(name) {
  document.cookie = name + '=';
}

// https://script.google.com/macros/s/AKfycbzzS84stO729shAgLYHMODz3Kfvn1U3zLVSgJIxjZQ8SRy17gjE5MomvP4SuVMcFbCH/exec

function placePlayer() {
  if (readCookie('form') == 1 || URLhash == "#form") {
    let lang = window.navigator.userLanguage || window.navigator.language,
        en = (lang.includes("en"))? true: (lang.includes("es"))? false : true;

    if (en) {
      document.body.insertAdjacentHTML("afterbegin", player)
    } else {
      document.body.insertAdjacentHTML("afterbegin", playeres)
    }

    document.getElementById('media_player').src = video_links[Math.floor(Math.random() * video_links.length)]
    
    document.getElementById("rsvp_form").action = formAction;

    document.getElementById("rsvp_form").addEventListener("submit", function(e) {
      e.preventDefault();
      eraseCookie("form");

      const scriptURL = 'https://script.google.com/macros/s/AKfycbzzS84stO729shAgLYHMODz3Kfvn1U3zLVSgJIxjZQ8SRy17gjE5MomvP4SuVMcFbCH/exec';
      const form = document.forms['rsvp_form'];

      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))

      window.setTimeout(function () {
        location.href = document.getElementById("rsvp_form").action;
      }, 300);
    })

    if (URLparam.get("exit") != "1") {

      document.getElementById("close_rsvp").style.display = 'none';

    } else {

      document.getElementById("close_rsvp").addEventListener("click", function() {
        eraseCookie("form")
        window.setTimeout(function () {
          location.href = "/"
        }, 300);
      })
    }
  }
}

window.addEventListener('load', placePlayer);

window.onhashchange = placePlayer;

  