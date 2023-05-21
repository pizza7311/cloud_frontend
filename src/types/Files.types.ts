/**
 * 파일아이템 컴포넌트 파라미터 타입
 */
export interface File {
  fileName: string;
  extention: string;
  thumbnail?: string;
  date: Date;
  owner: string; //uid
  size: number; //bytes
  fileUrl: string;
}
