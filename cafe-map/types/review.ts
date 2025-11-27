// 리뷰 태그 타입
export type ReviewTag =
  | "콘센트 자리 많아요"
  | "조용해요"
  | "오래 앉아 있기 좋아요"
  | "대화하기 좋아요"
  | "주차하기 편해요"
  | "Wi-Fi 빠르네요"
  | "넓어요"
  | "주말 오전에 붐벼요"
  | "평일 저녁은 한산해요"
  | "콘센트 부족해요"
  | "시끄러워요";

// 리뷰 타입
export interface Review {
  id: string;
  cafeId: string;
  tags: ReviewTag[];
  createdAt: string;
  comment?: string; // 선택적 코멘트
}

