package com.jinsheo.board_back.common;

public interface ResponseMessage {
  // HTTP Status 200
  String SUCCESS = "Success"; // interface에서는 자동으로 public static final 

  // Http Status 400
  String VALIDATE_FAILED = "Validation failed";
  String DUPLICATE_EMAIL = "Dubplicate email";
  String DUPLICATE_NICKNAME = "Duplicate nickname";
  String DUPLICATE_TEL_NUMBER = "Duplicate tel number";
  String NOT_EXISTED_USER = "This user does not exist";
  String NOT_EXISTED_BOARD = "This board does not exists";

  // HTTP Status 401
  String SIGN_IN_FAIL = "Login information mismatch";
  String SUTHORIZTION_FAIL = "Authorization Failed";

  // HTTP Status 403
  String NO_PERMISSION = "Do not have permission";

  // HTTP Status 500
  String DATABASE_ERROR = "Database error";
}
