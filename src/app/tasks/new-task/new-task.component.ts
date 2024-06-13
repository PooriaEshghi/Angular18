import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input() isAddingTask?: boolean;
@Output() cancel = new EventEmitter<void>();
onCancel(){
  this.isAddingTask = false;
  this.cancel.emit()
}
}
2