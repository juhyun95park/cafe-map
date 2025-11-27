"use client";

import { useState, useEffect, use } from "react";
import { notFound, useRouter } from "next/navigation";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getCafeById } from "@/lib/data/cafes";
import { Cafe } from "@/types/cafe";

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

interface CafeDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function CafeDetailPage({ params }: CafeDetailPageProps) {
  const { id } = use(params);
  const [cafe, setCafe] = useState<Cafe | undefined>(undefined);
  const router = useRouter();

  useEffect(() => {
    const foundCafe = getCafeById(id);
    if (!foundCafe) {
      router.push("/");
      return;
    }
    setCafe(foundCafe);
  }, [id, router]);

  if (!cafe) {
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
          <Link
            href="/"
            className="text-blue-600 hover:text-blue-800"
          >
            ← 목록으로 돌아가기
          </Link>
          <h1 className="mt-2 text-2xl font-bold text-gray-900">{cafe.name}</h1>
        </div>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* 카페 정보 */}
          <div className="space-y-6">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                기본 정보
              </h2>
              <div className="space-y-3">
                <div>
                  <span className="font-medium text-gray-700">주소:</span>
                  <p className="mt-1 text-gray-600">{cafe.address}</p>
                </div>
                {cafe.operatingHours && (
                  <div>
                    <span className="font-medium text-gray-700">운영시간:</span>
                    <p className="mt-1 text-gray-600">
                      {cafe.operatingHours.open} - {cafe.operatingHours.close}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* 특징 */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                특징
              </h2>
              <div className="flex flex-wrap gap-2">
                {cafe.features.quiet && (
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                    조용해요
                  </span>
                )}
                {cafe.features.outlets && (
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                    콘센트 많아요
                  </span>
                )}
                {cafe.features.parking && (
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-sm font-medium text-purple-800">
                    주차 가능
                  </span>
                )}
                {cafe.features.wifi && (
                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-medium text-yellow-800">
                    Wi-Fi
                  </span>
                )}
                {cafe.features.spacious && (
                  <span className="rounded-full bg-pink-100 px-3 py-1 text-sm font-medium text-pink-800">
                    넓어요
                  </span>
                )}
              </div>
            </div>

            {/* 리뷰 섹션 (Phase 3에서 구현) */}
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-4 text-xl font-semibold text-gray-900">
                리뷰
              </h2>
              <p className="text-gray-600">
                리뷰 기능은 다음 단계에서 구현됩니다.
              </p>
            </div>
          </div>

          {/* 지도 */}
          <div className="h-[600px] w-full rounded-lg border border-gray-200 bg-white shadow-sm">
            <CafeMap
              cafes={[cafe]}
              selectedCafeId={cafe.id}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

