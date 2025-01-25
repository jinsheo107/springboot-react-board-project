package com.jinsheo.board_back.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BoardListItem {
  private int boardNo;
  private String title;
  private String content;
  private String boardTitleImage;
  private int favoriteCount;
  private int commentCount;
  private int viewCount;
  private String writeDatetime;
  private String writerNicname;
  private String writerProfileImage;
}
