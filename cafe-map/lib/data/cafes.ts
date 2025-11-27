import { Cafe } from "@/types/cafe";

// 강남/홍대 지역 카페 초기 데이터 (50개)
// 실제 서비스에서는 API나 데이터베이스에서 가져옴
export const initialCafes: Cafe[] = [
  // 강남 지역 카페들
  {
    id: "1",
    name: "스타벅스 강남점",
    address: "서울특별시 강남구 강남대로 396",
    latitude: 37.4979,
    longitude: 127.0276,
    operatingHours: {
      open: "07:00",
      close: "23:00",
    },
    features: {
      quiet: false,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "2",
    name: "할리스 강남역점",
    address: "서울특별시 강남구 강남대로 420",
    latitude: 37.4981,
    longitude: 127.0280,
    operatingHours: {
      open: "07:30",
      close: "22:30",
    },
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "3",
    name: "투썸플레이스 강남점",
    address: "서울특별시 강남구 테헤란로 123",
    latitude: 37.5000,
    longitude: 127.0300,
    operatingHours: {
      open: "08:00",
      close: "23:00",
    },
    features: {
      quiet: true,
      outlets: true,
      parking: true,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "4",
    name: "이디야 강남점",
    address: "서울특별시 강남구 강남대로 456",
    latitude: 37.4950,
    longitude: 127.0250,
    operatingHours: {
      open: "07:00",
      close: "22:00",
    },
    features: {
      quiet: false,
      outlets: false,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "5",
    name: "컴포즈커피 강남점",
    address: "서울특별시 강남구 역삼로 123",
    latitude: 37.5020,
    longitude: 127.0320,
    operatingHours: {
      open: "07:30",
      close: "22:30",
    },
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  // 홍대 지역 카페들
  {
    id: "6",
    name: "스타벅스 홍대입구역점",
    address: "서울특별시 마포구 양화로 188",
    latitude: 37.5569,
    longitude: 126.9230,
    operatingHours: {
      open: "07:00",
      close: "23:00",
    },
    features: {
      quiet: false,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "7",
    name: "할리스 홍대점",
    address: "서울특별시 마포구 홍익로 123",
    latitude: 37.5560,
    longitude: 126.9220,
    operatingHours: {
      open: "08:00",
      close: "23:00",
    },
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "8",
    name: "투썸플레이스 홍대점",
    address: "서울특별시 마포구 와우산로 123",
    latitude: 37.5550,
    longitude: 126.9210,
    operatingHours: {
      open: "08:30",
      close: "23:00",
    },
    features: {
      quiet: true,
      outlets: true,
      parking: true,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "9",
    name: "이디야 홍대점",
    address: "서울특별시 마포구 홍익로 456",
    latitude: 37.5540,
    longitude: 126.9200,
    operatingHours: {
      open: "07:00",
      close: "22:00",
    },
    features: {
      quiet: false,
      outlets: false,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "10",
    name: "컴포즈커피 홍대점",
    address: "서울특별시 마포구 양화로 123",
    latitude: 37.5530,
    longitude: 126.9190,
    operatingHours: {
      open: "07:30",
      close: "22:30",
    },
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  // 추가 강남 지역 카페들 (더 많은 샘플 데이터)
  {
    id: "11",
    name: "카페베네 강남점",
    address: "서울특별시 강남구 테헤란로 234",
    latitude: 37.5010,
    longitude: 127.0310,
    features: {
      quiet: true,
      outlets: true,
      parking: true,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "12",
    name: "빽다방 강남점",
    address: "서울특별시 강남구 강남대로 567",
    latitude: 37.4940,
    longitude: 127.0240,
    features: {
      quiet: false,
      outlets: false,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "13",
    name: "메가커피 강남점",
    address: "서울특별시 강남구 역삼로 234",
    latitude: 37.5030,
    longitude: 127.0330,
    features: {
      quiet: false,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "14",
    name: "공차 강남점",
    address: "서울특별시 강남구 강남대로 678",
    latitude: 37.4930,
    longitude: 127.0230,
    features: {
      quiet: true,
      outlets: false,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "15",
    name: "엔젤리너스 강남점",
    address: "서울특별시 강남구 테헤란로 345",
    latitude: 37.5040,
    longitude: 127.0340,
    features: {
      quiet: true,
      outlets: true,
      parking: true,
      wifi: true,
      spacious: true,
    },
  },
  // 추가 홍대 지역 카페들
  {
    id: "16",
    name: "카페베네 홍대점",
    address: "서울특별시 마포구 와우산로 234",
    latitude: 37.5520,
    longitude: 126.9180,
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "17",
    name: "빽다방 홍대점",
    address: "서울특별시 마포구 홍익로 567",
    latitude: 37.5510,
    longitude: 126.9170,
    features: {
      quiet: false,
      outlets: false,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "18",
    name: "메가커피 홍대점",
    address: "서울특별시 마포구 양화로 234",
    latitude: 37.5500,
    longitude: 126.9160,
    features: {
      quiet: false,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "19",
    name: "공차 홍대점",
    address: "서울특별시 마포구 와우산로 345",
    latitude: 37.5490,
    longitude: 126.9150,
    features: {
      quiet: true,
      outlets: false,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "20",
    name: "엔젤리너스 홍대점",
    address: "서울특별시 마포구 홍익로 678",
    latitude: 37.5480,
    longitude: 126.9140,
    features: {
      quiet: true,
      outlets: true,
      parking: true,
      wifi: true,
      spacious: true,
    },
  },
  // 더 많은 샘플 데이터 (21-50)
  {
    id: "21",
    name: "카페드롭탑 강남점",
    address: "서울특별시 강남구 테헤란로 456",
    latitude: 37.5050,
    longitude: 127.0350,
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "22",
    name: "카페드롭탑 홍대점",
    address: "서울특별시 마포구 양화로 345",
    latitude: 37.5470,
    longitude: 126.9130,
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "23",
    name: "더벤티 강남점",
    address: "서울특별시 강남구 강남대로 789",
    latitude: 37.4920,
    longitude: 127.0220,
    features: {
      quiet: false,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "24",
    name: "더벤티 홍대점",
    address: "서울특별시 마포구 와우산로 456",
    latitude: 37.5460,
    longitude: 126.9120,
    features: {
      quiet: false,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "25",
    name: "탐앤탐스 강남점",
    address: "서울특별시 강남구 역삼로 345",
    latitude: 37.5060,
    longitude: 127.0360,
    features: {
      quiet: true,
      outlets: true,
      parking: true,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "26",
    name: "탐앤탐스 홍대점",
    address: "서울특별시 마포구 홍익로 789",
    latitude: 37.5450,
    longitude: 126.9110,
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "27",
    name: "카페마마스 강남점",
    address: "서울특별시 강남구 테헤란로 567",
    latitude: 37.5070,
    longitude: 127.0370,
    features: {
      quiet: true,
      outlets: false,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "28",
    name: "카페마마스 홍대점",
    address: "서울특별시 마포구 양화로 456",
    latitude: 37.5440,
    longitude: 126.9100,
    features: {
      quiet: true,
      outlets: false,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "29",
    name: "파스쿠찌 강남점",
    address: "서울특별시 강남구 강남대로 890",
    latitude: 37.4910,
    longitude: 127.0210,
    features: {
      quiet: true,
      outlets: true,
      parking: true,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "30",
    name: "파스쿠찌 홍대점",
    address: "서울특별시 마포구 와우산로 567",
    latitude: 37.5430,
    longitude: 126.9090,
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "31",
    name: "카페보니또 강남점",
    address: "서울특별시 강남구 역삼로 456",
    latitude: 37.5080,
    longitude: 127.0380,
    features: {
      quiet: false,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "32",
    name: "카페보니또 홍대점",
    address: "서울특별시 마포구 홍익로 890",
    latitude: 37.5420,
    longitude: 126.9080,
    features: {
      quiet: false,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "33",
    name: "이탈리안레스토랑 카페 강남점",
    address: "서울특별시 강남구 테헤란로 678",
    latitude: 37.5090,
    longitude: 127.0390,
    features: {
      quiet: true,
      outlets: true,
      parking: true,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "34",
    name: "이탈리안레스토랑 카페 홍대점",
    address: "서울특별시 마포구 양화로 567",
    latitude: 37.5410,
    longitude: 126.9070,
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "35",
    name: "카페라뜨 강남점",
    address: "서울특별시 강남구 강남대로 901",
    latitude: 37.4900,
    longitude: 127.0200,
    features: {
      quiet: true,
      outlets: false,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "36",
    name: "카페라뜨 홍대점",
    address: "서울특별시 마포구 와우산로 678",
    latitude: 37.5400,
    longitude: 126.9060,
    features: {
      quiet: true,
      outlets: false,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "37",
    name: "카페베네 강남2호점",
    address: "서울특별시 강남구 역삼로 567",
    latitude: 37.5100,
    longitude: 127.0400,
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "38",
    name: "카페베네 홍대2호점",
    address: "서울특별시 마포구 홍익로 901",
    latitude: 37.5390,
    longitude: 126.9050,
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "39",
    name: "스타벅스 강남2호점",
    address: "서울특별시 강남구 테헤란로 789",
    latitude: 37.5110,
    longitude: 127.0410,
    features: {
      quiet: false,
      outlets: true,
      parking: true,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "40",
    name: "스타벅스 홍대2호점",
    address: "서울특별시 마포구 양화로 678",
    latitude: 37.5380,
    longitude: 126.9040,
    features: {
      quiet: false,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "41",
    name: "할리스 강남2호점",
    address: "서울특별시 강남구 강남대로 912",
    latitude: 37.4890,
    longitude: 127.0190,
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "42",
    name: "할리스 홍대2호점",
    address: "서울특별시 마포구 와우산로 789",
    latitude: 37.5370,
    longitude: 126.9030,
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "43",
    name: "투썸플레이스 강남2호점",
    address: "서울특별시 강남구 역삼로 678",
    latitude: 37.5120,
    longitude: 127.0420,
    features: {
      quiet: true,
      outlets: true,
      parking: true,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "44",
    name: "투썸플레이스 홍대2호점",
    address: "서울특별시 마포구 홍익로 912",
    latitude: 37.5360,
    longitude: 126.9020,
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "45",
    name: "이디야 강남2호점",
    address: "서울특별시 강남구 테헤란로 890",
    latitude: 37.5130,
    longitude: 127.0430,
    features: {
      quiet: false,
      outlets: false,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "46",
    name: "이디야 홍대2호점",
    address: "서울특별시 마포구 양화로 789",
    latitude: 37.5350,
    longitude: 126.9010,
    features: {
      quiet: false,
      outlets: false,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "47",
    name: "컴포즈커피 강남2호점",
    address: "서울특별시 강남구 강남대로 923",
    latitude: 37.4880,
    longitude: 127.0180,
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "48",
    name: "컴포즈커피 홍대2호점",
    address: "서울특별시 마포구 와우산로 890",
    latitude: 37.5340,
    longitude: 126.9000,
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: false,
    },
  },
  {
    id: "49",
    name: "카페베네 강남3호점",
    address: "서울특별시 강남구 역삼로 789",
    latitude: 37.5140,
    longitude: 127.0440,
    features: {
      quiet: true,
      outlets: true,
      parking: true,
      wifi: true,
      spacious: true,
    },
  },
  {
    id: "50",
    name: "카페베네 홍대3호점",
    address: "서울특별시 마포구 홍익로 923",
    latitude: 37.5330,
    longitude: 126.8990,
    features: {
      quiet: true,
      outlets: true,
      parking: false,
      wifi: true,
      spacious: true,
    },
  },
];

// 가상의 카페 이름 목록
const cafeNames = [
  "커피빈", "이디야커피", "할리스", "스타벅스", "투썸플레이스",
  "카페베네", "빽다방", "메가커피", "공차", "엔젤리너스",
  "카페드롭탑", "더벤티", "탐앤탐스", "카페마마스", "파스쿠찌",
  "카페보니또", "카페라뜨", "커피나무", "카페모카", "로스팅팩토리",
  "원두커피", "에스프레소바", "카페루나", "모닝커피", "데일리커피",
  "카페스토리", "커피하우스", "카페테리아", "로컬커피", "아티잔커피"
];

// 가상의 카페 특징 조합
const featureCombinations = [
  { quiet: true, outlets: true, parking: false, wifi: true, spacious: true },
  { quiet: true, outlets: true, parking: true, wifi: true, spacious: false },
  { quiet: false, outlets: true, parking: false, wifi: true, spacious: true },
  { quiet: true, outlets: false, parking: false, wifi: true, spacious: false },
  { quiet: false, outlets: true, parking: true, wifi: true, spacious: true },
  { quiet: true, outlets: true, parking: false, wifi: true, spacious: false },
  { quiet: false, outlets: false, parking: false, wifi: true, spacious: false },
  { quiet: true, outlets: true, parking: true, wifi: true, spacious: true },
];

// 운영시간 조합
const operatingHoursList = [
  { open: "07:00", close: "23:00" },
  { open: "08:00", close: "22:00" },
  { open: "07:30", close: "22:30" },
  { open: "09:00", close: "21:00" },
  { open: "06:30", close: "23:30" },
];

// 특정 위치 주변에 랜덤한 좌표를 생성하는 함수
function generateRandomLocation(
  centerLat: number,
  centerLng: number,
  minDistanceKm: number = 0.1,
  maxDistanceKm: number = 1.0
): { latitude: number; longitude: number } {
  // 랜덤한 거리 (km)
  const distance = minDistanceKm + Math.random() * (maxDistanceKm - minDistanceKm);
  
  // 랜덤한 방향 (0 ~ 360도)
  const bearing = Math.random() * 360;
  
  // 중심점에서 거리와 방향을 이용해 새 좌표 계산
  const R = 6371; // 지구 반경 (km)
  const lat1 = (centerLat * Math.PI) / 180;
  const lng1 = (centerLng * Math.PI) / 180;
  const brng = (bearing * Math.PI) / 180;
  
  const lat2 = Math.asin(
    Math.sin(lat1) * Math.cos(distance / R) +
      Math.cos(lat1) * Math.sin(distance / R) * Math.cos(brng)
  );
  
  const lng2 =
    lng1 +
    Math.atan2(
      Math.sin(brng) * Math.sin(distance / R) * Math.cos(lat1),
      Math.cos(distance / R) - Math.sin(lat1) * Math.sin(lat2)
    );
  
  return {
    latitude: (lat2 * 180) / Math.PI,
    longitude: (lng2 * 180) / Math.PI,
  };
}

// 사용자 위치 기반으로 가상의 카페를 생성하는 함수
function generateNearbyCafes(
  userLat: number,
  userLng: number,
  count: number = 15
): Cafe[] {
  const cafes: Cafe[] = [];
  const usedNames = new Set<string>();
  
  for (let i = 0; i < count; i++) {
    // 랜덤한 카페 이름 선택 (중복 방지)
    let cafeName = cafeNames[Math.floor(Math.random() * cafeNames.length)];
    let nameSuffix = "";
    let attempts = 0;
    while (usedNames.has(cafeName + nameSuffix) && attempts < 50) {
      nameSuffix = ` ${Math.floor(Math.random() * 100)}호점`;
      attempts++;
    }
    const finalName = cafeName + nameSuffix;
    usedNames.add(finalName);
    
    // 랜덤한 위치 생성 (0.1km ~ 1km 사이)
    const location = generateRandomLocation(userLat, userLng, 0.1, 1.0);
    
    // 랜덤한 특징 선택
    const features = featureCombinations[
      Math.floor(Math.random() * featureCombinations.length)
    ];
    
    // 랜덤한 운영시간 선택
    const operatingHours = operatingHoursList[
      Math.floor(Math.random() * operatingHoursList.length)
    ];
    
    // 주소 생성 (대략적인 주소)
    const address = `서울특별시 ${["강남구", "서초구", "송파구", "마포구", "용산구", "종로구"][Math.floor(Math.random() * 6)]} ${Math.floor(Math.random() * 100) + 1}번지`;
    
    cafes.push({
      id: `nearby-${i + 1}`,
      name: finalName,
      address: address,
      latitude: location.latitude,
      longitude: location.longitude,
      operatingHours: operatingHours,
      features: features,
    });
  }
  
  return cafes;
}

// 위치 기반으로 카페를 필터링하는 함수
export function getNearbyCafes(
  userLat: number,
  userLng: number,
  radiusKm: number = 1
): Cafe[] {
  // 기존 카페 중 반경 내에 있는 카페 필터링
  const existingCafes = initialCafes.filter((cafe) => {
    const distance = calculateDistance(
      userLat,
      userLng,
      cafe.latitude,
      cafe.longitude
    );
    return distance <= radiusKm;
  });
  
  // 사용자 위치 주변에 가상의 카페 생성 (기존 카페가 적을 경우)
  const nearbyCafes = generateNearbyCafes(userLat, userLng, 15);
  
  // 기존 카페와 생성된 카페를 합치고 중복 제거 (같은 위치에 있는 경우)
  const allCafes = [...existingCafes, ...nearbyCafes];
  
  // 거리순으로 정렬
  return allCafes
    .map((cafe) => ({
      ...cafe,
      distance: calculateDistance(
        userLat,
        userLng,
        cafe.latitude,
        cafe.longitude
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, 20); // 최대 20개까지만 표시
}

// 두 좌표 간의 거리를 계산하는 함수 (Haversine formula)
function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // 지구 반경 (km)
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// 동적으로 생성된 카페들을 브라우저 sessionStorage에 저장
export function cacheDynamicCafes(cafes: Cafe[]): void {
  if (typeof window !== "undefined") {
    const dynamicCafes = cafes.filter((cafe) => cafe.id.startsWith("nearby-"));
    sessionStorage.setItem("dynamicCafes", JSON.stringify(dynamicCafes));
  }
}

// ID로 카페를 찾는 함수 (동적으로 생성된 카페도 포함)
export function getCafeById(id: string): Cafe | undefined {
  // 먼저 기존 카페에서 찾기
  const existingCafe = initialCafes.find((cafe) => cafe.id === id);
  if (existingCafe) {
    return existingCafe;
  }
  
  // 동적으로 생성된 카페는 sessionStorage에서 찾기
  if (typeof window !== "undefined") {
    const cachedCafes = sessionStorage.getItem("dynamicCafes");
    if (cachedCafes) {
      try {
        const dynamicCafes: Cafe[] = JSON.parse(cachedCafes);
        return dynamicCafes.find((cafe) => cafe.id === id);
      } catch (e) {
        console.error("Failed to parse cached cafes:", e);
      }
    }
  }
  
  return undefined;
}

