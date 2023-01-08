export interface IFile {
  file_path: string;
}

export interface IDataset {
  row_count: number;
  col_count: number;
  columns: string[];
  samples: any;
}

export interface IDatasetInput {
  file: File;
  encoding: string;
  delimiter: string;
}
