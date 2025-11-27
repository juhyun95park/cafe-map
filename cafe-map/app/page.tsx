"use client";

import { useState, useEffect } from "react";
import { Cafe, FilterOptions, Location } from "@/types/cafe";
import { getNearbyCafes, cacheDynamicCafes } from "@/lib/data/cafes";
import { getCurrentLocation, defaultLocation } from "@/lib/utils/location";
import { filterCafes } from "@/lib/utils/filters";
import dynamic from "next/dynamic";
import CafeCard from "@/components/cafe/CafeCard";
import Filter from "@/components/ui/Filter";

// react-leaflet은 클라이언트 사이드에서만 작동하므로 dynamic import 사용
const CafeMap = dynamic(() => import("@/components/cafe/CafeMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[600px] items-center justify-center rounded-lg border border-gray-200 bg-white">
      <div className="text-center">
        <div className="mb-4 text-lg font-medium">지도를 불러오는 중...</div>
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600 mx-auto"></div>
      </div>
    </div>
  ),
});

export default function Home() {
  const [cafes, setCafes] = useState<Cafe[]>([]);
  const [filteredCafes, setFilteredCafes] = useState<Cafe[]>([]);
  const [userLocation, setUserLocation] = useState<Location | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCafe, setSelectedCafe] = useState<Cafe | null>(null);

  useEffect(() => {
    // 초기에는 기본 위치(강남역)로 카페를 바로 표시
    setUserLocation(defaultLocation);
    const nearbyCafes = getNearbyCafes(
      defaultLocation.latitude,
      defaultLocation.longitude,
      1 // 사용자 위치 주변 1km 반경
    );
    // 동적으로 생성된 카페를 캐시에 저장 (상세 페이지에서 사용하기 위해)
    cacheDynamicCafes(nearbyCafes);
    setCafes(nearbyCafes);
    setFilteredCafes(nearbyCafes);
    setLoading(false);

    // 백그라운드에서 사용자 위치 가져오기 시도
    getCurrentLocation()
      .then((location) => {
        setUserLocation(location);
        const nearbyCafes = getNearbyCafes(
          location.latitude,
          location.longitude,
          1 // 사용자 위치 주변 1km 반경
        );
        // 동적으로 생성된 카페를 캐시에 저장
        cacheDynamicCafes(nearbyCafes);
        setCafes(nearbyCafes);
        setFilteredCafes(nearbyCafes);
      })
      .catch((err) => {
        console.warn("위치 정보를 가져올 수 없습니다:", err);
        // 기본 위치를 계속 사용
      });
  }, []);

  useEffect(() => {
    // 필터 적용
    const filtered = filterCafes(cafes, filters);
    setFilteredCafes(filtered);
  }, [filters, cafes]);

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const handleCafeClick = (cafe: Cafe) => {
    setSelectedCafe(cafe);
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-lg font-medium">카페 정보를 불러오는 중...</div>
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">카공여지도</h1>
          <p className="mt-1 text-sm text-gray-600">
            작업/공부하기 좋은 카페를 찾아보세요
          </p>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        {/* 필터 섹션 */}
        <div className="mb-6">
          <h2 className="mb-3 text-lg font-semibold text-gray-900">필터</h2>
          <Filter filters={filters} onFilterChange={handleFilterChange} />
        </div>


        {/* 결과 카운트 */}
        <div className="mb-4 text-sm text-gray-600">
          {filteredCafes.length}개의 카페를 찾았습니다
        </div>

        {/* 지도와 목록 */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* 지도 */}
          <div className="h-[600px] w-full rounded-lg border border-gray-200 bg-white shadow-sm">
            <CafeMap
              cafes={filteredCafes}
              userLocation={userLocation || undefined}
              selectedCafeId={selectedCafe?.id}
              onCafeClick={handleCafeClick}
            />
          </div>

          {/* 카페 목록 */}
          <div className="space-y-4">
            {filteredCafes.length === 0 ? (
              <div className="rounded-lg border border-gray-200 bg-white p-8 text-center">
                <p className="text-gray-600">
                  조건에 맞는 카페를 찾을 수 없습니다.
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  필터를 조정해보세요.
                </p>
              </div>
            ) : (
              filteredCafes.map((cafe) => (
                <CafeCard key={cafe.id} cafe={cafe} />
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
