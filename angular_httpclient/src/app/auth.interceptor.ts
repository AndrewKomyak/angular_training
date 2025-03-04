import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export function AuthInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>{
    console.log(req);

    const cloned = req.clone({
        headers: req.headers.append('Auth', 'SOME RANDOM TOKEN')
    });

    return next(cloned);
}