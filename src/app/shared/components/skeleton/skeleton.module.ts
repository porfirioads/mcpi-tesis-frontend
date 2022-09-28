import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { EmptyTableSkeletonComponent } from './empty-table-skeleton/empty-table-skeleton.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [EmptyTableSkeletonComponent],
  imports: [CommonModule, NgxSkeletonLoaderModule, FlexLayoutModule],
  exports: [EmptyTableSkeletonComponent],
})
export class SkeletonModule {}
