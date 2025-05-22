<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
<style>
  body { font-family: 'Inter', sans-serif; background-color: #f0f4f8; margin:0; padding:1rem; }
  .portfolio-title { text-align:center; margin-bottom: 2rem; }
  .project-grid { display: flex; flex-wrap: wrap; gap: 1rem; justify-content: center; }
  .project-card { width: 280px; background: #fff; border-radius:12px; box-shadow: 0 3px 8px rgba(0,0,0,0.1); padding: 1rem; transition: transform 0.2s; }
  .project-card:hover { transform: translateY(-5px); cursor: pointer; }
  .project-card img { border-radius:8px; width:100%; height:160px; object-fit:cover; }
  .project-title { margin-top:0.5rem; font-size:16px; font-weight:600; }
  .project-description { font-size:13px; color:#555; margin:0.5rem 0; }
  .button { display:inline-block; margin-top:0.5rem; padding: 4px 8px; background:#007bff; color:#fff; text-decoration:none; border-radius:4px; font-size:13px; }
  @media (max-width:800px){.project-grid{flex-direction:column;align-items:center;}}
</style>

<h1 class=\"portfolio-title\">🌎 Shawn Preston | GIS & Remote Sensing Scientist</h1>

<div class=\"project-grid\">

<div class=\"project-card\" onclick=\"window.open('/UHI_VIIRS.png', '_blank')\">
  <img src=\"/UHI_VIIRS.png\">
  <div class=\"project-title\">🛰️ VIIRS UHI Intensity</div>
  <div class=\"project-description\">Urban Heat Island analysis using nighttime lights.</div>
  <a href=\"https://github.com/shawnatwsu/NOAA-PATHWAY-PROJECT-2025_UHI\" class=\"button\">GitHub ↗</a>
</div>

<div class=\"project-card\" onclick=\"window.open('/texas_storm_panel.png', '_blank')\">
  <img src=\"/texas_storm_panel.png\">
  <div class=\"project-title\">❄️ Texas Winter Storm</div>
  <div class=\"project-description\">Storm radiance impacts correlated with poverty.</div>
  <a href=\"https://github.com/shawnatwsu/2021_Texas_Storm\" class=\"button\">GitHub ↗</a>
</div>

<div class=\"project-card\" onclick=\"window.open('/map1-1.png', '_blank')\">
  <img src=\"/map1-1.png\">
  <div class=\"project-title\">🔥 SC Wildfires 2025</div>
  <div class=\"project-description\">Burn severity mapping with Sentinel-2 & VIIRS.</div>
  <a href=\"https://github.com/shawnatwsu/airquality/blob/main/aq_SouthCarolina\" class=\"button\">GEE Script ↗</a>
</div>

<div class=\"project-card\" onclick=\"window.open('/marchpnw.png', '_blank')\">
  <img src=\"/marchpnw.png\">
  <div class=\"project-title\">🌡️ PNW Heatwave 2025</div>
  <div class=\"project-description\">GridMET anomaly analysis of extreme heat.</div>
  <a href=\"https://github.com/shawnatwsu/MarchHeatPNW\" class=\"button\">GitHub ↗</a>
</div>

<div class=\"project-card\" onclick=\"window.open('/earthday_apr22_us_globe_anomaly.gif', '_blank')\">
  <img src=\"/earthday_apr22_us_globe_anomaly.gif\">
  <div class=\"project-title\">🌎 Earth Day Anomalies</div>
  <div class=\"project-description\">Global temperature anomalies animation.</div>
  <a href=\"https://github.com/shawnatwsu/earthday2025/tree/main\" class=\"button\">GitHub ↗</a>
</div>

<div class=\"project-card\" onclick=\"window.open('/combined_panel_clean.png', '_blank')\">
  <img src=\"/combined_panel_clean.png\">
  <div class=\"project-title\">🍎 Apple Climate Metrics</div>
  <div class=\"project-description\">Historical impacts on apple production.</div>
  <a href=\"https://github.com/shawnatwsu/Changing-Climate-Risks-for-High-Value-Tree-Fruit-Production-across-the-United-States\" class=\"button\">GitHub ↗</a>
</div>

<div class=\"project-card\" onclick=\"window.open('/combined_panel_6.png', '_blank')\">
  <img src=\"/combined_panel_6.png\">
  <div class=\"project-title\">🌤️ CESM2 Apple Metrics</div>
  <div class=\"project-description\">CESM2-LE projections of climate impacts on apple regions.</div>
  <a href=\"https://github.com/shawnatwsu/Projected-Changes-in-Climate-Conditions-Affecting-U.S.-Apple-Production-Using-Large-Ensembles\" class=\"button\">GitHub ↗</a>
</div>

<div class=\"project-card\" onclick=\"window.open('/greenhouse_invaders.gif', '_blank')\">
  <img src=\"/greenhouse_invaders.gif\">
  <div class=\"project-title\">🎮 Greenhouse Invaders</div>
  <div class=\"project-description\">Educational game on greenhouse gases.</div>
  <a href=\"https://github.com/shawnatwsu/Greenhouse-Invaders\" class=\"button\">GitHub ↗</a>
</div>

</div>
