import { NgModule } from "@angular/core";
import { TasksComponent } from '../tasks/tasks.component';
import { TaskComponent } from "../tasks/task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";


@NgModule({
    declarations:[TasksComponent, TaskComponent, NewTaskComponent],
    exports:[TasksComponent, TaskComponent, NewTaskComponent]
})
export class TasksModule {}