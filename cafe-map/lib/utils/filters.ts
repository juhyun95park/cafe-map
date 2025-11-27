import { Cafe, FilterOptions } from "@/types/cafe";

// 필터 옵션에 따라 카페를 필터링하는 함수
export function filterCafes(
  cafes: Cafe[],
  filters: FilterOptions
): Cafe[] {
  return cafes.filter((cafe) => {
    // 각 필터 조건을 확인
    if (filters.quiet !== undefined && cafe.features.quiet !== filters.quiet) {
      return false;
    }
    if (
      filters.outlets !== undefined &&
      cafe.features.outlets !== filters.outlets
    ) {
      return false;
    }
    if (
      filters.parking !== undefined &&
      cafe.features.parking !== filters.parking
    ) {
      return false;
    }
    if (filters.wifi !== undefined && cafe.features.wifi !== filters.wifi) {
      return false;
    }
    if (
      filters.spacious !== undefined &&
      cafe.features.spacious !== filters.spacious
    ) {
      return false;
    }
    return true;
  });
}

