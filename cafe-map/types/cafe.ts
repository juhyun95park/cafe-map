// 카페 기본 정보 타입
export interface Cafe {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  operatingHours?: {
    open: string;
    close: string;
    days?: string[];
  };
  features: {
    quiet: boolean; // 조용함
    outlets: boolean; // 콘센트 많음
    parking: boolean; // 주차 가능
    wifi: boolean; // Wi-Fi
    spacious: boolean; // 넓음
  };
  imageUrl?: string;
  description?: string;
}

// 위치 정보 타입
export interface Location {
  latitude: number;
  longitude: number;
}

// 필터 옵션 타입
export interface FilterOptions {
  quiet?: boolean;
  outlets?: boolean;
  parking?: boolean;
  wifi?: boolean;
  spacious?: boolean;
}

