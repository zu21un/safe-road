/*global kakao*/ 
import React, { useEffect } from 'react'
import { MarkerData } from '../Marker/MarkerData';

function SeongdongMap() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(37.56324, 127.03656),
      level: 5,
    };

    //map
    const map = new kakao.maps.Map(container, options);
    
    MarkerData.forEach((el) => {
      // 마커 생성
      new kakao.maps.Marker({
        // 마커가 표시 될 지도
        map: map,
        // 마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        // 마커에 hover시 나타남
        title: el.title,
      });
    });
  };
    return (
        <div>
        <div id="map" style={{width:"800px", height:"800px"}}></div>
       
        </div>
    )
}

export default SeongdongMap;