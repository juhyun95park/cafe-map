"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngExpression, Icon, LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Cafe } from "@/types/cafe";

interface CafeMapProps {
  cafes: Cafe[];
  userLocation?: { latitude: number; longitude: number };
  selectedCafeId?: string;
  onCafeClick?: (cafe: Cafe) => void;
}

// 사용자 위치 마커 아이콘 (파란색)
const userIcon = new Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// 일반 카페 마커 아이콘 (빨간색)
const cafeIcon = new Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// 선택된 카페 마커 아이콘 (초록색)
const selectedCafeIcon = new Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// 지도 범위 자동 조정 컴포넌트
function MapBounds({ cafes, userLocation }: { cafes: Cafe[]; userLocation?: { latitude: number; longitude: number } }) {
  const map = useMap();

  useEffect(() => {
    if (cafes.length === 0 && !userLocation) return;

    const bounds: LatLngTuple[] = [];

    // 사용자 위치 추가
    if (userLocation) {
      bounds.push([userLocation.latitude, userLocation.longitude]);
    }

    // 카페 위치 추가
    cafes.forEach((cafe) => {
      bounds.push([cafe.latitude, cafe.longitude]);
    });

    if (bounds.length > 0) {
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
    }
  }, [cafes, userLocation, map]);

  return null;
}

export default function CafeMap({
  cafes,
  userLocation,
  selectedCafeId,
  onCafeClick,
}: CafeMapProps) {
  // 기본 중심점 (강남역)
  const center: LatLngExpression = userLocation
    ? [userLocation.latitude, userLocation.longitude]
    : [37.4979, 127.0276];

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "100%", width: "100%", zIndex: 0 }}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* 사용자 위치 마커 */}
      {userLocation && (
        <Marker
          position={[userLocation.latitude, userLocation.longitude]}
          icon={userIcon}
        >
          <Popup>내 위치</Popup>
        </Marker>
      )}

      {/* 카페 마커 */}
      {cafes.map((cafe) => (
        <Marker
          key={cafe.id}
          position={[cafe.latitude, cafe.longitude]}
          icon={cafe.id === selectedCafeId ? selectedCafeIcon : cafeIcon}
          eventHandlers={{
            click: () => {
              if (onCafeClick) {
                onCafeClick(cafe);
              }
            },
          }}
        >
          <Popup>
            <div>
              <strong>{cafe.name}</strong>
              <br />
              <span style={{ fontSize: "12px" }}>{cafe.address}</span>
            </div>
          </Popup>
        </Marker>
      ))}

      {/* 지도 범위 자동 조정 */}
      <MapBounds cafes={cafes} userLocation={userLocation} />
    </MapContainer>
  );
}
