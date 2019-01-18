import React from 'react';

const SVG = React.memo(() => (
  <svg display="none" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    <symbol id="app_loading" viewBox="0 0 57 57">
      <g>
        <g transform="translate(1 1)" strokeWidth="2">
          <circle cx="5" cy="50" r="5">
            <animate
              attributeName="cy"
              begin="0s"
              dur="2.2s"
              values="50;5;50;50"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cx"
              begin="0s"
              dur="2.2s"
              values="5;27;49;5"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="27" cy="5" r="5">
            <animate
              attributeName="cy"
              begin="0s"
              dur="2.2s"
              from="5"
              to="5"
              values="5;50;50;5"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cx"
              begin="0s"
              dur="2.2s"
              from="27"
              to="27"
              values="27;49;5;27"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
          <circle cx="49" cy="50" r="5">
            <animate
              attributeName="cy"
              begin="0s"
              dur="2.2s"
              values="50;50;5;50"
              calcMode="linear"
              repeatCount="indefinite"
            />
            <animate
              attributeName="cx"
              from="49"
              to="49"
              begin="0s"
              dur="2.2s"
              values="49;5;27;49"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </g>
    </symbol>

    <symbol id="icon_svg_pencil" viewBox="0 0 485.219 485.22">
      <g>
        <path d="M467.476,146.438l-21.445,21.455L317.35,39.23l21.445-21.457c23.689-23.692,62.104-23.692,85.795,0l42.886,42.897C491.133,84.349,491.133,122.748,467.476,146.438z M167.233,403.748c-5.922,5.922-5.922,15.513,0,21.436c5.925,5.955,15.521,5.955,21.443,0L424.59,189.335l-21.469-21.457L167.233,403.748z M60,296.54c-5.925,5.927-5.925,15.514,0,21.44c5.922,5.923,15.518,5.923,21.443,0L317.35,82.113L295.914,60.67L60,296.54z M338.767,103.54L102.881,339.421c-11.845,11.822-11.815,31.041,0,42.886c11.85,11.846,31.038,11.901,42.914-0.032l235.886-235.837L338.767,103.54zM145.734,446.572c-7.253-7.262-10.749-16.465-12.05-25.948c-3.083,0.476-6.188,0.919-9.36,0.919c-16.202,0-31.419-6.333-42.881-17.795c-11.462-11.491-17.77-26.687-17.77-42.887c0-2.954,0.443-5.833,0.859-8.703c-9.803-1.335-18.864-5.629-25.972-12.737c-0.682-0.677-0.917-1.596-1.538-2.338L0,485.216l147.748-36.986C147.097,447.637,146.36,447.193,145.734,446.572z" />
      </g>
    </symbol>

    <symbol id="icon_svg_img" viewBox="0 0 489.4 489.4">
      <g>
        <path d="M0,437.8c0,28.5,23.2,51.6,51.6,51.6h386.2c28.5,0,51.6-23.2,51.6-51.6V51.6c0-28.5-23.2-51.6-51.6-51.6H51.6C23.1,0,0,23.2,0,51.6C0,51.6,0,437.8,0,437.8z M437.8,464.9H51.6c-14.9,0-27.1-12.2-27.1-27.1v-64.5l92.8-92.8l79.3,79.3c4.8,4.8,12.5,4.8,17.3,0l143.2-143.2l107.8,107.8v113.4C464.9,452.7,452.7,464.9,437.8,464.9z M51.6,24.5h386.2c14.9,0,27.1,12.2,27.1,27.1v238.1l-99.2-99.1c-4.8-4.8-12.5-4.8-17.3,0L205.2,333.8l-79.3-79.3c-4.8-4.8-12.5-4.8-17.3,0l-84.1,84.1v-287C24.5,36.7,36.7,24.5,51.6,24.5z" />
        <path d="M151.7,196.1c34.4,0,62.3-28,62.3-62.3s-28-62.3-62.3-62.3s-62.3,28-62.3,62.3S117.3,196.1,151.7,196.1z M151.7,96c20.9,0,37.8,17,37.8,37.8s-17,37.8-37.8,37.8s-37.8-17-37.8-37.8S130.8,96,151.7,96z" />
      </g>
    </symbol>

    <symbol id="icon_svg_trash" viewBox="0 0 268.476 268.476">
      <g>
        <path d="M63.119,250.254c0,0,3.999,18.222,24.583,18.222h93.072c20.583,0,24.582-18.222,24.582-18.222l18.374-178.66H44.746L63.119,250.254z M170.035,98.442c0-4.943,4.006-8.949,8.949-8.949c4.943,0,8.95,4.006,8.95,8.949l-8.95,134.238c0,4.943-4.007,8.949-8.949,8.949c-4.942,0-8.949-4.007-8.949-8.949L170.035,98.442zM125.289,98.442c0-4.943,4.007-8.949,8.949-8.949c4.943,0,8.949,4.006,8.949,8.949v134.238c0,4.943-4.006,8.949-8.949,8.949c-4.943,0-8.949-4.007-8.949-8.949V98.442z M89.492,89.492c4.943,0,8.949,4.006,8.949,8.949l8.95,134.238c0,4.943-4.007,8.949-8.95,8.949c-4.942,0-8.949-4.007-8.949-8.949L80.543,98.442C80.543,93.499,84.55,89.492,89.492,89.492zM218.36,35.811h-39.376V17.899C178.984,4.322,174.593,0,161.086,0L107.39,0C95.001,0,89.492,6.001,89.492,17.899v17.913H50.116c-7.914,0-14.319,6.007-14.319,13.43c0,7.424,6.405,13.431,14.319,13.431H218.36c7.914,0,14.319-6.007,14.319-13.431C232.679,41.819,226.274,35.811,218.36,35.811z M161.086,35.811h-53.695l0.001-17.913h53.695V35.811z" />
      </g>
    </symbol>

    <symbol id="icon_svg_pictrue" viewBox="0 0 45.964 45.964">
      <g>
        <path d="M7.071,30.834V11.062H4.042C1.803,11.062,0,12.893,0,15.13v26.732c0,2.24,1.803,4.051,4.042,4.051h26.733 c2.238,0,4.076-1.811,4.076-4.051v-2.92H15.179C10.733,38.943,7.071,35.281,7.071,30.834z" />
        <path d="M41.913,0.05H15.179c-2.238,0-4.066,1.813-4.066,4.051v26.733c0,2.241,1.829,4.067,4.066,4.067h26.734 c2.237,0,4.051-1.826,4.051-4.067V4.102C45.964,1.862,44.15,0.05,41.913,0.05z M41.363,28.589 c-0.223,0.412-0.652,0.656-1.12,0.656H17.336c-0.403,0-0.782-0.18-1.022-0.502c-0.24-0.324-0.313-0.736-0.197-1.123l3.277-10.839 c0.216-0.713,0.818-1.24,1.554-1.361c0.736-0.12,1.476,0.19,1.908,0.797l4.582,6.437c0.617,0.867,1.812,1.082,2.689,0.484 l4.219-2.865c0.434-0.295,0.967-0.402,1.48-0.299c0.515,0.102,0.966,0.408,1.253,0.848l4.229,6.472 C41.564,27.687,41.585,28.179,41.363,28.589z" />
      </g>
    </symbol>

    {/* icon: control */}
    <symbol id="icon_svg_setting" viewBox="0 0 56 56">
      <path d="M8,15c3.5,0,6.4-2.6,6.9-6H54c0.6,0,1-0.4,1-1s-0.4-1-1-1H14.9C14.4,3.6,11.5,1,8,1C4.1,1,1,4.1,1,8S4.1,15,8,15z M8,3c2.8,0,5,2.2,5,5s-2.2,5-5,5s-5-2.2-5-5S5.2,3,8,3z" />
      <path d="M48,41c-3.5,0-6.4,2.6-6.9,6H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h39.1c0.5,3.4,3.4,6,6.9,6c3.9,0,7-3.1,7-7S51.9,41,48,41z M48,53c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S50.8,53,48,53z" />
      <path d="M54,27H35.4c-0.4-3.6-3.5-6.4-7.2-6.4S21.4,23.4,21,27H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h19.1c0.6,3.4,3.5,6,7.1,6s6.5-2.6,7.1-6H54c0.6,0,1-0.4,1-1S54.6,27,54,27z M28.2,33c-2.9,0-5.2-2.3-5.2-5.2s2.3-5.2,5.2-5.2s5.2,2.3,5.2,5.2S31.1,33,28.2,33z" />
    </symbol>

    {/* markdown icon */}
    <symbol id="icon_svg_markdown" viewBox="0 0 1024 1024">
      <path d="M950.154 192H73.846C33.127 192 0 225.12699999999995 0 265.846v492.308C0 798.875 33.127 832 73.846 832h876.308c40.721 0 73.846-33.125 73.846-73.846V265.846C1024 225.12699999999995 990.875 192 950.154 192zM576 703.875L448 704V512l-96 123.077L256 512v192H128V320h128l96 128 96-128 128-0.125V703.875zM767.091 735.875L608 512h96V320h128v192h96L767.091 735.875z" />
    </symbol>

    {/* svg - preview mode */}
    <symbol id="icon_svg_preview_mode" viewBox="0 0 640 640">
      <rect
        x="40"
        y="80"
        rx="40"
        ry="40"
        width="560"
        height="480"
        strokeWidth="50"
        fill="transparent"
      />
      <rect
        x="100"
        y="160"
        rx="25"
        ry="25"
        width="380"
        height="50"
      />
      <rect
        x="150"
        y="300"
        rx="25"
        ry="25"
        width="380"
        height="50"
      />
      <rect
        x="100"
        y="440"
        rx="25"
        ry="25"
        width="380"
        height="50"
      />
    </symbol>

    {/* svg - write mode */}
    <symbol id="icon_svg_write_mode" viewBox="0 0 640 640">
      <rect
        x="40"
        y="80"
        rx="40"
        ry="40"
        width="560"
        height="480"
        strokeWidth="50"
        fill="transparent"
      />

      <line
        x1="40"
        y1="240"
        x2="180"
        y2="240"
        strokeWidth="50"
      />

      <line
        x1="40"
        y1="400"
        x2="180"
        y2="400"
        strokeWidth="50"
      />

      <line
        x1="200"
        y1="80"
        x2="200"
        y2="560"
        strokeWidth="50"
      />

      <rect
        x="260"
        y="180"
        rx="25"
        ry="25"
        width="280"
        height="50"
      />

      <rect
        x="260"
        y="300"
        rx="25"
        ry="25"
        width="280"
        height="50"
      />

      <rect
        x="260"
        y="420"
        rx="25"
        ry="25"
        width="280"
        height="50"
      />
    </symbol>

    {/* svg - edit mode */}
    <symbol id="icon_svg_edit_mode" viewBox="0 0 640 640">
      <rect
        x="40"
        y="80"
        rx="40"
        ry="40"
        width="560"
        height="480"
        strokeWidth="50"
        fill="transparent"
      />

      <line
        x1="305"
        y1="80"
        x2="305"
        y2="560"
        style={{ strokeWidth: 50 }}
      />
    </symbol>

    {/* svg - normal mode */}
    <symbol id="icon_svg_normal_mode" viewBox="0 0 640 640">
      <rect
        x="40"
        y="80"
        rx="40"
        ry="40"
        width="560"
        height="480"
        strokeWidth="50"
        fill="transparent"
      />

      <line
        x1="40"
        y1="240"
        x2="180"
        y2="240"
        strokeWidth="50"
      />

      <line
        x1="40"
        y1="400"
        x2="180"
        y2="400"
        strokeWidth="50"
      />

      <line
        x1="200"
        y1="80"
        x2="200"
        y2="560"
        style={{ strokeWidth: 50 }}
      />

      <line
        x1="400"
        y1="80"
        x2="400"
        y2="560"
        style={{ strokeWidth: 50 }}
      />
    </symbol>

    {/* svg - immersion mode */}
    <symbol id="icon_svg_immersion_mode" viewBox="0 0 640 640">
      <rect
        x="40"
        y="80"
        rx="40"
        ry="40"
        width="560"
        height="480"
        strokeWidth="50"
        fill="transparent"
      />

      <polyline
        points="120,160 230,320 120,480"
        style={{ fill: 'transparent', strokeWidth: 50 }}
      />

      <line
        x1="300"
        y1="470"
        x2="500"
        y2="470"
        style={{ strokeWidth: 50 }}
      />
    </symbol>

    {/* notebook icon */}
    <symbol id="icon_svg_notebook" viewBox="0 0 59 59">
      <path
        style={{ fill: '#556080' }}
        d="M39.503,52H1.5V0.003h38.003C41.158,0.003,42.5,1.345,42.5,3v46.003C42.5,50.658,41.158,52,39.503,52z"
      />
      <rect
        x="31.5"
        y="0.003"
        style={{ fill: '#D75A4A' }}
        width="5"
        height="51.997"
      />
      <g>
        <rect
          x="1.5"
          y="17.01"
          style={{ fill: '#424A60' }}
          width="30"
          height="18"
        />
        <rect
          x="36.5"
          y="17.01"
          style={{ fill: '#424A60' }}
          width="6"
          height="18"
        />
      </g>
      <polygon
        style={{ fill: '#EBBA16' }}
        points="11.5,57 8.5,55 5.5,57 5.5,52 11.5,52"
      />
      <rect
        x="49.5"
        y="7"
        style={{ fill: '#E0E1E2' }}
        width="4"
        height="4"
      />
      <path
        style={{ fill: '#D75A4A' }}
        d="M53.5,0h-2.015c-0.274,0-0.535,0.056-0.773,0.156c-0.119,0.05-0.232,0.111-0.337,0.183C49.847,0.696,49.5,1.3,49.5,1.985V7h4V0z"
      />
      <path
        style={{ fill: '#D75A4A' }}
        d="M55.515,0L55.515,0c0.274,0,0.535,0.056,0.773,0.156C56.05,0.056,55.789,0,55.515,0z"
      />
      <rect
        x="53.5"
        y="11"
        style={{ fill: '#DB7B1B' }}
        width="4"
        height="38"
      />
      <rect
        x="53.5"
        y="7"
        style={{ fill: '#C4C4C4' }}
        width="4"
        height="4"
      />
      <path
        style={{ fill: '#D75A4A' }}
        d="M57.5,1.985L57.5,1.985c0-0.685-0.347-1.289-0.875-1.646C57.153,0.696,57.5,1.3,57.5,1.985z"
      />
      <path
        style={{ fill: '#B74C44' }}
        d="M57.5,7V1.985c0-0.685-0.347-1.289-0.875-1.646c-0.105-0.071-0.219-0.133-0.337-0.183C56.05,0.056,55.789,0,55.515,0H53.5v7H57.5z"
      />
      <polygon
        style={{ fill: '#EBD6BD' }}
        points="57.5,49 49.5,49 53.5,56"
      />
      <path
        style={{ fill: '#4C4C4C' }}
        d="M52.5,58c0,0.553,0.447,1,1,1s1-0.447,1-1v-4h-2V58z"
      />
      <rect
        x="49.5"
        y="11"
        style={{ fill: '#ED8A19' }}
        width="4"
        height="38"
      />
    </symbol>

    {/* icon: note */}
    <symbol id="icon_svg_note" viewBox="0 0 59 59">
      <path
        style={{ fill: '#ED8A19' }}
        d="M50.485,0c-0.274,0-0.535,0.056-0.773,0.156C49.95,0.056,50.211,0,50.485,0L50.485,0z"
      />
      <rect x="48.5" y="7" style={{ fill: '#E0E1E2' }} width="4" height="4" />
      <path style={{ fill: '#D75A4A' }} d="M49.375,0.339C48.847,0.696,48.5,1.3,48.5,1.985l0,0C48.5,1.3,48.847,0.696,49.375,0.339z" />
      <path style={{ fill: '#D75A4A' }} d="M52.5,0h-2.015c-0.274,0-0.535,0.056-0.773,0.156c-0.119,0.05-0.232,0.111-0.337,0.183C48.847,0.696,48.5,1.3,48.5,1.985V7h4V0z" />
      <rect x="52.5" y="11" style={{ fill: '#DB7B1B' }} width="4" height="38" />
      <rect x="52.5" y="7" style={{ fill: '#C4C4C4' }} width="4" height="4" />
      <path style={{ fill: '#B74C44' }} d="M56.5,7V1.985c0-0.685-0.347-1.289-0.875-1.646c-0.105-0.071-0.219-0.133-0.337-0.183C55.05,0.056,54.789,0,54.515,0H52.5v7H56.5z" />
      <rect x="21.5" style={{ fill: '#303644' }} width="9" height="5" />
      <polygon style={{ fill: '#424A60' }} points="48.5,49 48.5,2 34.5,2 30.5,2 30.5,5 21.5,5 21.5,2 17.5,2 2.5,2 2.5,58 49.5,58 49.5,50.75" />
      <polygon style={{ fill: '#7383BF' }} points="30.5,2 30.5,5 21.5,5 21.5,2 14.5,2 14.5,8 37.5,8 37.5,2" />
      <polygon style={{ fill: '#EDEADA' }} points="37.5,7 37.5,8 14.5,8 14.5,7 7.5,7 7.5,53 44.5,53 44.5,7" />
      <g>
        <path style={{ fill: '#CEC9AE' }} d="M14.5,18h9c0.553,0,1-0.447,1-1s-0.447-1-1-1h-9c-0.553,0-1,0.447-1,1S13.947,18,14.5,18z" />
        <path style={{ fill: '#CEC9AE' }} d="M14.5,25h5c0.553,0,1-0.447,1-1s-0.447-1-1-1h-5c-0.553,0-1,0.447-1,1S13.947,25,14.5,25z" />
        <path style={{ fill: '#CEC9AE' }} d="M34.5,23h-7c-0.553,0-1,0.447-1,1s0.447,1,1,1h7c0.553,0,1-0.447,1-1S35.053,23,34.5,23z" />
        <path style={{ fill: '#CEC9AE' }} d="M22.79,23.29c-0.181,0.189-0.29,0.449-0.29,0.71c0,0.26,0.109,0.52,0.29,0.71C22.979,24.899,23.229,25,23.5,25c0.26,0,0.52-0.11,0.71-0.29c0.18-0.19,0.29-0.45,0.29-0.71c0-0.261-0.11-0.521-0.29-0.71C23.83,22.92,23.17,22.92,22.79,23.29z" />
        <path style={{ fill: '#CEC9AE' }} d="M39.21,23.29c-0.38-0.37-1.04-0.37-1.42,0c-0.181,0.189-0.29,0.449-0.29,0.71c0,0.26,0.109,0.52,0.29,0.71C37.979,24.899,38.229,25,38.5,25c0.27,0,0.52-0.11,0.71-0.29c0.18-0.19,0.29-0.45,0.29-0.71C39.5,23.739,39.39,23.479,39.21,23.29z" />
        <path style={{ fill: '#CEC9AE' }} d="M25.5,30h-7c-0.553,0-1,0.447-1,1s0.447,1,1,1h7c0.553,0,1-0.447,1-1S26.053,30,25.5,30z" />
        <path style={{ fill: '#CEC9AE' }} d="M13.79,30.29C13.6,30.479,13.5,30.729,13.5,31c0,0.26,0.109,0.52,0.29,0.71C13.979,31.89,14.24,32,14.5,32s0.52-0.11,0.71-0.29c0.189-0.19,0.29-0.45,0.29-0.71c0-0.261-0.101-0.521-0.29-0.71C14.83,29.92,14.17,29.92,13.79,30.29z" />
      </g>
      <g>
        <path style={{ fill: '#7383BF' }} d="M20.025,36.137c-2.191,1.14-2.928,3.32-3.196,5.582c-0.414-0.347-0.827-0.693-1.241-1.04c-0.981-0.822-2.404,0.585-1.414,1.415c0.935,0.783,1.871,1.567,2.806,2.351c0.662,0.555,1.676,0.211,1.707-0.707c0.073-2.167,0.177-4.743,2.348-5.873C22.179,37.268,21.167,35.542,20.025,36.137z" />
        <path style={{ fill: '#7383BF' }} d="M29.364,41.22c-0.52-0.93-1.642-1.391-2.688-1.095c-1.365,0.386-2.981,2.042-3.936,0.106c-0.571-1.157-2.295-0.143-1.727,1.009c0.514,1.042,1.5,1.798,2.669,1.932c0.607,0.069,1.117-0.013,1.688-0.226c0.406-0.152,1.923-1.332,2.267-0.717C28.266,43.355,29.993,42.347,29.364,41.22z" />
      </g>
      <polygon style={{ fill: '#EBD6BD' }} points="56.5,49 48.5,49 52.5,56" />
      <path style={{ fill: '#4C4C4C' }} d="M51.5,58c0,0.553,0.447,1,1,1s1-0.447,1-1v-4h-2V58z" />
      <rect x="48.5" y="11" style={{ fill: '#ED8A19' }} width="4" height="38" />
    </symbol>

    {/* icon: cloud */}
    <symbol id="icon_svg_cloud" viewBox="0 0 548.176 548.176">
      <g>
        <path d="M524.183,297.065c-15.985-19.893-36.265-32.691-60.815-38.399c7.81-11.993,11.704-25.126,11.704-39.399c0-20.177-7.139-37.401-21.409-51.678c-14.273-14.272-31.498-21.411-51.675-21.411c-18.271,0-34.071,5.901-47.39,17.703c-11.225-27.028-29.075-48.917-53.529-65.667c-24.46-16.746-51.728-25.125-81.802-25.125c-40.349,0-74.802,14.279-103.353,42.83c-28.553,28.544-42.825,62.999-42.825,103.351c0,2.856,0.191,6.945,0.571,12.275c-22.078,10.279-39.876,25.838-53.389,46.686C6.759,299.067,0,322.055,0,347.18c0,35.211,12.517,65.333,37.544,90.359c25.028,25.033,55.15,37.548,90.362,37.548h310.636c30.259,0,56.096-10.715,77.512-32.121c21.413-21.412,32.121-47.249,32.121-77.515C548.172,339.757,540.174,316.952,524.183,297.065z" />
      </g>
    </symbol>
  </svg>
));

SVG.displayName = 'AppSVG';

export default SVG;
