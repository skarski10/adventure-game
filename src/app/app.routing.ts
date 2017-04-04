import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { RulesComponent } from './rules/rules.component';
import { LevelsComponent } from './levels/levels.component';
import { Level1nextComponent } from './level1next/level1next.component';

const appRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path: 'levels',
    component: LevelsComponent
  },
  {
    path: 'level-1/:id',
    component: Level1nextComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
