import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { RulesComponent } from './rules/rules.component';
import { LevelsComponent } from './levels/levels.component';
import { Level2Component } from './level2/level2.component';

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
    path: 'level2/:id',
    component: Level2Component
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
