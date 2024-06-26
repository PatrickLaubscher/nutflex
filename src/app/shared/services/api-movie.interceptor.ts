import { Injectable } from '@angular/core';
import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';

Injectable({
  providedIn: 'root'
})
export const apiMovieInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next) => {

  const Token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNmY5M2EzMjA3YjlmZDkxMjllZjkyMzFjMThjOTNiMiIsIm5iZiI6MTcxOTMwMTk4Mi45NzczMzEsInN1YiI6IjY2MzBmYTI0MjQyZjk0MDEyOTFlOGEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JImvERONHEkj3VMMWjcyhiFeiGHK_u0HBERzXCaQoWI";

  const authReq = req.clone({
    setHeaders: {
      Accept: 'application/Json',
      Authorization: `Bearer ${Token}`
    }
  });

  return next(authReq);
};
