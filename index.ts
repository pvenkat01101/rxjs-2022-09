import { Observable, Subscriber } from 'rxjs';
import { name$, storeDataOnServer, storeDataOnServerError } from './external';

//name$.subscribe((val) => console.log(val));

//storeDataOnServer('venkat').subscribe((val) => console.log('data saved'));

// storeDataOnServerError('error').subscribe({
//   next: (val) => console.log('error log'),
//   error: (err) => console.log('error check'),
// });

const Observer$ = new Observable<string>((Subscriber) => {
  console.log('Observer Execution');
  Subscriber.next('hello');
  Subscriber.next('reddy');
  setTimeout(() => {
    Subscriber.next('test');
    Subscriber.complete();
  }, 2000);
});

console.log('Before subscribe');
Observer$.subscribe((val) => {
  console.log(val);
});
console.log('After subscribe');
