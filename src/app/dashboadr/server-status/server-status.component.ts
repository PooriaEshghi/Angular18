import { Component, DestroyRef, OnChanges, OnDestroy, OnInit, SimpleChanges, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown' >('online');
  private destroyRef = inject(DestroyRef);
  private interval?: ReturnType<typeof setInterval>;
constructor(){
  effect((onClean) => {
    console.log(this.currentStatus());
    onClean(() => clearInterval(this.interval))
  })
}

ngOnInit(): void {
 this.interval = setInterval(() => {
    const rnd = Math.random();
    if(rnd < 0.5){
      this.currentStatus.set('online');
    }else if(rnd < 0.9){
      this.currentStatus.set('offline');
    }else{
      this.currentStatus.set('unknown');
    }
  },5000);
 
}
stopInterval(){
  
    clearInterval(this.interval)

}
ngOnDestroy(): void {
  
}
}
