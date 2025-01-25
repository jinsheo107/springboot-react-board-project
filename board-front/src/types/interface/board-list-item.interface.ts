export default interface BaordListItem {
  boardNo: number;
  title: string;
  content: string;
  boardTitleImage: string | null;
  favoriteCount: number;
  commentcount: number;
  viewCount: number;
  writeDatetime: string;
  writerNickname: string;
  writerProfileImage: string | null;
}