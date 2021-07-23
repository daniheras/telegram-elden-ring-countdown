module.exports = `
  <html>
    <head>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

        body {
          width: 400px;
          height: 150px;
          background: black;
          display: flex;
          font-family: 'Nunito', sans-serif;
        }
        
        .bar-container {
          width: 100%;
          background: url('https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg');
          background-size: cover;
          background-position: center;
          position: relative;
        }
        
        .bar-filler {
          height: 100%;
          background: #fcba03;
          opacity: .5;
        }
        
        .bar-text {
          position: absolute;
          content: '';
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          color: white;
          text-transform: uppercase;
          text-align: center;
          line-height: 150px;
          text-shadow: 1px 1px black;
          font-size: 32px;
        }
      </style>
    </head>
      <body>
        <div class="bar-container">
        <div class="bar-filler" style="width: {{percentage}}%">
        </div>
        <div class="bar-text">
          {{daysLeft}} días restantes
        </div>
      </div>
    </body>
  </html>
`;
