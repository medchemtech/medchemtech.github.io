(function(){document.map={activate:function(){var t,a;if(!this._activated)return this._activated=!0,a=this,t=document.createElement("script"),t.setAttribute("type","application/javascript"),t.setAttribute("src","http://api-maps.yandex.ru/2.0-stable/?load=package.standard&lang=ru-RU"),t.onload=function(){return a._constructMap()},document.head.appendChild(t)},_constructMap:function(){return ymaps.ready(function(){var t,a;return t=new ymaps.Map("map",{center:[57.5942,39.8633],zoom:15}),t.controls.add("zoomControl"),a=new ymaps.Placemark([57.5942,39.8633],{hintContent:'OOO "МедХимТех"',balloonContent:"г. Ярославль, Силикатное шоссе, 19, оф.107 (правый вход)"}),t.geoObjects.add(a)})},_activated:!1}}).call(this);