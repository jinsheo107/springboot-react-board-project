package com.jinsheo.board_back.provider;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwpProvider {
  // JWT 서명 생성 및 검증을 위한 secreteKey 생성
  @Value("${secret-key}")
  private String secretKey;

  // JWT 생성 메서드
  public String create(String email) { // 전달받은 email을 기반으로 JWT 생성
    Date expiredDate = Date.from(Instant.now().plus(1, ChronoUnit.HOURS)); // 현재 시간 기준으로 1시간 뒤를 만료 시간으로 설ㅈ렁

    String jwt = Jwts.builder()
        .signWith(SignatureAlgorithm.HS256, secretKey) // 토큰에 서명 추가, 
        .setSubject(email).setIssuedAt(new Date()).setExpiration(expiredDate) // email을 토큰의 subject로 설정 후 생성 시간 및 만료 시간 설정
        .compact(); // 토큰을 최종적으로 문자열로 반환

    return jwt;
  }

  // JWT 검증 메서드
  public String validate(String jwt) { // 전달받은 JWT 검증
    Claims claims = null;

    try {
      claims = Jwts.parser().setSigningKey(secretKey) // 전달받은 JWT를 파싱하여 서명 검증 후 유효한 경우 Claims 객체를 반환
          .parseClaimsJws(jwt).getBody();
    } catch (Exception exception) {
      exception.printStackTrace();
      return null;
    }

    return claims.getSubject(); // 검증된 JWT의 email
  }

}
