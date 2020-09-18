import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.css']
})
export class ExchangeRateComponent implements OnInit {
public rates: Observable<ExchangeRateItem[]>;
public errorMessage: Subject<string>;

@Input() public apiUrl: string;

  constructor(private http: HttpClient) { 
    this.errorMessage = new Subject<string>();
  }

  ngOnInit(): void {
    this.rates = this.http.get<ExchangeRateItem[]>("/api/" + this.apiUrl).pipe(catchError(this.handleError(this.errorMessage)));
  }

  private handleError(subject){}
}

interface ExchangeRateItem{
  fromCurrency: string;
  toCurrency: string;
  value: number;
}
