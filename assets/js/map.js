
var tokyo_map;
var osaka_map;
var okinawa_map;

var MY_MAPTYPE_ID = 'custom_style';
var openInfoWindow;
var currentURL = location.href;

function initialize() {

  var featureOpts= [{
    "stylers": [
      { "saturation": -100 },
      { 'visibility': 'simplified' }
    ]
  }];
  var styledMapOptions  = {name: 'mono'};
  var iconPath = '/assets/images/common/icn-map-pc.png';
  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);


  // 東京オフィス
  // ---------------------------------------------------------------------------------
  tokyo_cemeteryLatlng  = new google.maps.LatLng(35.68241433201312,139.773287061377);
  var tokyo_content = '<p class="detail"><span>株式会社双葉通信社 東京本社</span>〒103-0027 東京都中央区日本橋2丁目1番10号 柳屋ビル3階<br>TEL : 03-3281-9981（代表）<br>FAX : 03-3281-9963<br><a href="https://goo.gl/maps/3FxgdZwaexn" target="_blank">拡大地図を表示</a></p>';
  if ( currentURL.indexOf('/en/') !== -1 ){
    var tokyo_content = '<p class="detail"><span>Head office</span>2-1-10, Nihonbashi, Chuo-ku, Tokyo, 103-0027, Japan<br>TEL : 03-3281-9981 (representative phone number)<br>FAX : 03-3281-9963<br><a href="https://goo.gl/maps/3FxgdZwaexn" target="_blank">View map</a></p>';
  }
  var tokyo_pin = tokyo_cemeteryLatlng;
  var tokyo_mapOptions = {
    zoom        : 17,
    center      : tokyo_cemeteryLatlng,
    mapTypeControlOptions: {
      mapTypeIds  : [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId   : MY_MAPTYPE_ID,
    scrollwheel : false,
    // draggable : false
  };
  tokyo_map = new google.maps.Map(document.getElementById('mapCanvas-tokyo'), tokyo_mapOptions);
  createMarker(
    tokyo_pin, tokyo_content, tokyo_map, iconPath
  );
  tokyo_map.mapTypes.set( MY_MAPTYPE_ID, customMapType );  // 東京
  // ---------------------------------------------------------------------------------


  // 大阪オフィス
  // ---------------------------------------------------------------------------------
  osaka_cemeteryLatlng  = new google.maps.LatLng(34.6987758753422,135.49942016137695);
  var osaka_content = '<p class="detail"><span>株式会社双葉通信社 大阪支社</span>〒530-0001 大阪府大阪市北区梅田1-1-3-1420号 大阪駅前第3ビル<br>TEL : 06-6344-3261（代表）<br>FAX : 06-6348-0524<br><a href="https://goo.gl/maps/QWMw8AAWJFC2" target="_blank">拡大地図を表示</a></p>';
  if ( currentURL.indexOf('/en/') !== -1 ){
    osaka_content = '<p class="detail"><span>Osaka office</span>#1420 Osaka Station 3 Bldg., 1-1-3, Umeda, Kita-ku,<br>Osaka City, Osaka, 530-0001, Japan<br>TEL : 06-6344-3261 (representative phone number)<br>FAX : 06-6348-0524<br><a href="https://goo.gl/maps/QWMw8AAWJFC2" target="_blank">View map</a></p>';
  }
  var osaka_pin = osaka_cemeteryLatlng;
  var osaka_mapOptions = {
    zoom        : 17,
    center      : osaka_cemeteryLatlng,
    mapTypeControlOptions: {
      mapTypeIds  : [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId   : MY_MAPTYPE_ID,
    scrollwheel : false,
    // draggable : false
  };
  osaka_map = new google.maps.Map(document.getElementById('mapCanvas-osaka'), osaka_mapOptions);
  createMarker(
    osaka_pin, osaka_content, osaka_map, iconPath
  );
  osaka_map.mapTypes.set( MY_MAPTYPE_ID, customMapType );  // 大阪
  // ---------------------------------------------------------------------------------


  // 沖縄オフィス
  // ---------------------------------------------------------------------------------
  okinawa_cemeteryLatlng  = new google.maps.LatLng(26.215854099999987,127.69304950000003);
  var okinawa_content = '<p class="detail"><span>株式会社双葉通信社 沖縄営業所</span>〒900-0013 沖縄県那覇市牧志3-19-20 フレンズビル<br>TEL/FAX : 098-868-0824<br><a href="https://goo.gl/maps/1aBDgb7FRtF2" target="_blank">拡大地図を表示</a></p>';
  if ( currentURL.indexOf('/en/') !== -1 ){
    okinawa_content = '<p class="detail"><span>Okinawa branch office</span>Friends Bldg., 3-19-20, Makishi, Naha-city, Okinawa, 900-0013, Japan<br>TEL/FAX : 098-868-0824<br><a href="https://goo.gl/maps/1aBDgb7FRtF2" target="_blank">View map</a></p>';
  }
  var okinawa_pin = okinawa_cemeteryLatlng;
  var okinawa_mapOptions = {
    zoom        : 17,
    center      : okinawa_cemeteryLatlng,
    mapTypeControlOptions: {
      mapTypeIds  : [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId   : MY_MAPTYPE_ID,
    scrollwheel : false,
    // draggable : false
  };
  okinawa_map = new google.maps.Map(document.getElementById('mapCanvas-okinawa'), okinawa_mapOptions);
  createMarker(
    okinawa_pin, okinawa_content, okinawa_map, iconPath
  );
  okinawa_map.mapTypes.set( MY_MAPTYPE_ID, customMapType );  // 沖縄
  // ---------------------------------------------------------------------------------

}

function createMarker(latlng,content,map,icon){
  var infoWindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    position: latlng,
    map   : map,
    icon  : icon
  });
  google.maps.event.addListener(marker, 'click', function() {
    if (openInfoWindow) {
      openInfoWindow.close();
    }
    openInfoWindow = new google.maps.InfoWindow({
      content: content
    });
    google.maps.event.addListener(openInfoWindow,'closeclick',function(){
      openInfoWindow = null;
    })
    openInfoWindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

