import { Location } from "@/types/cafe";

// 사용자의 현재 위치를 가져오는 함수
export function getCurrentLocation(): Promise<Location> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation is not supported by this browser."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  });
}

// 기본 위치 (강남역) - 위치 권한이 거부된 경우 사용
export const defaultLocation: Location = {
  latitude: 37.4979,
  longitude: 127.0276,
};

