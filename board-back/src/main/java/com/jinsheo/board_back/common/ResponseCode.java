package com.jinsheo.board_back.common;

public interface ResponseCode {
  // HTTP Status 200
  String SUCCESS = "SU"; // interface에서는 자동으로 public static final 

  // Http Status 400
  String VALIDATE_FAILED = "VF";
  String DUPLICATE_EMAIL = "DE";
  String DUPLICATE_NICKNAME = "DN";
  String DUPLICATE_TEL_NUMBER = "DT";
  String NOT_EXISTED_USER = "NE";
  String NOT_EXISTED_BOARD = "NB";

  // HTTP Status 401
  String SIGN_IN_FAIL = "SF";
  String SUTHORIZTION_FAIL = "AF";

  // HTTP Status 403
  String NO_PERMISSION = "NP";

  // HTTP Status 500
  String DATABASE_ERROR = "DBE";
}
