import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface OptionsNode {
  name: string;
  children?: OptionsNode[];
}

const TREE_DATA: OptionsNode[] = [
  {
    name: 'Movies',
    children: [
      {name: 'Watched'},
      {name: 'Watchlist'},
      {name: 'Abandoned'},
    ]
  }
];

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  treeControl = new NestedTreeControl<OptionsNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<OptionsNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  ngOnInit(): void {
  }

  hasChild = (_: number, node: OptionsNode) => !!node.children && node.children.length > 0;
}
