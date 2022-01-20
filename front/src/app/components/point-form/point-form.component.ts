import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {PointService} from "../../services/point.service";

@Component({
  selector: 'app-point-form',
  templateUrl: './point-form.component.html',
  styleUrls: ['./point-form.component.css']
})
export class PointFormComponent implements OnInit {
  readonly xValues = [-4, -3, -2, -1, 0, 1, 2, 3, 4]; //{'-4','-3','-2','-1','0','1','2','3','4'} для координаты по оси X,
  readonly yMin = -3; // Text (-3 ... 3) для координаты по оси Y,
  readonly yMax = 3;
  readonly rValues = [-4, -3, -2, -1, 0, 1, 2, 3, 4]; // Select {'-4','-3','-2','-1','0','1','2','3','4'} для задания радиуса области

  x = new FormControl(-4);
  y = new FormControl('', Validators.compose([
    Validators.min(-3),
    Validators.max(3)
  ]));
  _r = new FormControl(1);

  @Output() rChange = new EventEmitter<number>();

  @Input()
  set r(value: number){
    this._r.setValue(value);
    console.log(`tried to set ${value}`);
    this.rChange.emit(this._r.value);
  }

  setR(newR: any){
    this._r.setValue(newR.target.value);
    this.pointService.r = this._r.value;
  }

  submit(){
    console.log(`отправка ${this.x.value} ${this.y.value} ${this._r.value}`);
    if(!this.validateY()){
      alert('Y должен быть чистом от -4 до 4');
    }
    else if(!this.validateR()){
      alert('R должен быть чистом от 1 до 4');
    }
    else{
      this.pointService.postPoint(
        parseFloat(this.x.value),
        parseFloat(this.y.value.replace('.', ',')),
        parseFloat(this._r.value)
      );
    }
  }

  reset(){
    this.x.setValue(-4);
    this.y.setValue('');
    this._r.setValue(1);
  }

  validateY() : boolean{
    return parseFloat(this.y.value) >= -4 && parseFloat(this.y.value) <= 4;
  }

  validateR(){
    return parseFloat(this._r.value) > 0;
  }

  constructor(private pointService: PointService) {
    this._r.valueChanges.subscribe((value)=>{
      this.rChange.emit(value);
    });
  }

  ngOnInit(): void {
  }

}
