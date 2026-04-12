function showTheMap(pos1, pos2) {
  positionX = pos1;
  positionY = pos2;

  var map = L.map("map").setView([positionX, positionY], 12);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  var Kharkiv1 = L.marker([49.988836, 36.23781]).bindPopup(
      `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 10px; line-height: 1.8; font-size: 15px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <p style="margin-top: 6px; margin-bottom: 12px;"><span style="font-weight: bold;">Адреса:</span> проспект Героїв Харкова, 16, Харків, Харківська область, 61000</p>
    <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Години роботи:</span> 5:00-23:00</p>
     <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Пальне:</span> А-92, А-95</p>
    <p style="margin-bottom: 6px;"><span style="font-weight: bold;">Оплата:</span> Готівка, картка, криптовалюта</p>
    
    <a href="https://www.google.com/maps/dir/?api=1&destination=49.988836, 36.237810&travelmode=driving" target="_blank" 
       style="color: #72bb53; text-decoration: underline; font-weight: bold; display: inline-block; margin-top: 12px; font-size: 16px;">
       Прокласти маршрут (Google Maps)
    </a>
  </div>
    `,
      { 
        maxWidth: window.innerWidth * 0.8,
        maxHeight: 450,
      },
    ),
    Kharkiv2 = L.marker([49.98841, 36.270482]).bindPopup(
      `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 10px; line-height: 1.8; font-size: 15px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <p style="margin-top: 6px; margin-bottom: 12px;"><span style="font-weight: bold;">Адреса:</span> провулок Спортивний, 5, Харків, Харківська область, 61000</p>
    <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Години роботи:</span> 5:00-23:00</p>
     <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Пальне:</span> А-92, А-95</p>
    <p style="margin-bottom: 6px;"><span style="font-weight: bold;">Оплата:</span> Готівка, картка, криптовалюта</p>
    
    <a href="https://www.google.com/maps/dir/?api=1&destination=49.988410, 36.270482&travelmode=driving" target="_blank" 
       style="color: #72bb53; text-decoration: underline; font-weight: bold; display: inline-block; margin-top: 12px; font-size: 16px;">
       Прокласти маршрут (Google Maps)
    </a>
  </div>
    `,
      {
        maxWidth: 450,
        maxHeight: 450,
      },
    ),
    Kharkiv3 = L.marker([49.9870096, 36.2004427]).bindPopup(
      `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 10px; line-height: 1.8; font-size: 15px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <p style="margin-top: 6px; margin-bottom: 12px;"><span style="font-weight: bold;">Адреса:</span> вулиця Рилєєва, 25-17, Харків, Харківська область, 61000</p>
    <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Години роботи:</span> 5:00-23:00</p>
     <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Пальне:</span> А-92, А-95, Дизель</p>
    <p style="margin-bottom: 6px;"><span style="font-weight: bold;">Оплата:</span> Готівка, картка, криптовалюта</p>
    
    <a href="https://www.google.com/maps/dir/?api=1&destination=49.9870096,36.2004427&travelmode=driving" target="_blank" 
       style="color: #72bb53; text-decoration: underline; font-weight: bold; display: inline-block; margin-top: 12px; font-size: 16px;">
       Прокласти маршрут (Google Maps)
    </a>
  </div>
    `,
      {
        maxWidth: 450,
        maxHeight: 450,
      },
    ),
    Kharkiv4 = L.marker([49.9543852, 36.2596]).bindPopup(
      `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 10px; line-height: 1.8; font-size: 15px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <p style="margin-top: 6px; margin-bottom: 12px;"><span style="font-weight: bold;">Адреса:</span> вулиця Макіївська, 9-3, Харків, Харківська область, 61000</p>
    <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Години роботи:</span> 5:00-23:00</p>
     <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Пальне:</span> А-92, А-95</p>
    <p style="margin-bottom: 6px;"><span style="font-weight: bold;">Оплата:</span> Готівка, картка, криптовалюта</p>
    
    <a href="https://www.google.com/maps/dir/?api=1&destination=49.9543852,36.2596&travelmode=driving" target="_blank" 
       style="color: #72bb53; text-decoration: underline; font-weight: bold; display: inline-block; margin-top: 12px; font-size: 16px;">
       Прокласти маршрут (Google Maps)
    </a>
  </div>
    `,
      {
        maxWidth: 450,
        maxHeight: 450,
      },
    ),
    Kharkiv5 = L.marker([50.0392312, 36.2875873]).bindPopup(
      `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 10px; line-height: 1.8; font-size: 15px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <p style="margin-top: 6px; margin-bottom: 12px;"><span style="font-weight: bold;">Адреса:</span> вулиця Шишківська, 6, Харків, Харківська область, 61000</p>
    <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Години роботи:</span> 5:00-23:00</p>
     <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Пальне:</span> Дизель, Газ</p>
    <p style="margin-bottom: 6px;"><span style="font-weight: bold;">Оплата:</span> Готівка, картка, криптовалюта</p>
    
    <a href="https://www.google.com/maps/dir/?api=1&destination=50.0392312, 36.2875873&travelmode=driving" target="_blank" 
       style="color: #72bb53; text-decoration: underline; font-weight: bold; display: inline-block; margin-top: 12px; font-size: 16px;">
       Прокласти маршрут (Google Maps)
    </a>
  </div>
    `,
      {
        maxWidth: 450,
        maxHeight: 450,
      },
    ),
    Kharkiv6 = L.marker([49.9566516, 36.3581409]).bindPopup(
      `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; padding: 10px; line-height: 1.8; font-size: 15px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
    <p style="margin-top: 6px; margin-bottom: 12px;"><span style="font-weight: bold;">Адреса:</span> проспект Героїв Харкова, 254, Харків, Харківська область, 61000</p>
    <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Години роботи:</span> 5:00-23:00</p>
     <p style="margin-bottom: 12px;"><span style="font-weight: bold;">Пальне:</span> Дизель, Газ</p>
    <p style="margin-bottom: 6px;"><span style="font-weight: bold;">Оплата:</span> Готівка, картка, криптовалюта</p>
    
    <a href="https://www.google.com/maps/dir/?api=1&destination=49.9566516, 36.3581409&travelmode=driving" target="_blank" 
       style="color: #72bb53; text-decoration: underline; font-weight: bold; display: inline-block; margin-top: 12px; font-size: 16px;">
       Прокласти маршрут (Google Maps)
    </a>
  </div>
    `,
      {
        maxWidth: 450,
        maxHeight: 450,
      },
    );

  var stationKharkiv = L.layerGroup([
    Kharkiv1,
    Kharkiv2,
    Kharkiv3,
    Kharkiv4,
    Kharkiv5,
    Kharkiv6,
  ]);

  var gasStations = L.layerGroup([Kharkiv1, Kharkiv2, Kharkiv3, Kharkiv4]);
  var dieselStations = L.layerGroup([Kharkiv3, Kharkiv5, Kharkiv6]);
  var gasolineStations = L.layerGroup([Kharkiv5, Kharkiv6]);

  var Layers = {
    "Усі станції міста Харків": stationKharkiv,
    "В наявності А95, А92": gasStations,
    "В наявності Дизель": dieselStations,
    "В наявності Газ": gasolineStations,
  };

  stationKharkiv.addTo(map);
  L.control.layers(Layers, null, { collapsed: false }).addTo(map);
  // map.on("click", onMapClick);
}
