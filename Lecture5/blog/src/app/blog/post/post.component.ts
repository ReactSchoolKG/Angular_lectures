import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public id$ =
    this.route.params.pipe(map(({ id }) => id));
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
